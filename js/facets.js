(function($) {

  Drupal.behaviors.edoweb_drupal_theme_facets = {
    attach: function (context, settings) {

      // append the div for toggle functionality to each facet
      $('.item-list h3', context).each(function() {
        var facetHeader = $(this);
        var facetName = facetHeader.html().replace(/\W/g,"");

        facetHeader.parent().attr('id', facetName.replace(/\W/g,""));
        //alert(facetName + ': ' +  $.cookie(facetName));
       if ($.cookie(facetName)) {
          facetHeader.append('<div class="toggleButton"><span class="' + $.cookie(facetName) + '"></span>&nbsp;</div>');
          //$(this).find('div span.octicon-triangle-up').parent().parent().parent().find("ul").css('display', 'block');
          facetHeader.find('div span.octicon-triangle-down').parent().parent().parent().find("ul").css('display', 'none');
        } else {
          facetHeader.append('<div class="toggleButton"><span class="octicon octicon-triangle-up"></span>&nbsp;</div>');
        }
      });

      // restore order of facets from cookie
      if ($.cookie('sortFacets')) {
        var sortFacets = $('.item-list h3', context).parent();
        var facetsParent = $('.item-list h3', context).parent().parent();
        var cookieSplit = $.cookie('sortFacets').split(' ');
        var i;
        for (i=0; i < cookieSplit.length; i++) {
          var part = sortFacets.filter('#' + cookieSplit[i].trim());
          facetsParent.append(part);
        };
      }

      // add sortable behaviour to facet list
      $('.edoweb-facets .fieldset-wrapper', context).sortable({
        update: function(event, ui) {
          var sorts = $('.edoweb-facets .fieldset-wrapper', context).sortable('toArray');
          var i = 0;
          var cookieValue = '';
          //alert(sorts.length);
          while (i < sorts.length) {
            cookieValue = cookieValue +' ' + sorts[i];
            i++;
          }
          $.cookie('sortFacets', cookieValue.trim());
        },
      });

      // toggle functionality
      $('.item-list h3 div span', context).click(function() {
          var facet = $(this).parent().parent().parent().find("ul");
          facet.toggle("clip", function() {
            var facetHeader = $(this).parent().find('h3 div span');
            facetHeader.toggleClass('octicon-triangle-down').toggleClass('octicon-triangle-up');
            var status = facetHeader.attr('class');
            var facetName = facetHeader.parent().parent().parent().attr('id');
            $.cookie(facetName, status);
          });
      });
    }
  };

  Drupal.behaviors.edoweb_drupal_theme_icons = {
    attach: function (context, settings) {

      var icons = {
        'volume': 'octicon-list-ordered',
        'issue': 'octicon-book',
        'file': 'octicon-file-binary',
        'version': 'octicon-git-branch'
      }

      for (var bundle in icons) {
        var icon = icons[bundle];
        $('#content .form-type-item a[data-bundle="' + bundle + '"]', context).prepend($('<span>&nbsp;</span>').addClass('octicon ' + icon));
        $('#edoweb-tree-menu a[data-bundle="' + bundle + '"]', context).prepend($('<span>&nbsp;</span>').addClass('octicon ' + icon));
        $('.edoweb-tree a[data-bundle="' + bundle + '"]', context).before($('<span>&nbsp;</span>').addClass('octicon ' + icon));
        $('.entity-label-' + bundle, context).before($('<span>&nbsp;</span>').addClass('octicon ' + icon));
        $('body.entity-type-' + bundle + ' h1.title', context).prepend($('<span>&nbsp;</span>'). addClass('mega-octicon ' + icon));
      }

      replaceWithIcon($('label a[href="#"]'), 'batch-icons batch-icon-plus', context);
      replaceWithIcon($('label[for="edit-field-edoweb-parent-und"] a[href="#"]', context), 'batch-icons batch-icon-concat');
      replaceWithIcon($('label[for="edit-field-edoweb-identifier-ht-und-0-value"] a[href="#"]', context), 'batch-icons batch-icon-concat');
      replaceWithIcon($('label[for="edit-field-edoweb-parallel-und"] a[href="#"]', context), 'batch-icons batch-icon-concat');

      function replaceWithIcon(target, iconCss) {
        target
          .attr('title', target.html())
          .html('<span class="' + iconCss + '"></span>');
      }

    }
  };

  Drupal.behaviors.edoweb_drupal_theme_livivoicons = {
    attach: function (context, settings) {

      var icons = {
        'monograph': 'livivoicon-doctype-mono',
        'journal': 'livivoicon-doctype-journal',
        'article': 'livivoicon-doctype-article',
        'webpage': 'livivoicon-doctype-online',
        'diss': 'livivoicon-doctype-diss',
        'av': 'livivoicon-doctype-av',
        'conf': 'livivoicon-doctype-conf',
        'part': 'livivoicon-doctype-collection',
        'researchData':'livivoicon-doctype-conf',
        'chapter':'livivoicon-doctype-article',
        'ktblData':'livivoicon-doctype-ktbl',
        'proceeding':'livivoicon-doctype-article',
		'link':'octicon-link-external'
      }
      $('.glyphicon-link').removeClass('glyphicon').removeClass('glyphicon-link').addClass('octicon '+icons['link']);

      for (var bundle in icons) {
        var icon = icons[bundle];
        $('#content .form-type-item a[data-bundle="' + bundle + '"]', context).prepend($('<span>&nbsp;</span>').addClass('livivoicon ' + icon));
        $('#edoweb-tree-menu a[data-bundle="' + bundle + '"]', context).prepend($('<span>&nbsp;</span>').addClass('livivoicon ' + icon));
        $('.edoweb-tree a[data-bundle="' + bundle + '"]', context).before($('<span>&nbsp;</span>').addClass('livivoicon ' + icon));
        $('.entity-label-' + bundle, context).before($('<span>&nbsp;</span>').addClass('livivoicon ' + icon));
        $('body.entity-type-' + bundle + ' h1.title', context).prepend($('<span>&nbsp;</span>'). addClass('mega-livivicon ' + icon));
      }
 
	  // Call for the new forms-API
	  $('.form-type-item a[data-bundle="ktblData"]').attr("href", Drupal.settings.edoweb.formsServiceUrl + '/researchdataktbl/');
	  $('.form-type-item a[data-bundle="ktblData"]').hide();
	  
      replaceWithIcon($('label a[href="#"]'), 'batch-icons batch-icon-plus', context);
      replaceWithIcon($('label[for="edit-field-edoweb-parent-und"] a[href="#"]', context), 'batch-icons batch-icon-concat');
      replaceWithIcon($('label[for="edit-field-edoweb-identifier-ht-und-0-value"] a[href="#"]', context), 'batch-icons batch-icon-concat');
      replaceWithIcon($('label[for="edit-field-edoweb-parallel-und"] a[href="#"]', context), 'batch-icons batch-icon-concat');

      function replaceWithIcon(target, iconCss) {
        target
          .attr('title', target.html())
          .html('<span class="' + iconCss + '"></span>');
      }
      
    }
  };


  Drupal.behaviors.edoweb_drupal_theme_zoom = {
    attach: function (context, settings) {
      // add zoom control to search result listing
      $('.edoweb-entity-list ul.pager:first', context).append('<div class="toggleButton"><span class="batch-icons batch-icon-zoom-plus"></span><span class="batch-icons batch-icon-zoom-minus"></div>');
      if ($.cookie('table-font-size')) {
        $('table', context).css('font-size', $.cookie('table-font-size') + 'px');
      }
      $('.edoweb-entity-list ul.pager span.batch-icon-zoom-plus', context).click(function() {
        var size = $('table').css('font-size');
        var newSize = parseFloat(size) + 1;
        $('table').css('font-size', newSize);
        $.cookie("table-font-size", newSize);
      });
      $('.edoweb-entity-list ul.pager span.batch-icon-zoom-minus', context).click(function() {
        var size = $('table').css('font-size');
        var newSize = parseFloat(size) - 1;
        $('table').css('font-size', newSize);
        $.cookie("table-font-size", newSize);
      });
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
