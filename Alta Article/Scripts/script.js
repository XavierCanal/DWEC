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
    for (var i = 0; i < options.length; i++) {
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

function checkCodi(codi) {
    const correct = "✅";
    const incorrect = "❌";

    var check = document.getElementsByName("check"); // Variable amb imatge incorrecte/correcte
    let regex, codificacio, primersCaracters = false; // Variables bool, per el check del input

    check[0].textContent = incorrect;
    const reg = /^[a-z/A-Z]{3}-[0-9]{7}-[AXMTBCSOPZ]$/; //
    splitedCode = codi.target.value.split("-");


    /* ----- Comprovació 3 lletres inicials de la familia coincideixen -----*/
    familia = document.getElementsByName("familia")
    const fam = familia[0].value.substring(0, 3);
    if (fam.toUpperCase() == splitedCode[0].toUpperCase()) primersCaracters = true;
    regex = (reg.test(codi.target.value));

    /* ----- Comprovació Caràcter final és igual a %10 dels numeros -----*/
    let numbersMod10 = (parseInt(splitedCode[1])) % 10;
    if (mapaCodificacio.get(numbersMod10) == splitedCode[2]) codificacio = true;

    if (primersCaracters && regex && codificacio) check[0].textContent = correct;


}

/**
* 
* Funcio encarregada de comprovar que els 3 digits del tamany son correctes, i els ajunta. 
* Si els 3 son correctes, retorna true.
* @return
*/

function joinSize() {
    let amp, llarg, alt = false;
    const amplada = document.getElementsByName("amplada");
    const llargada = document.getElementsByName("llargada");
    const altura = document.getElementsByName("altura");
    const size = document.getElementsByName("tamany");

    console.log(typeof size[0].value)
    const reg = /^[0-9][0-9]*$/;

    amp = completeSize(size[0].value, amplada, reg);
    llarg = completeSize(size[1].value, llargada, reg);
    alt = completeSize(size[2].value, altura, reg);

    return (amp, llarg, alt);

}

function completeSize(size, parameter, reg) {
    if (reg.test(size)) {
        parameter[0].textContent = size;
        return true;
    } else {
        parameter[0].textContent = "?";
        return false;
    }
}

/**
* @function checkPassadis Encarregada de comprovar el regex del input del codi del passadis
* P-DD-ED, Inici de codi amb caràcter 'P' (case sensitive) - 2 dígits - un caràcter E o D (esquerra, dreta) (cs)
* Exemple: P-43-D
* 
* @param {object} codiPassadis - Input del codi a revisar
*/

function checkPassadis(codiPassadis) {
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

/** 
* @function checkEstanteria Encarregada de comprovar el regex del input del codi de la estanteria
* EST-DD.DD, Inici de codi amb caràcters 'EST' (case sensitive) - 2 dígits - 2 dígits
* Exemple: EST-19.42
* 
* @param {object} codiEstanteria - Input del codi a revisar
*/

function checkEstanteria(codiEstanteria){
    console.log(typeof(codiEstanteria));
    const correct = "✅";
    const incorrect = "❌";

    var check = document.getElementsByName("check"); // Variable amb imatge incorrecte/correcte

    check[2].textContent = incorrect;
    
    const reg = /^(EST)-[0-9]{2}[.][0-9]{2}$/;

    if (reg.test(codiEstanteria.target.value)) {
        check[2].textContent = correct; 
        return true;
    }

}

/** 
* @function checkForat Encarregada de comprovar el Regex del input del codi del forat
* DD*FFF*DD\DD, Inici de codi amb 2 dígits * 3 caràcters (no case sensitive) * 2 dígits \ 2 dígits
* Exemple: 42*SeD*22\90
* 
* @param {object} codiForat - Input del codi a revisar
*/

function checkForat(codiForat){
    const correct = "✅";
    const incorrect = "❌";

    var check = document.getElementsByName("check"); // Variable amb imatge incorrecte/correcte

    check[3].textContent = incorrect;
    const reg = /^[0-9]{2}[*][a-z/A-Z]{3}[*][0-9]{2}[\\\\\][0-9]{3}$/;

    if (reg.test(codiForat.target.value)) {
        check[3].textContent = correct; 
        return true;
    }

}


window.onload = function start() {
    /* ----- Inicia tots camps negatius ----- */
    var check = document.getElementsByName("check");
    check.forEach(element => {
        element.textContent = "❌";
    });

    /* ----- Families ----- */
    var options = ["Hola", "Met", "Jaumet", "Abecede", "Pepito"];
    options.sort(); // Ordena array alfabeticament
    var select = document.getElementsByName("familia")[0];

    generateDropBox(options, select);

    /* ----- Codi ----- */
    var codi = document.getElementsByName("codi");
    codi[0].addEventListener("input", checkCodi);

    /* ----- Caràcteristiques (tamany) ----- */
    var size = document.getElementsByName("tamany");
    size[0].addEventListener("input", joinSize);
    size[1].addEventListener("input", joinSize);
    size[2].addEventListener("input", joinSize);

    /* ----- Ubicació ----- */
    var location = document.getElementsByName("ubicacio");
    location[0].addEventListener("input", checkPassadis);
    location[1].addEventListener("input", checkEstanteria);
    location[2].addEventListener("input", checkForat);

    /* ----- Donada d'alta ----- */



}

