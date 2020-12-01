// page js pour 09-valeurs.html


//PARTIE 1
var nb1 = 7;
var nb2 = 7;
var nb3 = 7;
// prompts remplacés par des valeurs 

if (nb1 > nb2) {
    nb1 = nb3 * 2;
} else {
    nb1++;
    if (nb2 > nb3){
        nb1 = nb1 + nb3 * 3;
    } else {
        nb1 = 0;
        nb3 = nb3 * 2 + nb2;
    }
}

document.getElementById('tda1').innerHTML = nb1;
document.getElementById('tda2').innerHTML = nb2;
document.getElementById('tda3').innerHTML = nb3;

// PARTIE 2
var nb1a = 4;
var nb2a = 4;
var nb3a = 4;

if (nb1a > nb2a) {
    nb1a = nb3a * 2;
} else {
    nb1a++;
    if (nb2a > nb3a){
        nb1a = nb1a + nb3a * 3;
    } else {
        nb1a = 0;
        nb3a = nb3a * 2 + nb2a;
    }
}

document.getElementById('tdb1').innerHTML = nb1a;
document.getElementById('tdb2').innerHTML = nb2a;
document.getElementById('tdb3').innerHTML = nb3a;

// PARTIE 3 
var nb1b = 4;
var nb2b = 3;
var nb3b = 2;

if (nb1b > nb2b) {
    nb1b = nb3b * 2;
} else {
    nb1b++;
    if (nb2b > nb3b){
        nb1b = nb1b + nb3b * 3;
    } else {
        nb1b = 0;
        nb3b = nb3b * 2 + nb2b;
    }
}

document.getElementById('tdc1').innerHTML = nb1b;
document.getElementById('tdc2').innerHTML = nb2b;
document.getElementById('tdc3').innerHTML = nb3b;

// PARTIE 4 
var nb1c = 2;
var nb2c = 4;
var nb3c = 0;

if (nb1c > nb2c) {
    nb1c = nb3c * 2;
} else {
    nb1c++;
    if (nb2c > nb3c){
        nb1c = nb1c + nb3c * 3;
    } else {
        nb1c = 0;
        nb3c = nb3c * 2 + nb2c;
    }
}

document.getElementById('tdd1').innerHTML = nb1c;
document.getElementById('tdd2').innerHTML = nb2c;
document.getElementById('tdd3').innerHTML = nb3c;