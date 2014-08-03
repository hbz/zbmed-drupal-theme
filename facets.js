
// append the div for toggle functionality to each facet
function appendToggle() {
  jQuery('.item-list h3').append('<div class="toggleButton"><span class="octicon octicon-triangle-up"></span>&nbsp;</div>');  
  jQuery('.item-list ul li a').each(function() {
    var ref = jQuery(this).attr('href');
    //jQuery(this).replaceWith('<a onclick="' + ref + '">Test</a>');
    jQuery(this).attr('href', ref + '&toggled=');
  });
}

// toggle functionality
function expandFacet() {
  jQuery('.item-list h3 div span').click(function(){
         jQuery(this).parent().parent().parent().find("ul").toggle("clip", function(){
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
    .attr('title', jQuery(this).html())
    .html('<span class="' + iconCss + '"></span>');
 
}


jQuery(document).ready(function() {
  appendToggle();  
  expandFacet();
  actionIcons();
});
 
