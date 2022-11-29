
import data from './articles.json' assert { type: 'json' };
import Factura from './moduls/factura.mjs';

/**
* generateDropBox, a partir d'un array $options i el select (dropbox), ens emplena el select.
* 
* @param {Array} options - Array amb les opcions a emplenar
* @param {object} select - Select a emplenar amb l'array
*/

function generateDropBox(opt, select) {
  window.localStorage.setItem("articles", JSON.stringify(opt));

  var options = Object.keys(opt);
  for (var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.text = opt;
    el.value = opt;
    select.add(el);
  }
}

/**
* createRow, a partir d'un array $options i el select (dropbox), ens emplena el select.
* 
* @param {table} table - Element html <table>
* @param {Array} arrayData - Array amb les dades de l'article seleccionat
@param {String} nameArticle - Nom de l'article seleccionat
*/
function createRow(table, arrayData, nameArticle){
  var row = table.insertRow();
  let count= 0;
  if (document.getElementById(nameArticle) == null) {
    arrayData.forEach(field => {
      count++;
      var cell = row.insertCell();
      cell.innerHTML = field;

      if(count == 4){
        cell.setAttribute("name", "preu", 0);
        cell.setAttribute("id", nameArticle+ " preu", 0);
      }
      if(count == 5){
        cell.setAttribute("name", "descompte", 0);
        cell.setAttribute("id", nameArticle+ " descompte", 0);
      }

      if (count == 6) {
        cell.setAttribute("name", "total", 0);
        cell.setAttribute("id", nameArticle+ " total", 0);
      }
    });
    row.setAttribute("id", nameArticle+ " row", 0);

    var quantitat = document.getElementById(nameArticle);
    quantitat.addEventListener("change", refreshTotal);
    quantitat.myParam = nameArticle;

    var descompte = document.getElementById("descompte_"+nameArticle);
    descompte.addEventListener("change", applyDiscount);
    descompte.myParam = nameArticle;

    var substract = document.getElementById("substract_"+nameArticle);
    substract.addEventListener("click", changeTotal);
    substract.myParam = ["substract", nameArticle];;

    var add = document.getElementById("add_"+nameArticle);
    add.addEventListener("click", changeTotal);
    add.myParam = ["add", nameArticle];
  } else {
    document.getElementById(nameArticle).value++
  }
  
}

function applyDiscount(evt) {
  let param = evt.currentTarget.myParam;

  var discount = document.getElementById("descompte_"+evt.currentTarget.myParam);
  var total = document.getElementById(evt.currentTarget.myParam+ " total");

  total.innerText =  total.innerText - ((parseInt(total.innerHTML) / 100) * discount.value);
}

function changeTotal(evt){
  let param = evt.currentTarget.myParam[0];
  let name = evt.currentTarget.myParam[1];

  var preu = document.getElementById(name+ " preu")
  var quantitat = document.getElementById(name)
  var total = document.getElementById(name+ " total")

  if (param == "add") {
    quantitat.value++;
  } else {
    quantitat.value--;
  }
  
  total.innerText = preu.innerHTML * quantitat.value;

}

/**
* generateDropBox, a partir d'un array $options i el select (dropbox), ens emplena el select.
* 
* 
* @param {object} select - Select a emplenar amb l'array
*/

function addArticle() {
  var tableArticles = document.getElementsByName("myTable")[0];
  let articles = document.getElementsByName("articles")
  const artValue = articles[0].value;

  if (window.localStorage.getItem("articles") != null){
    //console.log(window.localStorage.getItem("articles"));
    //var data = Object.values(Object.values(window.localStorage.getItem("articles"))[0]);
    var data = Object.values(JSON.parse(window.localStorage.getItem("articles"))[artValue]);
    //console.log("data:"+data);

    createRow(tableArticles, data, artValue);
  } else {
    console.log("Articles is empty")
  }
  
}

function refreshTotal(event){
  console.log(event.currentTarget.myParam);
  console.log("test");
  var preu = document.getElementById(event.currentTarget.myParam+ " preu")
  var quantitat = document.getElementById(event.currentTarget.myParam)
  var total = document.getElementById(event.currentTarget.myParam+ " total")

  total.innerText = preu.innerHTML * quantitat.value;
  

}


window.onload = function start() {
  /* ----- Update year ----- */
  var year = document.getElementsByName("Data")[0];
  year.innerText = new Date().getFullYear();

  var nFactura = document.getElementsByName("nFactura")[0];
  nFactura.innerText = "01";
  window.localStorage.setItem("nFactura", nFactura.innerText)

  var factures = [];
  window.localStorage.setItem("factures", JSON.stringify(factures))

  var select = document.getElementsByName("articles")[0];
  generateDropBox(data, select); // data is .json file imported

  /* ----- Afegir article ----- */
  var button = document.getElementsByName("afegir");
  button[0].addEventListener("click", addArticle);

  
}