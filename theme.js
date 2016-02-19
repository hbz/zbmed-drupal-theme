(function($) {

  Drupal.behaviors.edoweb_drupal_theme_entity_minimize = {
    attach: function (context, settings) {

    var fieldLabel = 'Verbundkatalog-ID';
    var htattr = $('.field-name-field-edoweb-parallel .resolved', context).attr('data-curie');
    var htnr = '';
    if( htattr ){
      htnr = htattr.replace('lr:','');
    };

    // replace Label "Titelkopie von" with fieldLabel
    $('.field-name-field-edoweb-parallel .field-label', context).text(fieldLabel);

    $('.field-name-field-edoweb-parallel', context).ajaxComplete(function() {
      //$(this).find('.field-label').text('HT-Nummer');
      //alert($(this).find('table').html());   //.hide();

      $(this, context).once().append( '<div class="field-items"><div class="field-item even">'
         + '<a target="_blank" href="http://193.30.112.134/F/?func=find-c&ccl_term=IDN%3D' + htnr + '"'
         + ' data-target-bundle="monograph" data-curie="lr:' + htnr + '" resource="http://lobid.org/resource/' + htnr + '" class="resolved">'
         + htnr +'</a>'
         + '</div></div>');
      $('.field-name-field-edoweb-medium').after($(this));
      //$(this, context).find('table').hide();

      });


    }
  };

})(jQuery);

