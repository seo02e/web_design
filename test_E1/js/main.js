let mainMenu = $('.main-menu>li');
let submenu = mainMenu.find('.sub-menu');

mainMenu.mouseover(function(){
  submenu.stop().fadeIn();
}).mouseout(function(){
  submenu.stop().fadeOut();
});