/*
let mainMenu = $('.main-menu>li');
let submenu = $('.sub-menu');

mainMenu.mouseover(function(){
  submenu.stop().fadeIn();
}).mouseout(function(){
  submenu.stop().fadeOut();
});
*/

let mainMenu2 = $('.main-menu > li');

mainMenu2.mouseover(function(){
  $(this).find('ul').stop().slideDown();
}).mouseout(function(){ 
  $(this).find('ul').stop().slideUp();
});