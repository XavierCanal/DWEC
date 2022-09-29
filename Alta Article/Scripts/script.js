const mapaCodificacio = new Map([
    [0, "A"],
    [1, "X"],
    [2, "M"],
    [3, "T"],
    [4, "B"],
    [5, "C"],
    [6, "S"],
    [7, "O"],
    [8, "P"],
    [9, "Z"],
  ]);

/**
* generateDropBox, a partir d'un array $options i el select (dropbox), ens emplena el select.
* 
* @param {Array} options - Array amb les opcions a emplenar
* @param {object} select - Select a emplenar amb l'array
*/

function generateDropBox(options, select) {
    for(var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.text = opt;
        el.value = opt;
    
        select.add(el);
    }
}

/**
* Comprovació del codi rebut per input (FFF-DDDDDDD-DC), 3 lletres inicials que coincideixen amb les 
* 3 primeres lletres de la $familia. 7 Dígits i un caràcter, que fa referència al %10 dels dìgits 
* en realció a la variable global $mapaCodificació.
* 
* @param {object} codi - Input del codi a revisar
*/

function checkCodi(codi){
    const correct = "✅";
    const incorrect = "❌";

    var check = document.getElementsByName("check"); // Variable amb imatge incorrecte/correcte
    let regex, codificacio, primersCaracters = false; // Variables bool, per el check del input

    check[0].textContent = incorrect;
    const reg = /^[a-z/A-Z]{3}-[0-9]{7}-[AXMTBCSOPZ]$/; //
    splitedCode = codi.target.value.split("-");
    
    
    /* ----- Comprovació 3 lletres inicials de la familia coincideixen -----*/
    familia = document.getElementsByName("familia")
    const fam = familia[0].value.substring(0,3);
    if (fam.toUpperCase() == splitedCode[0].toUpperCase()) primersCaracters = true ;
    regex = (reg.test(codi.target.value));

    /* ----- Comprovació Caràcter final és igual a %10 dels numeros -----*/
    let numbersMod10 = (parseInt(splitedCode[1]))%10;
    if (mapaCodificacio.get(numbersMod10) == splitedCode[2]) codificacio = true; 

    if (primersCaracters && regex && codificacio) check[0].textContent = correct;


}

/**
* 
* Funcio encarregada de comprovar que els 3 digits del tamany son correctes, i els ajunta. 
* Si els 3 son correctes, retorna true.
* 
*/

function joinSize(){
    let amp, llarg, alt = false;
    const amplada = document.getElementsByName("amplada");
    const llargada = document.getElementsByName("llargada");
    const altura = document.getElementsByName("altura");
    const size = document.getElementsByName("tamany");

    console.log(typeof size[0].value)
    const reg = /^[0-9][0-9]*$/;

    if (reg.test(size[0].value)){
        amplada[0].textContent = size[0].value; 
        amp = true;
    } else {
        amplada[0].textContent = "?"; 
        amp = false;
    }

    if (reg.test(size[1].value)){
        llargada[0].textContent = size[1].value; 
        llarg = true;
    } else {
        llargada[0].textContent = "?"; 
        llarg = false;
    }

    if (reg.test(size[2].value)){
        altura[0].textContent = size[2].value; 
        alt= true;
    } else {
        altura[0].textContent = "?"; 
        alt= false;
    }

    if (amp, llarg, alt) return true; else return false;
    
}

/**
* @function checkPassadis Encarregada de comprovar el regex del input del codi del passadis
* P-DD-ED, Inici de codi amb caràcter 'P' (case sensitive) - 2 dígits - un caràcter E o D (esquerra, dreta) (cs)
* Exemple: P-43-D
* 
* @param {object} codiPassadis - Input del codi a revisar
*/

function checkPassadis(codiPassadis){
    const correct = "✅";
    const incorrect = "❌";

    var check = document.getElementsByName("check"); // Variable amb imatge incorrecte/correcte

    check[1].textContent = incorrect;
    
    const reg = /^[P]-[0-9]{2}-[ED]$/;

    if (reg.test(codiPassadis.target.value)) {
        check[1].textContent = correct; 
        return true;
    }

}

/** !!! ACABAR
* @function checkEstanteria Encarregada de comprovar el regex del input del codi del passadis
* P-DD-ED, Inici de codi amb caràcter 'P' (case sensitive) - 2 dígits - un caràcter E o D (esquerra, dreta) (cs)
* Exemple: P-43-D
* 
* @param {object} codiEstanteria - Input del codi a revisar


function checkPassadis(codiEstanteria){
    const correct = "✅";
    const incorrect = "❌";

    var check = document.getElementsByName("check"); // Variable amb imatge incorrecte/correcte

    check[1].textContent = incorrect;
    
    const reg = /^[P]-[0-9]{2}-[ED]$/;

    if (reg.test(checkEstanteria.target.value)) {
        check[1].textContent = correct; 
        return true;
    }

}*/


window.onload = function start() {


    /* ----- Families -----*/
    var options = ["Hola", "Met", "Jaumet", "Abecede", "Pepito"];
    options.sort(); // Ordena array alfabeticament
    var select = document.getElementsByName("familia")[0];

    generateDropBox(options, select);

    /* ----- Codi -----*/
    var codi = document.getElementsByName("codi");
    codi[0].addEventListener("input", checkCodi);

    /* ----- Caràcteristiques (tamany) -----*/
    var size = document.getElementsByName("tamany"); 
    size[0].addEventListener("input", joinSize);
    size[1].addEventListener("input", joinSize);
    size[2].addEventListener("input", joinSize);

    /* ----- Ubicació -----*/
    var ubicacio = document.getElementsByName("ubicacio");
    ubicacio[0].addEventListener("input", checkPassadis);
    //ubicacio[1].addEventListener("input", checkEstanteria);
    //ubicacio[2].addEventListener("input", checkForat);


    

    for(let i = 0;i<bts.length;i++)
    bts[i].addEventListener("click",clicked);
    

    for(let i = 0;i<bts.length;i++)
        cognoms[i].addEventListener("change",validarCognom);
    

}

