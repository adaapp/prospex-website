
var navToggleButton = document.querySelector('.nav-toggle');
var navBox = document.querySelector('.nav-box');

navToggleButton.addEventListener('click', toggleClass);

function toggleClass(){
    navBox.classList.toggle('open')
}