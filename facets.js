
// append the div for toggle functionality to each facet
function appendToggle() {
  jQuery('.item-list h3').each(function(){
    var facetHeader = jQuery(this);
    var facetName = facetHeader.html();
    
    facetHeader.parent().attr('id', facetName);
    //alert(facetName + ': ' +  jQuery.cookie(facetName));
    if(jQuery.cookie(facetName)){
      facetHeader.append('<div class="toggleButton"><span class="' + jQuery.cookie(facetName) + '"></span>&nbsp;</div>');
      //jQuery(this).find('div span.octicon-triangle-up').parent().parent().parent().find("ul").css('display', 'block');
      facetHeader.find('div span.octicon-triangle-down').parent().parent().parent().find("ul").css('display', 'none');
    }else{
      facetHeader.append('<div class="toggleButton"><span class="octicon octicon-triangle-up"></span>&nbsp;</div>');
    }
    
    
  });
  
}

function appendSorting(){
    
    if(jQuery.cookie('sortFacets')){
      var sortFacets = jQuery('.item-list h3').parent().clone();
      
      var activeFacets = jQuery('.item-list .edoweb-facets-active').parent().clone();
      var facetsParent = jQuery('.item-list h3').parent().parent();
      facetsParent.children().remove();
      
      facetsParent.append(activeFacets);
    
      // javascript
      var cookieSplit = jQuery.cookie('sortFacets').split(' ');
      var i;
      for(i=0; i < cookieSplit.length; i++){
	var part = sortFacets.filter('#' + cookieSplit[i]);
	facetsParent.append(part);
      };
      jQuery.cookie
    }
}

function appendZoom(){
  jQuery('.edoweb-entity-list ul.pager:first').append('<div class="toggleButton"><span class="batch-icons batch-icon-zoom-plus"></span><span class="batch-icons batch-icon-zoom-minus"></div>');
}

function appendSortable() {
  jQuery('.edoweb-facets .fieldset-wrapper').sortable({
      update: function(event, ui){
	var sorts = jQuery('.edoweb-facets .fieldset-wrapper').sortable('toArray');
	var i = 0;
	var cookieValue = '';
	//alert(sorts.length);
	while(i < sorts.length){
	  cookieValue = cookieValue +' ' + sorts[i];
	  i++;
	}
	jQuery.cookie('sortFacets', cookieValue.trim());
      },
   });  
}

// toggle functionality
function expandFacet() {
  jQuery('.item-list h3 div span').click(function(){
    var facet = jQuery(this).parent().parent().parent().find("ul");    
    facet.toggle("clip", function(){   
	var facetHeader = jQuery(this).parent().find('h3 div span');
        facetHeader.toggleClass('octicon-triangle-down').toggleClass('octicon-triangle-up');
        var status = facetHeader.attr('class');
	var facetName = facetHeader.parent().parent().parent().attr('id');
	jQuery.cookie(facetName, status);

    });
  });
}




