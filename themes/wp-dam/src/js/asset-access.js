var content = $('.site-main');
var dialog = $('.mdc-dialog');
content.on('click', '.access-trigger', function () {
    var asset_id = $(this).attr('asset-id');
    if( asset_id.length ) {

        var data = {
            action: 'asset_access',
            'asset_triggered': asset_id
        };

        $.ajax( {
            type: 'POST',
            async: false,
            url: ajax_url,
            data: data,
            success: function (results) {
            }
        });
    }

});
dialog.on('click', '.dialog-access-trigger', function () {
    var asset_id = $(this).attr('asset-id');
    if (asset_id.length) {

        var data = {
            action: 'asset_access',
            'asset_triggered': asset_id
        };

        $.ajax({
            type: 'POST',
            async: false,
            url: ajax_url,
            data: data,
            success: function (results) {
            }
        });
    }

});
