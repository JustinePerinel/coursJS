// js de Katia

// EXERCICE EN IF / ELSE IF

var jour = prompt('Quel jour sommes-nous ? (if/else if)');

// console.log(jour);

if(jour == 'lundi'){
    document.getElementById('p1').innerHTML = 'Demain nous serons mardi.';
}else if(jour == 'mardi'){
    document.getElementById('p1').innerHTML = 'Demain, jour des enfants !';
}else if(jour == 'mercredi'){
    document.getElementById('p1').innerHTML = 'Demain nous serons jeudi.';
}else if(jour == 'jeudi'){
    document.getElementById('p1').innerHTML = 'Demain nous serons vendredi.';
}else if(jour == 'vendredi'){
    document.getElementById('p1').innerHTML = 'Demain, grasse matinée !';
}else if(jour == 'samedi'){
    document.getElementById('p1').innerHTML = 'Demain, jour du Seigneur !';
}else if (jour == 'dimanche'){
    document.getElementById('p1').innerHTML = 'Demain, la reprise !';
}else{
    document.getElementById('p1').innerHTML = 'Ce jour est inconnu...';
}

// EXERCICE EN SWITCH

var jour2 = prompt('Quel jour sommes-nous ? (switch)');

switch(jour2){ // on va switcher sur la variable
    case 'lundi' : // un des "cas" possibles ou une des "issues"
        document.getElementById('p2').innerHTML = 'Demain nous serons mardi.';
        break; // ne pas oublier le break ! Là il sort du switch
    case 'mardi' :
        document.getElementById('p2').innerHTML = 'Demain, jour des enfants !';
        break;
    case 'mercredi' :
        document.getElementById('p2').innerHTML = 'Demain nous serons jeudi.';
        break;
    case 'jeudi' :
        document.getElementById('p2').innerHTML = 'Demain nous serons vendredi.';
        break;
    case 'vendredi' :
        document.getElementById('p2').innerHTML = 'Demain, grasse matinée !';
        break;
    case 'samedi' :
        document.getElementById('p2').innerHTML = 'Demain, jour du Seigneur !';
        break;
    case 'dimanche' :
        document.getElementById('p2').innerHTML = 'Demain, la reprise !';
        break;
    default:
        document.getElementById('p2').innerHTML = 'Ce jour est inconnu...';
}