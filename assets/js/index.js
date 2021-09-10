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


const slider = document.querySelector('.slider');


loadHeader();

function loadHeader() {
  let out = '';

  for (key in rooms) {
    if (key <= 4) {
      out += '<article class=slider__item>';
      out += '<img src="./content/images/' + rooms[key].image + '" alt="bgimg" class="bgImg">';
      out += '<div class="textBlock">';
      out += '<h2>' + rooms[key].name + '</h2>';
      out += '<p>' + rooms[key].description + '</p>';
      out += '<a href="./rooms.html" class="slider_link" data-id="' + key +'">Подробнее</a>';
      out += '</div></article>';
    }
  }
  document.querySelector('.slider').innerHTML = out;
}

loadRooms();

function loadRooms() {
  let out = '';

  for (key in rooms) {
    out += '<div class="room">';
    out += '<img src="./content/images/' + rooms[key].image + '" alt="roomImg">';
    out += '<div class="roomText">';
    out += '<h4>' + rooms[key].name + '</h4>';
    out += '<p>' + rooms[key].description + '</p>';
    out += '<a href="./booking.html" data-id="' + key + '" class="room_link">Бронировать</a>';
    out += '</div></div>';
  }
  document.querySelector('.rooms').innerHTML = out;
}


let slider_img = document.querySelectorAll('.slider__item img');
let room_img = document.querySelectorAll('.room img');


document.querySelector('.slider').addEventListener('mousemove', function(e){
  if (e.target.classList.contains('slider_link')) {
    let id = e.target.getAttribute('data-id') - 1;
    slider_img[id].style.opacity = 0.6;
  } else {
    slider_img.forEach(element => {
        element.style.opacity = 1;
    });
  }
})


document.querySelector('.rooms').addEventListener('mousemove', function(e){
  if (e.target.classList.contains('room_link')) {
    let id = e.target.getAttribute('data-id') - 1;
    room_img[id].style.opacity = 0.5;
  } else {
    room_img.forEach(element => {
        element.style.opacity = 1;
    });
  }
})




let linkToBook = document.querySelectorAll('.room_link');

for (var i = 0; i < linkToBook.length; i++) {
  linkToBook[i].onclick = function (e) {
    var ID = e.target.getAttribute('data-id');
    localStorage.setItem('roomID', ID);
  }
}