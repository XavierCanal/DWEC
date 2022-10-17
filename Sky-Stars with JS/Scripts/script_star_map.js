import {Star} from './star.js';
import {Stars} from './all_stars.js';
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
    var stars = [];
    var star;
    fitToContainer(canvas);
    const starsNumber = window.localStorage.getItem("star_number_value");
    var allStars = new Stars();
    for(let i = 0; i < starsNumber; i++) {
      stars[i] = new Star(canvas,ctx,allStars);
      star = stars[i];

      if(isOverlapping(stars,star))  {
        ctx.beginPath();
        ctx.arc(star.xPos, star.yPos, star.radi,Math.PI*2,0,false);
        ctx.fill();
        ctx.fillStyle = '#ffffff';
      }
    }
  }

  function isOverlapping(arrayStars,star) {
    console.log("isoverlaping")
    var bool = true;
    while (bool) {
      var hit = 0;
      for (var i = 0; i < arrayStars.length; i++) {
        var circle = arrayStars[i];
        var dx = star.xPos - circle.xPos;
        var dy = star.yPos - circle.yPos;
        var rr = star.radi + circle.radi;
        if (Math.abs(dx) > rr + rr && Math.abs(dy) > rr + rr) {
          hit++;
        }
      }
      /*for (var i=0; i<arrayStars.length; i++) {
        var circle = arrayStars[i];
        console.log(Math.round(circle.radi + star.radi));
        console.log(Math.round(star.xPos - circle.xPos));
        console.log(Math.round(star.yPos - circle.yPos));

        var combinedRadius = Math.round(circle.radi + star.radi);
        var distancex = Math.round(star.xPos - circle.xPos);
        var distancey = Math.round(star.yPos - circle.yPos);
        if (distancex <= combinedRadius && distancey <= combinedRadius) {
            hit++;
        }
    } */
      if (hit != 0) {
        console.log("hit diferent 0")
        break;
      }
      console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!hit diferent 0")
      star._xPos = Math.round(Math.random() * 1200);
      star.yPos = Math.round(Math.random() * 400);
    }
    return true;

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
  