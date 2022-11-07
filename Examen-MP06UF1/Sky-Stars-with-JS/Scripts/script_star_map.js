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

    checkLocalItemAndUpdate(size[0],star_number_value, "star_number_value");
  }

  function checkLocalItemAndUpdate (size,star_number_value, itemName){
    if(window.localStorage.getItem(itemName) != null){
      star_number_value[0].innerHTML = window.localStorage.getItem(itemName);
      size.value = window.localStorage.getItem(itemName);
    }
  }

  
function fitToContainer(canvas){
    canvas.style.width ='100%';
    canvas.style.height='100%';
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  function generateMap(){
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    var maxRadi = window.localStorage.getItem("radio_value");
    console.log("maxradi");
    console.log(maxRadi);
    var stars = [];
    var star;
    fitToContainer(canvas);
    
    for(let i = 0; i < 1000; i++) {
      star = new Star(canvas,ctx,maxRadi/2);

      if(isOverlapping(stars,star,canvas))  {
        stars[i] = star;
      }
    }

    window.localStorage.setItem("array_stars", JSON.stringify(stars));
  }

  function printMap() {
    const canvas = document.querySelector('canvas');
    
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const starsNumber = window.localStorage.getItem("star_number_value");
    var stars = JSON.parse(window.localStorage.getItem("array_stars"));

    for (let i = 0;i < starsNumber; i++){
      ctx.beginPath();
      ctx.arc(stars[i].xPos, stars[i].yPos, stars[i].radi,Math.PI*2,0,false);
      ctx.fill();
      ctx.fillStyle = stars[i].opacity;
    }
  }

  function moveStars(evt) {
    console.log(evt.currentTarget.myParam);
    const direction = evt.currentTarget.myParam;

    const canvas = document.querySelector('canvas');
    
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const starsNumber = window.localStorage.getItem("star_number_value");
    var stars = JSON.parse(window.localStorage.getItem("array_stars"));


    if (document.getElementsByName('px')[0].value != ""){
      for (let i = 0;i < starsNumber; i++){
        if (direction == "right"){
          stars[i].xPos =stars[i].xPos + parseInt(document.getElementsByName('px')[0].value);
        } else {
          stars[i].xPos =stars[i].xPos - parseInt(document.getElementsByName('px')[0].value);
        }
    }
    
    } else {
      alert("Camp de pixels a moure buit");
    }
    window.localStorage.setItem("array_stars", JSON.stringify(stars));

    for (let i = 0;i < starsNumber; i++){
      ctx.beginPath();
      ctx.arc(stars[i].xPos, stars[i].yPos, stars[i].radi,Math.PI*2,0,false);
      ctx.fill();
      ctx.fillStyle = stars[i].opacity;
    }
  }

  function isOverlapping(arrayStars,star,canvas) {
    var bool = true;
    const end = Date.now() + 5000;
    do {
      
      var hit = 0;
      for (var i = 0; i < arrayStars.length; i++) {
        var circle = arrayStars[i];
        var dx = star.xPos - circle.xPos;
        var dy = star.yPos - circle.yPos;
        var rr = star.radi + circle.radi;
        if (Math.sqrt((dx*dx) + (dy*dy)) - rr < 6)
         {
          hit++;
        }
      }

      if (hit == 0) {
        bool = false;
      } else {
        console.log("else")
        star.xPos = Math.round(random(2, canvas.width - 2));
        star.yPos = Math.round(random(2, canvas.height - 2));
      }

      
    } while (bool || Date.now() > end)
    return true;

  }

  function random(min, max) {
    return min + Math.random() * (max + 1 - min);
  }

window.onload = function start() {
    generateMap();
    updateLocalStorage();
    printMap();

    var size = document.getElementsByName("slider");
    size[0].addEventListener("input", updateValue);

    var left = document.getElementsByName("left")[0];
    left.addEventListener("click", moveStars);
    left.myParam = "left";

    var right = document.getElementsByName("right")[0];
    right.addEventListener("click", moveStars);
    right.myParam = "right";
    

  }
  