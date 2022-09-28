const correct = "✅";
const incorrect = "❌";
function clicked() {
    alert("My click");
}

function checkCodi(codi){
    var check = document.getElementsByName("check");
    let regex = false;
    let codificacio = true;
    let primersCaracters = false;
    check[0].textContent = incorrect;
    const reg = /^[a-z/A-Z]{3}-[0-9]{7}-[AXMTBCSOPZ]$/;
    splitedCode = codi.target.value.split("-");
    familia = document.getElementsByName("familia")
    const fam = familia[0].value.substring(0,3);

    if (fam.toUpperCase() == splitedCode[0].toUpperCase()) primersCaracters = true ;
    console.log(reg.test(codi.target));
    

    if (primersCaracters && regex && codificacio) check[0].textContent = correct;


}


window.onload = function start() {
    /* ----- Families -----*/
    var options = ["Hola", "Met", "Jaumet", "Abecede", "Pepito"];
    
    options.sort();
    var select = document.getElementsByName("familia")[0];

    for(var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.text = opt;
        el.value = opt;
    
        select.add(el);
    }

    /* ----- Codi -----*/
    var codi = document.getElementsByName("codi");
    codi[0].addEventListener("input", checkCodi);



    for(let i = 0;i<bts.length;i++)
    bts[i].addEventListener("click",clicked);
    

    for(let i = 0;i<bts.length;i++)
        cognoms[i].addEventListener("change",validarCognom);
    

}

