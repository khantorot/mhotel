$(function () {
    $('.slider').slick({
      arrows: false,
      infinite: true,
      adaptiveHeight: true,
      autoplay: true,
      dots: true,
      autoplaySpeed: 8000,
      fade: true,
      cssEase: 'linear',
      pauseOnHover: false,
      pauseOnFocus: false
    });
  });



let slider_img = document.querySelectorAll('.slider__item img');
let slider_link = document.querySelectorAll('.slider__item .textBlock a');


slider_link.forEach(element => {
  element.addEventListener('mouseover', function(){
    slider_img.forEach(element => {
        element.style.opacity = 0.3;
    });
  });
  element.addEventListener('mouseleave', function(){
    slider_img.forEach(element => {
        element.style.opacity = 0.7;
    });
  })
});


var linkToBook = document.querySelectorAll('.rooms a');

for(var i=0; i<linkToBook.length; i++){
  linkToBook[i].onclick = function(e) {
    var ID = e.target.getAttribute('data-id');
    localStorage.setItem('roomID', ID);
  }
}