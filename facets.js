
// append the div for toggle functionality to each facet
function appendToggle() {
  jQuery.cookie("creator", "up");
  jQuery('.item-list h3').append('<div class="toggleButton"><span class="octicon octicon-triangle-up"></span>&nbsp;</div>');  
  jQuery('.item-list ul li a').each(function() {
    jQuery(this).addClass('facet-expanded');
    var ref = jQuery(this).attr('href');
    //jQuery(this).replaceWith('<a onclick="' + ref + '">Test</a>');
    jQuery(this).attr('href', ref + '&toggled=');
  });
  
  jQuery('.edoweb-entity-list ul.pager').append('<div class="toggleButton"><span class="batch-icons batch-icon-zoom-plus"></span><span class="batch-icons batch-icon-zoom-minus"></div>');

}

function appendSortable() {
 jQuery('.edoweb-facets .fieldset-wrapper').sortable();
  
}

// toggle functionality
function expandFacet() {
  jQuery('.item-list h3 div span').click(function(){
    var facet = jQuery(this).parent().parent().parent().find("ul");    
    //facet.toggleClass('facet-expanded').toggleClass('facet-closed');
    facet.toggle("clip", function(){   
	   jQuery(this).parent().find('span').toggleClass('octicon-triangle-down').toggleClass('octicon-triangle-up');
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

  
/*  jQuery('label a[href="#"]')
    .attr('title', jQuery('label a[href="#"]').html())
    .html('<span class="batch-icons batch-icon-plus"></span>');
*/
}

// replace action textes with icons
function replaceWithIcon(target, iconCss) {
  target
    .attr('title', target.html())
    .html('<span class="' + iconCss + '"></span>');
 
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

jQuery(document).ready(function() {
  appendToggle();  
  expandFacet();
  actionIcons();
  appendSortable();
  zoomTable();
  //alert(jQuery.cookie('creator'));
});
 
