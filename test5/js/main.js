let mainMenu = $('.main-menu >li');
let submenu = $('.sub-menu');

mainMenu.mouseover(function(){
  submenu.stop().fadeIn();
}).mouseout(function(){
  submenu.stop().fadeOut();
});

let slideContainer =$('.slide-wrapper');
let slide = slideContainer.find('.slide');
let slideCount = slide.length;
let currentIdx =0;

slide.eq(currentIdx).fadeIn();
setInterval(showNextSlide, 3000);

function showNextSlide(){
  let nextIdx = (currentIdx + 1)% slideCount;
  slide.eq(currentIdx).fadeOut();
  slide.eq(nextIdx).fadeIn();
  currentIdx = nextIdx;
}

let popupLink = $('#notice li:first');
let popup = $('#popup');
let popupCloseBtn = popup.find('.close');

popupLink.click(function(e){
  e.preventDefault();
  popup.addClass('active');
});

popupCloseBtn.click(function(){
  popup.removeClass('active');
})
