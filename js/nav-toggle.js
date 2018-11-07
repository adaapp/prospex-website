
var navToggleButton = document.querySelector('.nav-toggle');
var navBox = document.querySelector('.nav-box');

var missionStatementSection = document.getElementById('mission-statement')
var mainWrapper = document.getElementsByClassName('container-fluid')
navToggleButton.addEventListener('click', toggleClass);

function toggleClass(){
    navBox.classList.toggle('open')
}