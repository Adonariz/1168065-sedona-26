var searchFormToggle = document.querySelector('.htl-search-btn');
var searchFormHide = document.querySelector('.hotel-form');

searchFormToggle.addEventListener('click', function (evt) {
  evt.preventDefault();
  searchFormHide.classList.toggle('hidden');
  searchFormHide.classList.toggle('show');
  console.log('Меняем отображение формы');
});