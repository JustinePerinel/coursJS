// page js pour precedence.html
// ENVOYÉ PAR PATRICK  

let x = 15;
let y = -20;
let z = 0;

document.getElementById('v1').innerHTML = ' la variable x contient ' + x ;

document.getElementById('v2').innerHTML = (' la variable y contient ' + y );

document.getElementById('v3').innerHTML = (' la variable z contient ' + z );

if ( x >=20 + y && x <= 10 || y < 0){
    document.getElementById('p1').innerHTML = 'Soit x = ' + x + ' compris entre 0 et 10, soit y strictement positif, soit les deux';
}

if ( x >= 20 + y && (x<= 10 || y < 0)) {
    document.getElementById('p2').innerHTML = 'x positif et soit x inférieur à 10, soit y strictement positif, soit les deux';
}

if ( !z == 1) {
    document.getElementById('p3').innerHTML = 'z contient une valeur évalué à false';
}
//if(x >= 20 + y && )