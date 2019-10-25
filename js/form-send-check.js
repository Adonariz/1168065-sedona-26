var form = document.querySelector('.hotel-form');
var arrivalDate = form.querySelector('[name=arrival-date]');
var departureDate = form.querySelector('[name=departure-date]');
var adultsAmount = form.querySelector('[name=adult-count]');
var childrenAmount = form.querySelector('[name=child-count]');

form.addEventListener('submit', function (evt) {
  if (!arrivalDate.value || !departureDate.value) {
    evt.preventDefault();
    console.log('Нужно ввести даты приезда и отъезда');
  } else {
    if (adultsAmount.value == 0 && childrenAmount.value == 0) {
      evt.preventDefault();
      console.log('Нужно ввести количество людей');
    }
  }
});