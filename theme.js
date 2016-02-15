(function($) {



  Drupal.behaviors.edoweb_drupal_theme_entity_minimize = {
    attach: function (context, settings) {

      $('.field-name-field-edoweb-parallel .field-label').text('HT-Nummer');
      $('.field-name-field-edoweb-parallel .field-items').attr('style', 'display: block;');

      
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
