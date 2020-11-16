// JS pour portée des varibales

// deux variables globales
let x = 5;
var y = 10;

function portee1() {//1ere fonction avec des varibales globales
    document.getElementById('p1').innerHTML = 'Depuis portee1() : x = ' + x + ' y = '+ y ;
}

function portee2() {//2nd fonction qui définit deux variables locales
    let a = 1;
    var b = 2;
    document.getElementById('p2').innerHTML = 'Depuis portee2() : a = ' + a + ' b = ' + b ;
}

function portee3() {
    let x = 20; //bien qu'elles portent le même nom que les globales, ce sont deux entités différentes
    var y = 40;
    document.getElementById('p3').innerHTML = 'Depuis portee3() : x = ' + x + ' et y = ' + y;
}

portee1();
portee2();
portee3();

// on tente d'afficher les globales
document.getElementById('p4').innerHTML = ' <em> Ceci n\'est pas une fonction </em> et le message généré dans la console est normal :  Depuis l\'espace global : x = ' + x + ' y = ' + y;

// on tente d'afficher les locales, ce qui ne fonctionne pas
document.getElementById('p5').innerHTML = ' Depuis l\'espace local : a = ' + a + ' b = ' + b;
