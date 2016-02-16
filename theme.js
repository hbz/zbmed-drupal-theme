(function($) {



  Drupal.behaviors.edoweb_drupal_theme_entity_minimize = {
    attach: function (context, settings) {

      // find the correct field
      $('.field-name-field-edoweb-parallel .field-label').text('HT-Nummer');
      // get HT-Number
      var htnr = $('.field-name-field-edoweb-parallel .resolved').attr('data-curie');
      htnr.replace("Ir:","");
      // replace old html-code with code to display HT-Number only
      $('.field-name-field-edoweb-parallel table').remove();
      $('.field-name-field-edoweb-parallel').append('<div class="field-items">'
      + '<table class=""><tbody><td>'
      + htnr + 
      '</td></tbody></table></div>');

      
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
