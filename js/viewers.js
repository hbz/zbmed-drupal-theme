(function($) {

    Drupal.behaviors.edoweb_drupal_image_viewer = {
    attach: function (context, settings) {

      
      // Mimetype selection
      // Query for mediatype image
      $('.fileDetails:first .mimeType:contains("image")', context).once(function(){
        var mediaThumb = $(this);
        var mediaUrl = null;
        var playerElement = 'video';

        appendDzViewer(mediaThumb);
      });

      
      function appendDzViewer(mediaThumb){
        
        // Prepare Viewer
        // Drupal.settings.edoweb is needed and available in module edoweb only
        if ( Drupal.settings.edoweb ) {
          var serviceUrl = Drupal.settings.edoweb.deepzoomServiceUrl + '?imageUrl=';
        }
        var callbackString = "&callback=?";
        var mediaUrl = null;
        var tileSourcesFn = null;
        
        var thumbreference = $('.field-name-field-edoweb-preview .thumb a', context);
        mediaUrl = thumbreference.attr('href');
        var mime = mediaThumb.html();
        
        thumbreference.append('<div class="viewer" id="osd_view" style="width: 800px; height: 600px; background:#ccc;"></div>');

        // initialize and hide dialog-window for OpenSeaDragon
        $('#osd_view', context).once('dialogDiv', function() {
          $(this).dialog({
            modal: true,
            autoOpen: false,
            height: ($(window).height() -20),
            width: ($(window).width() -20),
            buttons: {
              Ok: function() {
                $( this ).dialog( "close" );
              }
            },
            close: function() {
              //if(viewer){
                //viewer.destroy();
                //alert('viewer zertört');
              //}
            }
          });
        });  
        
        // bind click event to thumbreference
        thumbreference.click(function(){
          //alert('added click');
          if(typeof viewer != "undefined"){
            //alert(viewer);
            viewer.destroy();
          }
          deepZoomService(serviceUrl, mediaUrl, callbackString);
          $("#osd_view").dialog("open");
          return false;
        });
        
      };

      // ajax request to deepZoomService
      function deepZoomService (serviceUrl, mediaUrl, callbackString){
        var url = serviceUrl + mediaUrl + callbackString;
	console.log(url);
        var tileSourcesFn = null; 
        $.getJSON(url, function(json){
        tileSourcesFn = json;
         viewer = OpenSeadragon({
           id: "osd_view",
           prefixUrl: "../sites/all/themes/zbmed-drupal-theme/OSimages/",
           tileSources: {
             Image: {
               xmlns:    "http://schemas.microsoft.com/deepzoom/2008",
               Url: tileSourcesFn.Url + "/",
               Format:   tileSourcesFn.Format, 
               Overlap:  tileSourcesFn.Overlap, 
               TileSize: tileSourcesFn.TileSize,
               Size: {
                 Height: tileSourcesFn.Size.Height,
                 Width:  tileSourcesFn.Size.Width
               }
             }
           },
           showNavigator: "true",
         });
       });
      }; 
    }
  };


  Drupal.behaviors.edoweb_drupal_video_html5_viewer = {
    attach: function (context, settings) {


      // Mimetype selection
      // Query for mimetype mp4
      $('.fileDetails:first .mimeType:contains("video/mp4")', context).once(function(){
        var mediaThumb = $(this);
        var mediaUrl = null;
        var playerElement = 'video';

        appendHtml5Viewer(mediaThumb, playerElement);
      });

      // Query for mimetype webm
      $('.fileDetails:first .mimeType:contains("video/webm")', context).once(function(){
        var mediaThumb = $(this);
        var mediaUrl = null;
        var playerElement = 'video';

        appendHtml5Viewer(mediaThumb, playerElement);
      });

      // Query for mimetype mpeg
      $('.fileDetails:first .mimeType:contains("video/webm")', context).once(function(){
        var mediaThumb = $(this);
        var mediaUrl = null;
        var playerElement = 'audio';

        appendHtml5Viewer(mediaThumb, playerElement);
      });

  
      // append appropriate player
      // add code for html5 av-player
     function appendHtml5Viewer(mediaThumb, playerElement){

        var thumbreference = $('.field-name-field-edoweb-preview .thumb a', context);
        mediaUrl = thumbreference.attr('href');
        var mime = mediaThumb.html();

        thumbreference.parent().html('<div><' + playerElement + ' width="500" controls><source src="' 
        + mediaUrl + '" type="' + mime + '"></' + playerElement + '></div>');
     };
    }
  };
  
  
})(jQuery); 

