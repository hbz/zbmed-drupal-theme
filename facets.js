(function($) {

  Drupal.behaviors.edoweb_drupal_theme_facets = {
    attach: function (context, settings) {

      // append the div for toggle functionality to each facet
      $('.item-list h3', context).each(function() {
        var facetHeader = $(this);
        var facetName = facetHeader.html();

        facetHeader.parent().attr('id', facetName);
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

      // replace action textes with icons
      replaceWithIcon($('.form-type-item a[data-bundle="monograph"]', context), 'octicon octicon-repo');
      replaceWithIcon($('.form-type-item a[data-bundle="journal"]', context), 'octicon octicon-versions');
      replaceWithIcon($('.form-type-item a[data-bundle="volume"]', context), 'octicon octicon-list-ordered');
      replaceWithIcon($('.form-type-item a[data-bundle="issue"]', context), 'octicon octicon-book');
      replaceWithIcon($('.form-type-item a[data-bundle="article"]', context), 'octicon octicon-file-text');
      replaceWithIcon($('.form-type-item a[data-bundle="file"]', context), 'octicon octicon-file-binary');

      replaceWithIcon($('.edoweb-tree a[data-target-bundle="monograph"]', context), 'octicon octicon-repo');
      replaceWithIcon($('.edoweb-tree a[data-target-bundle="journal"]', context), 'octicon octicon-versions');
      replaceWithIcon($('.edoweb-tree a[data-target-bundle="volume"]', context), 'octicon octicon-list-ordered');
      replaceWithIcon($('.edoweb-tree a[data-target-bundle="issue"]', context), 'octicon octicon-book');
      replaceWithIcon($('.edoweb-tree a[data-target-bundle="article"]', context), 'octicon octicon-file-text');
      replaceWithIcon($('.edoweb-tree a[data-target-bundle="file"]', context), 'octicon octicon-file-binary');

      replaceWithIcon($('label a[href="#"]'), 'batch-icons batch-icon-plus', context);
      replaceWithIcon($('label[for="edit-field-edoweb-parent-und"] a[href="#"]', context), 'batch-icons batch-icon-concat');
      replaceWithIcon($('label[for="edit-field-edoweb-identifier-ht-und-0-value"] a[href="#"]', context), 'batch-icons batch-icon-concat');
      replaceWithIcon($('label[for="edit-field-edoweb-parallel-und"] a[href="#"]', context), 'batch-icons batch-icon-concat');

      $('.edoweb-tree a[data-bundle="monograph"]', context).before($('<span>&nbsp;</span>').addClass('octicon octicon-repo'));
      $('.edoweb-tree a[data-bundle="journal"]', context).before($('<span>&nbsp;</span>').addClass('octicon octicon-versions'));
      $('.edoweb-tree a[data-bundle="volume"]', context).before($('<span>&nbsp;</span>').addClass('octicon octicon-list-ordered'));
      $('.edoweb-tree a[data-bundle="issue"]', context).before($('<span>&nbsp;</span>').addClass('octicon octicon-book'));
      $('.edoweb-tree a[data-bundle="article"]', context).before($('<span>&nbsp;</span>').addClass('octicon octicon-file-text'));
      $('.edoweb-tree a[data-bundle="file"]', context).before($('<span>&nbsp;</span>').addClass('octicon octicon-file-binary'));

      $('.entity-label-monograph', context).before($('<span>&nbsp;</span>').addClass('octicon octicon-repo'));
      $('.entity-label-journal', context).before($('<span>&nbsp;</span>').addClass('octicon octicon-versions'));
      $('.entity-label-volume', context).before($('<span>&nbsp;</span>').addClass('octicon octicon-list-ordered'));
      $('.entity-label-issue', context).before($('<span>&nbsp;</span>').addClass('octicon octicon-book'));
      $('.entity-label-article', context).before($('<span>&nbsp;</span>').addClass('octicon octicon-file-text'));
      $('.entity-label-file', context).before($('<span>&nbsp;</span>').addClass('octicon octicon-file-binary'));

      $('body.entity-type-monograph h1.title', context).addClass('mega-octicon octicon-repo');
      $('body.entity-type-journal h1.title', context).addClass('mega-octicon octicon-versions');
      $('body.entity-type-volume h1.title', context).addClass('mega-octicon octicon-list-ordered');
      $('body.entity-type-issue h1.title', context).addClass('mega-octicon octicon-book');
      $('body.entity-type-article h1.title', context).addClass('mega-octicon octicon-file-text');
      $('body.entity-type-file h1.title').addClass('mega-octicon octicon-file-binary');

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
