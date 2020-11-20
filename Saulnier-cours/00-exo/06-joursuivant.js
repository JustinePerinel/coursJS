// pages JS de l'exo 06 Jour suivant

// Avec la fonction else else if else
var jour = prompt('1 - Quel jour sommes-nous ?( avec un if)');

if(jour == 'lundi') {
    document.getElementById('p1').innerHTML =('Demain nous sommes mardi');
} else if (jour == 'mardi') {
    document.getElementById('p1').innerHTML =('Demain nous sommes mercredi');
} else if (jour == 'mercredi') {
    document.getElementById('p1').innerHTML =('Demain nous sommes jeudi');
} else if (jour == 'jeudi') {
    document.getElementById('p1').innerHTML =('Demain nous sommes vendredi');
} else if (jour == 'vendredi') {
    document.getElementById('p1').innerHTML =('Demain nous sommes samedi');
} else if (jour == 'samedi') {
    document.getElementById('p1').innerHTML =('Demain nous sommes dimanche');
} else if (jour == 'dimanche') {
    document.getElementById('p1').innerHTML =('Demain nous sommes lundi');
} else {
    document.getElementById('p1').innerHTML =('Ceci n\'est pas un jour de la semaine');
}

// Avec la fonction switch

var jourS = prompt('1 - Quel jour sommes-nous ?( avec un switch)');

switch( jourS ) {
    case 'lundi':
        document.getElementById('p2').innerHTML = 'Demain nous sommes mardi';
        break;
    case 'mardi':
        document.getElementById('p2').innerHTML = 'Demain nous sommes mercredi';
        break;
    case 'mercredi':
        document.getElementById('p2').innerHTML = 'Demain nous sommes jeudi';
        break;
    case 'jeudi':
        document.getElementById('p2').innerHTML = 'Demain nous sommes vendredi';
        break;
    case 'vendredi':
        document.getElementById('p2').innerHTML = 'Demain nous sommes samedi';
        break;
    case 'samedi':
        document.getElementById('p2').innerHTML = 'Demain nous sommes dimanche';
        break;
    case 'dimanche':
        document.getElementById('p2').innerHTML = 'Demain nous sommes lundi. <br> Bon courage';
        break;
    default:
        document.getElementById('p2').innerHTML = 'Ceci  n\'est pas un jour de la semaine';
}
