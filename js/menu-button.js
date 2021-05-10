$(function(){
  $('.hamburger-button').click(function(){
      $('nav').css("display","none");
      $('.nav-responsive').css("display","block");
      $('body').css("overflow", "hidden");
  });
  $('.hamburger-close-button').click(function(){
      $('nav').css("display","block");
      $('.nav-responsive').css("display","none");
      $('body').css("overflow", "scroll");
  });
  $('.menu-detail-responsive>li>a').click(function(){
    $('nav').css("display","block");
    $('.nav-responsive').css("display","none");
    $('body').css("overflow", "scroll");
  });
});