
//show date in toBook Block
var today = new Date();
var tomorrow;
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
showDate()
function showDate() {
  today = dd + '|' + mm + '|' + yyyy;
  tomorrow = +dd + 1 + '|' + mm + '|' + yyyy;
  if (localStorage.getItem('checkIn') != null) {
    document.querySelector('#depart').value = localStorage.getItem('checkIn');
    document.querySelector('.checkIn p span').innerHTML = localStorage.getItem('checkIn');
  } else {
    document.querySelector('.checkIn p span').innerHTML = today;
    document.querySelector('#depart').value = today;
  }
  if (localStorage.getItem('checkOut') != null) {
    document.querySelector('#return').value = localStorage.getItem('checkOut');
    document.querySelector('.checkOut p span').innerHTML = localStorage.getItem('checkOut');
  } else {
    document.querySelector('.checkOut p span').innerHTML = tomorrow;
    document.querySelector('#return').value = tomorrow;
  }
}

$(document).ready(function () {
  var minDate = new Date();
  $("#depart").datepicker({
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель',
      'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',
      'Октябрь', 'Ноябрь', 'Декабрь'],
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    firstDay: 1,
    showAnim: 'drop',
    numberOfMonth: 1,
    minDate: minDate,
    dateFormat: 'dd|mm|yy',
    onClose: function (selectedDate) {
      $('#return').datepicker('option', 'minDate', selectedDate);
      //  document.querySelector('.checkIn p span').innerHTML = document.querySelector('#depart').value;
      localStorage.setItem('checkIn', document.querySelector('#depart').value);
      showDate();
    }
  });

  $("#return").datepicker({
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель',
      'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',
      'Октябрь', 'Ноябрь', 'Декабрь'],
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    firstDay: 1,
    showAnim: 'drop',
    numberOfMonth: 1,
    minDate: minDate,
    dateFormat: 'dd|mm|yy',
    onClose: function (selectedDate) {
      $('#depart').datepicker('option', selectedDate);
      // document.querySelector('.checkOut p span').innerHTML = document.querySelector('#return').value;
      localStorage.setItem('checkOut', document.querySelector('#return').value);
      showDate();
    }
  });
});


var adultCount = localStorage.getItem('adultCount') || 2;
var childCount = localStorage.getItem('childCount') || 0;
showPeopleCount()
function showPeopleCount() {
  document.querySelector('.adultCount').value = adultCount;
  document.querySelector('.childCount').value = childCount;
}

document.querySelector('.toBook').addEventListener('click', function (e) {
  if (e.target.classList.contains('minusAdult')) {
    if (adultCount >= 1) {
      adultCount--;
    }
  }
  else if (e.target.classList.contains('minusChild')) {
    if (childCount >= 1) {
      childCount--;
    }
  }
  else if (e.target.classList.contains('plusAdult')) {
    adultCount++;
  }
  else if (e.target.classList.contains('plusChild')) {
    childCount++;
  }
  localStorage.setItem('adultCount', adultCount);
  localStorage.setItem('childCount', childCount);
  showPeopleCount()
});



