import {Corner, MDCMenu} from "@material/menu";

var assetSearch = $("#asset-search");

var searching = $(".loading-spinner");
var loading = $(".loading-bars");

var searchForm = assetSearch.find("form");

var results = $("#search-results");
var initial = $("#initial-results");

var message = "<span class='search-message'>Search results for: </span>";

var index;
var elastic_results;


function ajaxExec() {


    var data = {
        action: "asset_search",
        artist: $artist //Defined on artist tax pages
    };

    $.ajax({
        url: ajax_url,
        data: data,
        error: function() {
            alert('No Assets!');
            loading.hide();
        },
        success: function (response) {
            
            var lg_card_tpl = $('#tpl-lg-card').html();

            var props = Object.keys(response[0]);

            index = elasticlunr(function () {
                this.setRef('addedon');
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
                    tags = 'None specified';
                }
                var data = {
                    id: r.id,
                    permalink: r.permalink,
                    title: r.title,
                    artist: r.artist,
                    project: r.project,
                    addedon: r.addedon,
                    displaydate: r.displaydate,
                    thumbnail: r.thumbnail,
                    display_size: r.display_size,
                    format: r.format,
                    filesize: r.filesize,
                    dimensions: r.maxres,
                    duration: r.duration,
                    filetype: r.filetype,
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
                };

                index.addDoc(data);


            }


            const search_query = $("#text-field-hero-input").val();

            elastic_results = index.search(search_query);

            function allDocs() {
                results.empty();
                var elastic_docs = index.documentStore.docs;
                $.each(elastic_docs, function (index) {
                    var single_doc = elastic_docs[index];
                    var html = template.render(lg_card_tpl, single_doc);
                    $(html).prependTo(results).hide();
                });
            }


            if (search_query) {

                results.append(message + '<span class="search-query">' + search_query + '</span>');

                for (var j = 0; j < elastic_results.length; j++) {

                    var parsed = elastic_results[j].doc;

                    var html = template.render(lg_card_tpl, parsed);
                    $(html).appendTo(results).hide();
                }
            } else {
                loading.show();
                allDocs();
                results.prepend('<span class="sort-label">Sorted by: </span>' + '<span class="sort-order">Most Recent</span>');
            }
            var delay = 0;
            $("#search-results").children("article").each(function () {
                $(this).delay(delay).fadeToggle();
                delay += 100;
            });
            searching.hide();
            loading.hide();


        }
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

import {MDCDialog} from '@material/dialog';

const dialog = new MDCDialog(document.querySelector('.mdc-dialog'));

$('.site-main').on('click', '.open-dialog', function () {
    var asset = $(this).closest('article').attr('asset-id');
    createDialog(parseInt(asset));
});

function createDialog(identifier) {
    if (identifier) {
        var tpl_dialog = $('#tpl-dialog').html();
        var docs = index.documentStore.docs;
        var doc = Object.values(docs).find(function (set) {
            return set.id == identifier;
        });
        var html = template.render(tpl_dialog, doc);
        $('.mdc-dialog__surface').empty();
        $('.mdc-dialog__surface').append(html);
    } else {
        return false;
    }
    dialogOpen();
}

function dialogOpen() {
    dialog.open();
    dialog.listen('MDCDialog:opened', function () {
        var diagMenuEl = this.querySelector('.mdc-dialog-menu');
        var menu = new MDCMenu(diagMenuEl);
        var diagMenuToggle = diagMenuEl.parentElement.querySelector('.mdc-menu-toggle');
        diagMenuToggle.addEventListener('click', function () {
            menu.open = !menu.open;
        });
        menu.setAnchorCorner(Corner.BOTTOM_RIGHT);
    });

}

createDialog();





