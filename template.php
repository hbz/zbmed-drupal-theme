<?php

  function edoweb_preprocess_html(&$variables) {

  /** 
  * make google fonts available for themes
  * uncomment the font you wish to use
  *
  */
  
  // Droid font family: a complete family with serif and sans
  drupal_add_css('http://fonts.googleapis.com/css?family=Droid+Serif|Droid+Sans:400,700&subset=latin,latin-ext', array('type' => 'external'));
  // Signika font: only serif 
  drupal_add_css('http://fonts.googleapis.com/css?family=Signika:400,600,700,300&subset=latin,latin-ext', array('type' => 'external'));
  // PT font family: a complete family with serif and sans
  //drupal_add_css('http://fonts.googleapis.com/css?family=PT+Serif|PT+Sans|PT+Sans+Narrow|PT+Sans+Caption&subset=latin,latin-ext', array('type' => 'external'));


  }
?> 
