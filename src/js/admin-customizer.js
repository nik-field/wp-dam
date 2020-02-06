var $ = jQuery;
$(document).ready(function () {
    if (!$("input[name='is_artist_or_project_select_type']:checked").val()) {
        $('#tag-name').prop('disabled', true);
        $('.term-project_type-wrap').hide();
        $('.term-project_yearyear_select-wrap').hide();
    } else {
        $('#tag-name').prop('disabled', false);
    }

    $("input[name='is_artist_or_project_select_type']").click(function () {
        if (!$("#tag-name").prop('disabled', false)) {
            $('#tag-name').prop('disabled', false);
        }
        if ($("input[value='is_artist_or_project_project']:checked").val()) {
            $('.term-project_type-wrap').show().addClass("form-required");
            $('.term-project_yearyear_select-wrap').show().addClass("form-required");

        }
        if ($("input[value='is_artist_or_project_artist']:checked").val()) {
            $('.term-project_type-wrap').hide();
            $('.term-project_yearyear_select-wrap').hide();
        }
    });

});

//Creates slug from the Name
$(document).ready(function () {
    (function ($) {
        $.fn.slugfromtitle = function (options) {
            var $target = this;
            var $source = ((options.source) ? $(options.source) : false);
            var $prefix = ((options.prefix) ? options.prefix + "-" : "");
            var $suffix = ((options.suffix) ? "-" + options.suffix : "");
            var $readonly = options.readonly || false;

            var disableSource = null;

            if ($source && $readonly === true) {
                $target.attr('readonly', true);
            }
            if ($target.val()) {
                disableSource = true;
            }

            var createSlug = function (str) {
                str = str.toLowerCase();

                var map = {
                    " ": "-",
                    "æ": "ae",
                    "á": "a",
                    "ð": "d",
                    "é": "e",
                    "í": "i",
                    "ó": "o",
                    "ú": "u",
                    "ö": "o",
                    "þ": "th",
                    "ø": "o",
                    "å": "a",
                    "/": "-",
                    "_": "-"
                };

                for (var k in map) {
                    if (typeof map[k] !== 'function') str = str.replace(new RegExp(k, 'g'), map[k]);
                }

                // return and remove invalid chars and colapse dashes
                return str.replace(/[^a-z0-9 -]/g, '').replace(/-+/g, '-');
            };
            if ($source) {
                $source.on('keyup change', function () {
                    if ($target.val() && disableSource === true) {
                        return;
                    }
                    disableSource = false;
                    var slug = createSlug($prefix + $(this).val() + $suffix);
                    $target.val(slug);
                });
            }
            $target.on('keyup change', function () {
                if (disableSource === false) {
                    disableSource = true;
                }
                var slug = createSlug($(this).val());
                $target.val(slug);
            });
        };
    })(jQuery);

    $('#tag-slug').slugfromtitle({
        source: '#tag-name',
        readonly: true
    });
});


