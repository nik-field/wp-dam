import { Corner, MDCMenu } from "@material/menu";
import { MDCDialog } from "@material/dialog";
import { MDCFloatingLabel } from "@material/floating-label/index";


var assetSearch = $("#asset-search");

var searching = $(".loading-spinner");
var loading = $(".loading-bars");

var searchForm = assetSearch.find("form");

var results = $("#search-results");
var initial = $("#initial-results");

var exactMessage = "<span class='search-message'>Exact Matches for: </span>";
var approxMessage = "<span class='search-message'>Approximate Matches for: </span>";

var index;
var elastic_results;
var elastic_docs;
var searchDone = new Event('searchdone', { bubbles: true });

function ajaxExec() {
  var data = {
    action: "asset_search",
    artist: $artist, //Defined on artist tax pages
  };
  typeof $project !== 'undefined' ? data.project = $project : null;

  $.ajax({
    url: ajax_url,
    data: data,
    error: function (errorThrown) {
      console.log(errorThrown);
      console.log("There is an error with AJAX!");
    },
    success: function (response) {
      if (!$.trim(response)) {
        results.html(
          'There aren\'t any assets! Add one by clicking <a href="./wp-admin/post-new.php?post_type=asset" class="mdc-theme-primary" style="text-decoration: underline;">here.</a>'
        );
        loading.hide();
      } else {
        var lg_card_tpl = $("#tpl-lg-card").html();

        var props = Object.keys(response[0]);

        index = elasticlunr(function () {
          this.setRef("addedon");
          for (var i = 0; i < props.length; i++) {
            this.addField(props[i]);
          }
        });

        initial.hide();
        results.empty();

        for (var i = 0; i < response.length; i++) {
          var r = response[i];
          var tags = r.tags;
          if (r.tags === false) {
            tags = "None specified";
          }
          var data = {
            id: r.id,
            permalink: r.permalink,
            title: r.title,
            artist: r.artist,
            artist_id: r.artist_id,
            project: r.project,
            project_id: r.project_id,
            attachment_id: r.attachment_id,
            addedon: r.addedon,
            displaydate: r.displaydate,
            thumbnail: r.thumbnail,
            display_size: r.display_size,
            icon: r.icon,
            format: r.format,
            filesize: r.filesize,
            dimensions: r.maxres,
            duration: r.duration,
            filetype: r.filetype,
            mime: r.mime,
            creator: r.creator,
            filename: r.filename,
            tags: tags,
            is_image: r.is_image,
            is_not_image: r.is_not_image,
            is_doc: r.is_doc,
            is_video: r.is_video,
            is_audio: r.is_audio,
            is_not_link: r.is_not_link,
            is_link: r.is_link,
            is_not_pdf: r.is_not_pdf,
          };

          index.addDoc(data);
        }

        const search_query = $("#text-field-hero-input").val();

        elastic_results = index.search(search_query);



        function allDocs() {
          results.empty();
          elastic_docs = index.documentStore.docs;
          $.each(elastic_docs, function (index) {
            var single_doc = elastic_docs[index];
            single_doc['json_data'] = JSON.stringify(single_doc);
            var html = template.render(lg_card_tpl, single_doc);
            $(html)
              .prependTo(results)
              .hide();
          });
        }

        if (search_query) {

          var first_approx_match = true;
          var first_exact_match = true;
          var divider = '<hr>';
          for (var j = 0; j < elastic_results.length; j++) {
            var parsed = elastic_results[j].doc;
            var parsed_values = Object.values(parsed);
            var parsed_values_lower = parsed_values.map(item => typeof item == 'string' ? item.toLowerCase() : item);
            var exact_match = Boolean(parsed_values_lower.includes(search_query.toLowerCase()));

            var html = template.render(lg_card_tpl, parsed);

            if (!exact_match && first_approx_match) {
              results.append(divider + approxMessage + '<span class="search-query">' + search_query + "</span>");
              first_approx_match = false;
            }
            if (exact_match && first_exact_match) {
              results.append(
                exactMessage + '<span class="search-query">' + search_query + "</span>"
              );
              first_exact_match = false;
            }


            $(html)
              .appendTo(results)
              .hide();

          }

        } else {
          loading.show();
          allDocs();
          results.prepend(
            '<span class="sort-label">Sorted by: </span>' +
            '<span class="sort-order">Most Recent</span>'
          );

          if (window.location.pathname !== '/share/') {
            document.getElementById("search-results").dispatchEvent(searchDone);
          }
        }
        var delay = 0;
        $("#search-results")
          .children("article")
          .each(function (index) {
            $(this)
              .delay(delay)
              .fadeToggle();
            delay += 100;

          });
        searching.hide();
        loading.hide();
      }
    },
  });
}

$(document).ready(function () {
  ajaxExec();
});

searchForm.submit(function (e) {
  e.preventDefault();
  searching.show();
  ajaxExec();
});



const assetDialog = new MDCDialog(document.querySelector(".dam-asset-dialog"));

$(".site-main").on("click", ".open-dialog", function () {
  var asset = $(this)
    .closest("article")
    .attr("asset-id");
  createDialog(parseInt(asset));
});

function createDialog(identifier) {
  if (identifier) {
    var tpl_dialog = $("#tpl-dialog").html();
    var docs = index.documentStore.docs;
    var doc = Object.values(docs).find(function (set) {
      return set.id == identifier;
    });
    var html = template.render(tpl_dialog, doc);
    $(".asset-dialog-surface").empty();
    $(".asset-dialog-surface").append(html);
  } else {
    return false;
  }
  dialogOpen();
}

function dialogOpen() {
  assetDialog.open();
  assetDialog.listen("MDCDialog:opened", function () {
    var diagMenuEl = this.querySelector(".mdc-dialog-menu");
    var menu = new MDCMenu(diagMenuEl);
    var diagMenuToggle = diagMenuEl.parentElement.querySelector(
      ".mdc-menu-toggle"
    );
    diagMenuToggle.addEventListener("click", function () {
      menu.open = !menu.open;
    });
    menu.setAnchorCorner(Corner.BOTTOM_RIGHT);
  });
}

createDialog();

var artistMenuItems = document.querySelectorAll(".mdc-list-item--artist");

artistMenuItems.forEach((el) => {
  var subMenu = el.querySelector(".projects-sub-menu");
  if (el.id === 'current-page') {
    $(subMenu).slideToggle(150);
  }
  if (el.children.length > 1 && el.id !== 'current-page') {
    var subMenuButton = el.querySelector(".artist-menu--dropdown");
    subMenuButton.addEventListener('click', () => {
      $(subMenu).slideToggle(150);
      subMenuButton.classList.toggle('dropdown-menu-open');
    })
  }
})


