(function($) {



  Drupal.behaviors.edoweb_drupal_theme_entity_minimize = {
    attach: function (context, settings) {

    var fieldLabel = 'Verbundkatalog-ID';
    var htattr = $('.field-name-field-edoweb-parallel .resolved', context).attr('data-curie');
    var htnr = '';
    if( htattr ){
      htnr = htattr.replace('lr:','');
    };


    $('.field-name-field-edoweb-parallel .field-label', context).text(fieldLabel);
    $('.field-name-field-edoweb-parallel', context).ajaxComplete(function() {
      //$(this).find('.field-label').text('HT-Nummer');
      $(this).find('table').remove();
      $('.field-name-field-edoweb-parallel').once().append( '<div class="field-items"><div class="field-item even">'
         + '<a target="_blank" href="http://193.30.112.134/F/?func=find-c&ccl_term=IDN%3D' + htnr + '"'
         + ' data-target-bundle="monograph" data-curie="lr:' + htnr + '" resource="http://lobid.org/resource/' + htnr + '" class="resolved">'
         + htnr +'</a>'
         + '</div></div>');
      $('.field-name-field-edoweb-doi').after($(this));

      });


    }
  };

  Drupal.behaviors.edoweb_drupal_theme_child = {
    attach: function (context, settings) {

    var fieldLabel = 'Datei';

    $('.field-name-field-edoweb-struct-child', context).ajaxComplete(function() {
      //$(this).find('.field-label').text('HT-Nummer');
      var isFile = $(this).find('.download');
      if( isFile ) {
        $(this).find('.item-label').text(fieldLabel);
      }
      /*
      $(this).find('table').remove();
      $('.field-name-field-edoweb-parallel').once().append( '<div class="field-items"><div class="field-item even">'
         + '<a target="_blank" href="http://193.30.112.134/F/?func=find-c&ccl_term=IDN%3D' + htnr + '"'
         + ' data-target-bundle="monograph" data-curie="lr:' + htnr + '" resource="http://lobid.org/resource/' + htnr + '" class="resolved">'
         + htnr +'</a>'
         + '</div></div>');
      $('.field-name-field-edoweb-doi').after($(this));
 */
      });


    }
  };


})(jQuery);
