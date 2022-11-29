
window.onload = function start() {
    console.log("Codi postal - 5 dígits");
    let codipostal = "17800";
    console.log(codipostal +" "+ regexCodipostal(codipostal));

    console.log("Compte corrent - dddd-dddd-dd-dddddddddd");
    let targeta = "1234-3245-98-1234567890";
    console.log(targeta+ " " + regexCompte(targeta));
        
    console.log("Telefon - {(+0034) ddd.ddd.ddd}");
    let telefon = "(+0034) 627.169.404";
    //(+0034) 
    console.log(telefon+ " " + regexTelefon(telefon));

    console.log("DNI: ddddddddC dddddddd-C Cdddddddd")
    let dni = "12345678G";
    //(+0034) 
    console.log(dni+ " " + regexDNI(dni));
    dni = "12345678G";
    console.log(dni+ " " + regexDNI(dni));
}



function regexCodipostal (cp){
    const reg = /^\d{5}$/g;
    return reg.test(cp);
}

function regexCompte (cc) {
    const reg = /^\d{4}-\d{4}-\d{2}-\d{10}$/;
    return reg.test(cc);
}

function regexTelefon (tf) {
    const reg = /^\(\+0034\) \d{3}[.]\d{3}[.]\d{3}$/;
    return reg.test(tf);
}

function regexDNI (dni) {
    const reg = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$|^[TRWAGMYFPDXBNJZSQVHLCKE][0-9]{8}$/i;
    return reg.test(dni);
}
