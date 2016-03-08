(function($) {

  Drupal.behaviors.edoweb_drupal_theme_entity_minimize = {
    attach: function (context, settings) {

    var fieldLabel = 'Verbundkatalog-ID:';
    var htattr = $('.field-name-field-edoweb-parallel .resolved', context).attr('data-curie');
    var htnr = '';
    if( htattr ){
      htnr = htattr.replace('lr:','');
    };

    // replace Label "Titelkopie von" with fieldLabel
    $('.field-name-field-edoweb-parallel .field-label', context).text(fieldLabel);

    $('.field-name-field-edoweb-parallel', context).ajaxComplete(function() {
      $('.field-name-field-edoweb-parallel').once().append( '<div class="field-items"><div class="field-item even">'
         + '<a target="_blank" href="http://193.30.112.134/F/?func=find-c&ccl_term=IDN%3D' + htnr + '"'
         + ' data-target-bundle="monograph" data-curie="lr:' + htnr + '" resource="http://lobid.org/resource/' + htnr + '" class="resolved">'
         + htnr +'</a>'
         + '</div></div>');
      $('.field-name-field-edoweb-medium').after($(this));
      });


    }
  };

  Drupal.behaviors.edoweb_drupal_theme_child = {
    attach: function (context, settings) {

    var fieldLabelParent = 'Dateiliste:';
    var fieldLabel = 'Download:';
    var thumbyUrl = 'https://api.ellinet-dev.hbz-nrw.de/tools/thumby?url=';
    var thumbSize = '&size=150';
    var serverUrl = 'https://ellinet-dev.hbz-nrw.de'

    $('.field-name-field-edoweb-struct-child', context).ajaxComplete(function() {

      $(this).find('.edoweb[data-entity-bundle="file"').once(function() {

       $('.field-name-field-edoweb-struct-child .field-label').text(fieldLabel);
       $('.field-name-field-edoweb-struct-child').find('.field-label:first').text(fieldLabelParent);
         var dataLink = $(this).find('h1 a').attr('href') + '/data';
         var mimetype = $(this).find('.download').attr('title').replace(/Download /, '').toLowerCase().replace(/-/, '/');
         var pictureField = '<div class="field field-name-field-edoweb-preview">'
           + '<div class="field-label"></div>'
           + '<div class="field-item thumb" >'
           + '<a href="' + serverUrl + dataLink + '" target="_blank">'
           + '<img src="'
           + thumbyUrl
           + serverUrl
           + dataLink
           + thumbSize
           + '" /></a>'
           + '</div>'
           + '<div class="field field-name-field-edoweb-filetype" >'
           + '<div class="field-items">'
           + '<div class="field-item" property="dc:format" style="display: none;">' + mimetype + '</div>'
           + '</div>'
           + '</div>'
           + '</div>';

         $('.field-name-field-edoweb-title').once().after($(pictureField));

        });

       $('.field-name-field-edoweb-preview').after($(this));

      });


    } 
  };

})(jQuery);

