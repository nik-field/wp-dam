var content = $('.site-main');
content.on('click', '.access-trigger', function () {
    var asset_id = $(this).attr('asset-id');
    if( asset_id.length ) {

        var data = {
            action: 'asset_access',
            'asset_triggered': asset_id
        };

        $.ajax( {
            url: ajax_url,
            type: 'POST',
            data: data,
            success: function (results) {
            }
        });
    }

});
