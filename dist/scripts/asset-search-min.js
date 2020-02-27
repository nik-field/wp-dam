

var assetSearch = $("#asset-search");

var searchForm = assetSearch.find("form");

var results = $("#search-results");
var initial = $("#initial-results");

var message = "Search results for: ";

searchForm.submit(function (e) {
    e.preventDefault();

    var search_query = $("#text-field-hero-input").val();

    var data = {
        action: "asset_search",
        artist: $artist
    };

    $.ajax({
        url: ajax_url,
        data: data,
        success: function (response) {

            var lg_card_tpl = $('#tpl-lg-card').html();

            var props = Object.keys(response[0]);

            var index = elasticlunr(function () {
                this.setRef('id');
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
                    format: r.format,
                    filesize: r.filesize,
                    dimensions: r.maxres,
                    duration: r.duration,
                    filetype: r.filetype,
                    creator: r.creator,
                    filename: r.filename,
                    tags: tags,
                    is_image: r.is_image,
                    is_not_image: r.is_not_image
                };

                index.addDoc(data);

            }

            var elastic_results = index.search(search_query);

            function allDocs() {
                results.empty();
                var elastic_docs = index.documentStore.docs;
                $.each(elastic_docs, function (index) {
                    var single_doc = elastic_docs[index];
                    console.log('each is working');
                    var html = template.render(lg_card_tpl, single_doc);
                    $(html).appendTo(results).hide();
                });
            }


            if (search_query) {

                results.append(message + search_query);

                for (var j = 0; j < elastic_results.length; j++) {

                    var parsed = elastic_results[j].doc;

                    var html = template.render(lg_card_tpl, parsed);

                    $(html).appendTo(results).hide();
                }
            } else {
                allDocs();
            }
            var delay = 0;
            $("article").each(function () {
                $(this).delay(delay).fadeToggle();
                delay += 100;
            });
            console.log('Search Query: ' + search_query);
            new tippy('.copy2');
        }
    });
});
