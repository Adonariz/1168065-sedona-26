var form = document.querySelector('.hotel-form');
var arrivalDate = form.querySelector('[name=arrival-date]');
var departureDate = form.querySelector('[name=departure-date]');

form.addEventListener('submit', function (evt) {
  if (!arrivalDate.value || departureDate.value) {
    evt.preventDefault();
    console.log('Нужно ввести даты приезда и отъезда');
  }
});