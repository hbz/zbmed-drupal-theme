(function($) {

  Drupal.behaviors.edoweb_drupal_theme_toggle_publissomenu = {
    attach: function (context, settings) {
      $( "#block-menu-menu-publisso-menue h2" ).click(function() {
        $( "#block-menu-menu-publisso-menue h2" ).toggleClass('open');
        $( "#block-menu-menu-publisso-menue .content" ).toggle( "slow", function() {
        });
      });
    }
  };

  Drupal.behaviors.edoweb_drupal_theme_entity_minimize = {
    attach: function (context, settings) {
    	
    var htattr = $('.field-name-field-edoweb-parallel .resolved', context).attr('data-curie');
    var htnr = '';
    if( htattr ){
      htnr = htattr.replace('lr:','');
    };
    $('.field-name-field-edoweb-parallel', context).ajaxComplete(function() {
      $('.field-name-field-edoweb-parallel').once().append( '<div class="field-items"></div>'); 
      $('.field-name-field-edoweb-medium').after($(this));
      });
    }
  };

  Drupal.behaviors.edoweb_drupal_theme_child = {
    attach: function (context, settings) {

    	
    $('td[property="http://purl.org/ontology/bibo/doi"]').each(function() {
        var link = $(this).html();
        $(this).contents().wrap('<a href="http://dx.doi.org/'+link+'" target="_blank"></a>');
    });
    
    $('tr.urn td.field-item').each(function() {
        var link = $(this).html();
        $(this).contents().wrap('<a href="http://nbn-resolving.de/'+link+'" target="_blank"></a>');
    });

    //var fieldLabelParent = 'Dateiliste:';
    var fieldLabel = 'Download:';
    var thumbSize = '&size=250';
    var serverUrl = 'https://' + window.location.hostname;
    //console.log("1");
    //console.log(context);
   
//    	console.log("2");
	    // Drupal.settings.edoweb is needed and available in edoweb module only
	    if ( Drupal.settings.edoweb ) {
	      var thumbyUrl =  Drupal.settings.edoweb.thumbyServiceUrl + '?url=';
	    }
	     if($('.active :contains("Edit")').html() != null || $('.active :contains("Bearbeiten")').html() != null){
	    	    	return;
	     }
	     console.log("3");


            $('tr.hasData', context).once(function(){
		//$(this).find('.field-label').html('Hallo');
	    
	     //$('.field-name-field-edoweb-struct-child .field-label').text(fieldLabel);
	     //$('.field-name-field-edoweb-struct-child').find('.field-label:first').text(fieldLabelParent);
	         var dataLink = $('tr.identifier td div a', context).attr('href') + '/data';
	         console.log('theme.js Zeile 66: ' + dataLink);
	         if("undefined/data"==dataLink)return;
				var mimetype = $('tr td div.mimeType').html();
				var pictureField = '<div class="field field-name-field-edoweb-preview">'
						+ '<div class="field-label"></div>'
						+ '<div class="field-item thumb" >'
						+ '<a href="'
						+ serverUrl
						+ dataLink
						+ '" target="_blank">'
						+ '<img src="'
						+ thumbyUrl
						+ serverUrl
						+ dataLink
						+ thumbSize
						+ '" /></a>'
						+ '</div>'
						+ '<div class="field field-name-field-edoweb-filetype" >'
						+ '<div class="field-items">'
						+ '<div class="field-item" property="dc:format" style="display: none;">'
						+ mimetype + '</div>' + '</div>' + '</div>' + '</div>';
				$('div.container', context).once().before($(pictureField));
	     });


	    // Preview for direct url call
            $('tr.hasPart', context).find('.fileView:first').once(function(){
		//$(this).find('.field-label').html('Hallo');
	    
	     //$('.field-name-field-edoweb-struct-child .field-label').text(fieldLabel);
	     //$('.field-name-field-edoweb-struct-child').find('.field-label:first').text(fieldLabelParent);
	         var dataLink = $('tr.identifier a', context).attr('href') + '/data';
	    //     console.log('theme.js Zeile 98: ' + dataLink);
	         if("undefined/data"==dataLink)return;
				var mimetype = $('tr td div.mimeType').html();
				var pictureField = '<div class="field field-name-field-edoweb-preview">'
						+ '<div class="field-label"></div>'
						+ '<div class="field-item thumb" >'
						+ '<a href="'
						+ serverUrl
						+ dataLink
						+ '" target="_blank">'
						+ '<img src="'
						+ thumbyUrl
						+ serverUrl
						+ dataLink
						+ thumbSize
						+ '" /></a>'
						+ '</div>'
						+ '<div class="field field-name-field-edoweb-filetype" >'
						+ '<div class="field-items">'
						+ '<div class="field-item" property="dc:format" style="display: none;">'
						+ mimetype + '</div>' + '</div>' + '</div>' + '</div>';
//console.log(mimetype);
				$('div.container', context).once().before($(pictureField));
	     });
    } 
  };


})(jQuery);

