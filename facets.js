
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
 
  jQuery('.form-type-item a[data-bundle="monograph"]')
    .attr('title', jQuery('.form-type-item a[data-bundle="monograph"]').html())
    .html('<span class="octicon octicon-repo"></span>');

  jQuery('.form-type-item a[data-bundle="journal"]')
    .attr('title', jQuery('.form-type-item a[data-bundle="journal"]').html())
    .html('<span class="octicon octicon-versions"></span>');
    
  jQuery('.form-type-item a[data-bundle="volume"]')
    .attr('title', jQuery('.form-type-item a[data-bundle="volume"]').html())
    .html('<span class="octicon octicon-list-ordered"></span>');
    
  jQuery('.form-type-item a[data-bundle="issue"]')
    .attr('title', jQuery('.form-type-item a[data-bundle="issue"]').html())
    .html('<span class="octicon octicon-book"></span>');


  jQuery('.form-type-item a[data-bundle="article"]')
    .attr('title', jQuery('.form-type-item a[data-bundle="article"]').html())
    .html('<span class="octicon octicon-file-text"></span>');


  jQuery('.form-type-item a[data-bundle="file"]')
    .attr('title', jQuery('.form-type-item a[data-bundle="file"]').html())
    .html('<span class="octicon octicon-file-binary"></span>');


  jQuery('label a[href="#"]').replaceWith('<a href="#">&nbsp;<span class="octicon octicon-diff-added"></span></a>');

}




jQuery(document).ready(function() {
  appendToggle();  
  expandFacet();
  actionIcons();
});
 
