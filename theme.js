(function($) {



  Drupal.behaviors.edoweb_drupal_theme_entity_minimize = {
    attach: function (context, settings) {

      $('.field-name-field-edoweb-parallel .field-label').text('HT-Nummer');
      var htnr = $('.field-name-field-edoweb-parallel .resolved').attr('data-curie');
      htnr.replace("lr:","");
      $('.field-name-field-edoweb-parallel').append('<div class="field-items">'+ htnr + '</div>');

      
    }
  };

  //Drupal.behaviors.edoweb_drupal_theme_datepicker = {
  //  attach: function (context, settings) {
  //    // datepicker
  //    $('#edit-field-edoweb-issued-und-0-value', context).datepicker({
  //      changeMonth:true,
  //      changeYear:true,
  //      dateFormat:"dd.mm.yy" 
  //    });
  //  }
  //};
})(jQuery);
