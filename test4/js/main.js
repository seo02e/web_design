let mainMenu = $('.main-menu > li');
mainMenu.mouseover(function(){
  $(this).find('ul').stop().slideDown();
}).mouseout(function(){
  $(this).find('ul').stop().slideUp();
});

let slideContainer = $('.container');
let slide = slideContainer.find('.slide');
let slideCount = slide.length;
let currentIdx = 0;

function autoSLide(){
  setInterval(function(){
    let mextIdx = (currentIdx + 1) % slideCount;
    slideContainer.animate({
      left: -100 * nextIdx + '%'
    });
    currentIdx = nextIdx;
  }, 3000)
}
autoSLide();

let popupLink = $('#notice li:first');
let popup = $('#popup');
let popupCloseBtn = popup.find('.close');
popupLink.click(function(e){
  e.preventDefault('active');
  popup.addClass('active');
});
popupCloseBtn.click(function(){
  popup.removeClass('active');
});