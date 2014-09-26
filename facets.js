
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
      var sortFacets = jQuery('.item-list h3').parent();
      var facetsParent = jQuery('.item-list h3').parent().parent();
      var cookieSplit = jQuery.cookie('sortFacets').split(' ');
      var i;
      for(i=0; i < cookieSplit.length; i++){
	var part = sortFacets.filter('#' + cookieSplit[i].trim());
	facetsParent.append(part);
      };
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

  replaceWithIcon(jQuery('.edoweb-tree a[data-target-bundle="monograph"]'), 'octicon octicon-repo');
  replaceWithIcon(jQuery('.edoweb-tree a[data-target-bundle="journal"]'), 'octicon octicon-versions');
  replaceWithIcon(jQuery('.edoweb-tree a[data-target-bundle="volume"]'), 'octicon octicon-list-ordered');
  replaceWithIcon(jQuery('.edoweb-tree a[data-target-bundle="issue"]'), 'octicon octicon-book');
  replaceWithIcon(jQuery('.edoweb-tree a[data-target-bundle="article"]'), 'octicon octicon-file-text');
  replaceWithIcon(jQuery('.edoweb-tree a[data-target-bundle="file"]'), 'octicon octicon-file-binary');

  jQuery('.edoweb-tree a[data-bundle="monograph"]').before(jQuery('<span>&nbsp;</span>').addClass('octicon octicon-repo'));
  jQuery('.edoweb-tree a[data-bundle="journal"]').before(jQuery('<span>&nbsp;</span>').addClass('octicon octicon-versions'));
  jQuery('.edoweb-tree a[data-bundle="volume"]').before(jQuery('<span>&nbsp;</span>').addClass('octicon octicon-list-ordered'));
  jQuery('.edoweb-tree a[data-bundle="issue"]').before(jQuery('<span>&nbsp;</span>').addClass('octicon octicon-book'));
  jQuery('.edoweb-tree a[data-bundle="article"]').before(jQuery('<span>&nbsp;</span>').addClass('octicon octicon-file-text'));
  jQuery('.edoweb-tree a[data-bundle="file"]').before(jQuery('<span>&nbsp;</span>').addClass('octicon octicon-file-binary'));

  replaceWithIcon(jQuery('label a[href="#"]'), 'batch-icons batch-icon-plus');
  replaceWithIcon(jQuery('label[for="edit-field-edoweb-parent-und"] a[href="#"]'), 'batch-icons batch-icon-concat');
  replaceWithIcon(jQuery('label[for="edit-field-edoweb-identifier-ht-und-0-value"] a[href="#"]'), 'batch-icons batch-icon-concat');
  replaceWithIcon(jQuery('label[for="edit-field-edoweb-parallel-und"] a[href="#"]'), 'batch-icons batch-icon-concat');

  jQuery('.entity-label-monograph').before(jQuery('<span>&nbsp;</span>').addClass('octicon octicon-repo'));
  jQuery('.entity-label-journal').before(jQuery('<span>&nbsp;</span>').addClass('octicon octicon-versions'));
  jQuery('.entity-label-volume').before(jQuery('<span>&nbsp;</span>').addClass('octicon octicon-list-ordered'));
  jQuery('.entity-label-issue').before(jQuery('<span>&nbsp;</span>').addClass('octicon octicon-book'));
  jQuery('.entity-label-article').before(jQuery('<span>&nbsp;</span>').addClass('octicon octicon-file-text'));
  jQuery('.entity-label-file').before(jQuery('<span>&nbsp;</span>').addClass('octicon octicon-file-binary'));

  jQuery('body.entity-type-monograph h1.title').addClass('mega-octicon octicon-repo');
  jQuery('body.entity-type-journal h1.title').addClass('mega-octicon octicon-versions');
  jQuery('body.entity-type-volume h1.title').addClass('mega-octicon octicon-list-ordered');
  jQuery('body.entity-type-issue h1.title').addClass('mega-octicon octicon-book');
  jQuery('body.entity-type-article h1.title').addClass('mega-octicon octicon-file-text');
  jQuery('body.entity-type-file h1.title').addClass('mega-octicon octicon-file-binary');

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
 
