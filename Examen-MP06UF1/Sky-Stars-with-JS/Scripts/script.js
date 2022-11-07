function updateValue(){
  console.log("update")
  var size = document.getElementsByName("slider");
  let star_number_value = document.getElementsByName("star_number_value");
  let radio_value = document.getElementsByName("radio_value");
  let min_distance_value = document.getElementsByName("min_distance_value");

  star_number_value[0].innerHTML = size[0].value;
  radio_value[0].innerHTML = size[1].value;
  min_distance_value[0].innerHTML = size[2].value;

  window.localStorage.setItem("star_number_value", size[0].value);
  window.localStorage.setItem("radio_value", size[1].value);
  window.localStorage.setItem("min_distance_value", size[2].value);


}

function updateLocalStorage(){
  var size = document.getElementsByName("slider");
  let star_number_value = document.getElementsByName("star_number_value");
  let radio_value = document.getElementsByName("radio_value");
  let min_distance_value = document.getElementsByName("min_distance_value");

  if(window.localStorage.getItem("star_number_value") != null){
    star_number_value[0].innerHTML = window.localStorage.getItem("star_number_value");
    size[0].value = window.localStorage.getItem("star_number_value");
  }

  if(window.localStorage.getItem("radio_value") != null){
    radio_value[0].innerHTML = localStorage.getItem("radio_value");
    size[1].value = window.localStorage.getItem("radio_value");
  }

  if(window.localStorage.getItem("min_distance_value") != null){
    min_distance_value[0].innerHTML = localStorage.getItem("min_distance_value");
    size[2].value = window.localStorage.getItem("min_distance_value");
  }
}

window.onload = function start() {
  updateLocalStorage();
  var size = document.getElementsByName("slider");
  size[0].addEventListener("input", updateValue);
  size[1].addEventListener("input", updateValue);
  size[2].addEventListener("input", updateValue);


  /* ----- Botó generar estrelles ----- */
  var button = document.getElementsByName("submit");
  button[0].addEventListener("click", function(){
    window.location = 'stars_page.html';
  });
}

