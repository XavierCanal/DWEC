import {Star} from './star.js';
function updateValue(){
    var size = document.getElementsByName("slider");
    let star_number_value = document.getElementsByName("star_number_value");
  
    star_number_value[0].innerHTML = size[0].value;
    window.localStorage.setItem("star_number_value", size[0].value);

    printMap()
  
  }

function updateLocalStorage(){
    var size = document.getElementsByName("slider");
    let star_number_value = document.getElementsByName("star_number_value");
  
    if(window.localStorage.getItem("star_number_value") != null){
      star_number_value[0].innerHTML = window.localStorage.getItem("star_number_value");
      size[0].value = window.localStorage.getItem("star_number_value");
    }
  }

  
function fitToContainer(canvas){
    // Make it visually fill the positioned parent
    canvas.style.width ='100%';
    canvas.style.height='100%';
    // ...then set the internal size to match
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  function printMap() {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    fitToContainer(canvas);
    const starsNumber = window.localStorage.getItem("star_number_value");
  
    for(let i = 0; i < starsNumber; i++) {
      var star = new Star(canvas,ctx);
    }
  }

  function random(min, max) {
    return min + Math.random() * (max + 1 - min);
  }

window.onload = function start() {
    
    updateLocalStorage();
    printMap();
    var size = document.getElementsByName("slider");
    size[0].addEventListener("input", updateValue);

    printMap();
    

  }
  