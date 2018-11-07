var navToggle = document.querySelector('.navigation-box-toggle');
var navigationBox = document.querySelector('.navigation-box');

navToggle.addEventListener('click', toggleClass);

function toggleClass(){
  navigationBox.classList.toggle('closed')
}
