(function($) {



  Drupal.behaviors.edoweb_drupal_isbn10_format = {
    attach: function (context, settings) {

      var serviceurl = "https://nyx.hbz-nrw.de/";
      var service = "isbn?value=";
      // Use callback if Service is JSONP
      //var callback = "&callback=?";
      var callback = "";

      $('.field-name-field-edoweb-isbn10 .field-item', context).once(function(){
        
        var isbn = $(this).html();
        getIsbnFormatted();
  
  
        function getIsbnFormatted (){
          var url = serviceurl + service + isbn + callback;
    
          $.getJSON(url, function(json) {
             $('.field-name-field-edoweb-isbn10 .field-item').html(json.result.isbn10formatted);

             $('.field-name-field-edoweb-isbn10')
                .after('<div class="field field-name-field-edoweb-isbn13"></div>');

             $('.field-name-field-edoweb-isbn10').hide();
             $('.field-name-field-edoweb-isbn13').append('<div class="field-label">ISBN-13:</div><div class="field-items"><div class="field-item">' + json.result.isbn13formatted + '</div></div>');
             });
          };
  
      });
    }
  };

})(jQuery);
