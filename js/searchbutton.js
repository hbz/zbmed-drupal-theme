(function($) {


    Drupal.behaviors.edoweb_drupal_theme_searchbutton = {
    attach: function (context, settings) {

      $('#edit-query-0-term', context).attr('placeholder', 'Repository-Suche');
      replaceWithButton($('#edit-query-0-submit'), 'large-batch-icons batch-icon-search', context);

      function replaceWithButton(target, iconCss) {
        target.after('<button type="submit" id="edit-query-0-submit" style="margin-top: 0.3em;"><span class="' + iconCss + '"></span></button>');
        target.remove();
      }
            
    }
  };
  
  
})(jQuery);
