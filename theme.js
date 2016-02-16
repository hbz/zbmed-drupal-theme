(function($) {



  Drupal.behaviors.edoweb_drupal_theme_entity_minimize = {
    attach: function (context, settings) {

      // get HT-Number
      var htnr = $('.field-name-field-edoweb-parallel .resolved').attr('data-curie');
      htnr = htnr.replace("lr:","");

      // find the correct field
      //var newParallel = $('.field-name-field-edoweb-parallel').clone();
      //newParallel.find('.field-label').text('HT-Nummer');
      var htnummerDiv = '<div class="field field-name-field-edoweb-htnumber field-type-edoweb-ld-reference field-label-above">'
         + '<div class="field-label">Verbundkatalog-ID:</div><div class="field-items"><div class="field-item even">'
         + '<a target="_blank" href="http://193.30.112.134/F/?func=find-c&ccl_term=IDN%3D' + htnr + '"'
         + ' data-target-bundle="monograph" data-curie="lr:' + htnr + '" resource="http://lobid.org/resource/' + htnr + '" class="resolved">'
         + htnr +'</a>'
         + '</div></div></div>';
      
      
      // remove old html-code and add code to display HT-Number only, unfortunately the only way to prevent code from beiing evaluated again
      $('.field-name-field-edoweb-parallel').remove();
      $('.field-name-field-edoweb-doi').after(htnummerDiv);
 
    }
  };

})(jQuery);
