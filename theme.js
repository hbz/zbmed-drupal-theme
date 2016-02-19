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
      //$(this).find('.field-label').text('HT-Nummer');
      //$(this).find('table').hide();
      $('.field-name-field-edoweb-parallel').once().append( '<div class="field-items"><div class="field-item even">'
         + '<a target="_blank" href="http://193.30.112.134/F/?func=find-c&ccl_term=IDN%3D' + htnr + '"'
         + ' data-target-bundle="monograph" data-curie="lr:' + htnr + '" resource="http://lobid.org/resource/' + htnr + '" class="resolved">'
         + htnr +'</a>'
         + '</div></div>');
      $('.field-name-field-edoweb-medium').after($(this));
      //$(this), context).find('table').hide();
      });


    }
  };

  Drupal.behaviors.edoweb_drupal_theme_child = {
    attach: function (context, settings) {

    var fieldLabel = 'Datei';
    var thumbyUrl = 'https://api.ellinet-dev.hbz-nrw.de/tools/thumby?url=';
    var thumbSize = '&size=150';
    var serverUrl = 'https://ellinet-dev.hbz-nrw.de'

    $('.field-name-field-edoweb-struct-child', context).ajaxComplete(function() {
      //$(this).find('.field-label').text('HT-Nummer');
      var dataLink = $('div[data-entity-bundle*="file"]');
      
      //alert(dataLink.html());
      
     if( dataLink.html() ) {
        var ref = $(this).attr('href');
        $(this).find('.field-label').text('Datei(en):');
        var link = $(this).find(".download").attr('href');
        //linkImg.attr('src', thumbyUrl + 'https://ellinet-dev.hbz-nrw.de/' + linkImg + thumbSize);
        $(this).once().append( '<div class="field-items"><div class="field-item even" property="regal:hasData">'
          + '<a class="thumb" href="' + serverUrl + link + '" target="_blank">'
          + '<img src="'
          + thumbyUrl
          + serverUrl
          + link
          + thumbSize
          + '" /></a></div></div>');
        }
      $('.field-name-field-edoweb-title').after($(this));
 
      });


    }
  };


})(jQuery);