// replace action textes with icons
function actionIcons() {
 
  replaceWithIcon(jQuery('.form-type-item a[data-bundle="monograph"]'), 'octicon octicon-repo');
  replaceWithIcon(jQuery('.form-type-item a[data-bundle="journal"]'), 'octicon octicon-versions');
  replaceWithIcon(jQuery('.form-type-item a[data-bundle="volume"]'), 'octicon octicon-list-ordered');
  replaceWithIcon(jQuery('.form-type-item a[data-bundle="issue"]'), 'octicon octicon-book');
  replaceWithIcon(jQuery('.form-type-item a[data-bundle="article"]'), 'octicon octicon-file-text');
  replaceWithIcon(jQuery('.form-type-item a[data-bundle="file"]'), 'octicon octicon-file-binary');

  replaceWithIcon(jQuery('label a[href="#"]'), 'batch-icons batch-icon-plus');
  replaceWithIcon(jQuery('label[for="edit-field-edoweb-parent-und"] a[href="#"]'), 'batch-icons batch-icon-concat');
  replaceWithIcon(jQuery('label[for="edit-field-edoweb-identifier-ht-und-0-value"] a[href="#"]'), 'batch-icons batch-icon-concat');
  replaceWithIcon(jQuery('label[for="edit-field-edoweb-parallel-und"] a[href="#"]'), 'batch-icons batch-icon-concat');

  replaceWithIcon(jQuery('td').filter(function(){return /(^|\s)(Monograph)(\s|$)/.test(jQuery(this).text())}), 'mega-octicon octicon-repo');
  replaceWithIcon(jQuery('td').filter(function(){return /(^|\s)(Journal)(\s|$)/.test(jQuery(this).text())}), 'mega-octicon octicon-versions');
  replaceWithIcon(jQuery('td').filter(function(){return /(^|\s)(Volume)(\s|$)/.test(jQuery(this).text())}), 'mega-octicon octicon-list-ordered');
  replaceWithIcon(jQuery('td').filter(function(){return /(^|\s)(Issue)(\s|$)/.test(jQuery(this).text())}), 'mega-octicon octicon-book');
  replaceWithIcon(jQuery('td').filter(function(){return /(^|\s)(Article)(\s|$)/.test(jQuery(this).text())}), 'mega-octicon octicon-file-text');
  replaceWithIcon(jQuery('td').filter(function(){return /(^|\s)(File)(\s|$)/.test(jQuery(this).text())}), 'mega-octicon octicon-file-binary');

  replaceMatchWithIcon('.breadcrumb a', 'Monograph:', 'octicon octicon-repo');
  replaceMatchWithIcon('.breadcrumb a', 'Journal:', 'octicon octicon-versions');
  replaceMatchWithIcon('.breadcrumb a', 'Volume:', 'octicon octicon-list-ordered');
  replaceMatchWithIcon('.breadcrumb a', 'Issue:', 'octicon octicon-book');
  replaceMatchWithIcon('.breadcrumb a', 'Article:', 'octicon octicon-file-text');
  replaceMatchWithIcon('.breadcrumb a', 'File:', 'octicon octicon-file-binary');

  replaceMatchWithIcon('h1#page-title', 'Monograph:', 'mega-octicon octicon-repo');
  replaceMatchWithIcon('h1#page-title', 'Journal:', 'mega-octicon octicon-versions');
  replaceMatchWithIcon('h1#page-title', 'Volume:', 'mega-octicon octicon-list-ordered');
  replaceMatchWithIcon('h1#page-title', 'Issue:', 'mega-octicon octicon-book');
  replaceMatchWithIcon('h1#page-title', 'Article:', 'mega-octicon octicon-file-text');
  replaceMatchWithIcon('h1#page-title', 'File:', 'mega-octicon octicon-file-binary');
}

  
// replace action textes with icons
function replaceWithIcon(target, iconCss) {
  target
    .attr('title', target.html())
    .html('<span class="' + iconCss + '"></span>');
 
}

// replace action textes with icons
function replaceMatchWithIcon(filter, match, iconCss) {
  var target = jQuery(filter + ':contains("' + match + '")');
  target.each(function(){
    var elementText = target.html().replace(match, '<span style="margin-right: 10px;" class="' + iconCss + '"></span>');
    target.html(elementText);
  });
    
}

function zoomTable() {
  if(jQuery.cookie('table-font-size')){
  jQuery('table').css('font-size', jQuery.cookie('table-font-size') + 'px');
  }
  //jQuery.cookie('table-font-size', jQuery('table').css('font-size'));
  jQuery('.edoweb-entity-list ul.pager span.batch-icon-zoom-plus').click(function(){
   var size = jQuery('table').css('font-size');
   var newSize = parseFloat(size) + 1;
   jQuery('table').css('font-size', newSize);
   jQuery.cookie("table-font-size", newSize);
  });
   jQuery('.edoweb-entity-list ul.pager span.batch-icon-zoom-minus').click(function(){
   var size = jQuery('table').css('font-size');
   var newSize = parseFloat(size) - 1;
   jQuery('table').css('font-size', newSize);
   jQuery.cookie("table-font-size", newSize);
     
  });
}

// datepicker
function addDatePicker(){
  
  jQuery('#edit-field-edoweb-issued-und-0-value').datepicker( 
	{
	changeMonth:true,
	changeYear:true,
	dateFormat:"dd.mm.yy" 
	} );
}

jQuery(document).ready(function() {
  appendToggle();
  appendSorting();
  appendZoom();  
  expandFacet();
  actionIcons();
  appendSortable();
  zoomTable();
  //addDatePicker();
});
 
