showRooms();

function showRooms() {
  var out = '';
  for (var key in rooms) {
    out += '<div class="room">';
    out += '<a href="./outdoor.html" class="img_box"><img src="./content/images/' + rooms[key].image + '" alt="RoomImg"></a>';
    out += '<div class="info_box"><h4>' + rooms[key].name + '</h4>';
    out += '<p>' + rooms[key].description + '</p>';
    out += '<ul>';
    for (var i = 0; i < rooms[key].list.length; i++) {
      out += '<li>' + rooms[key].list[i] + '</li>';
    }
    out += '</ul>';
    out += '<a href="booking.html" data-id="' + key + '">Бронировать</a>';
    out += '<span>' + rooms[key].price + '$</span>';
    out += '</div>';
    out += '</div>';
    document.querySelector('.rooms').innerHTML = out;
  }
}


var linkToBook = document.querySelectorAll('.info_box a');

for (var i = 0; i < linkToBook.length; i++) {
  linkToBook[i].onclick = function (e) {
    var ID = e.target.getAttribute('data-id');
    localStorage.setItem('roomID', ID);
  }
}