
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

function appendZoom(){
  jQuery('.edoweb-entity-list ul.pager').append('<div class="toggleButton"><span class="batch-icons batch-icon-zoom-plus"></span><span class="batch-icons batch-icon-zoom-minus"></div>');
}

function appendSortable() {
 jQuery('.edoweb-facets .fieldset-wrapper').sortable();
  
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
 
