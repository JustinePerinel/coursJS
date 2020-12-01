// JS pour l'exo 10- nombre de jours

var mois = parseInt(prompt('Cette page indique \n \nQuel mois choisissez-vous ?', 'n° du mois, entre 1 et 12'));

var moisNom = [ 'moisdelannee', 'janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

console.log(moisNom);

// if (mois == 1) {
//     document.getElementById('p1').innerHTML = ' Le mois numéro 1 de l\'année fait 31 jours';
// } else if (mois == 2) {
//     document.getElementById('p1').innerHTML = ' Le mois numéro 2 de l\'année fait 28 jours';
// } else if (mois == 3) {
//     document.getElementById('p1').innerHTML = ' Le mois numéro 3 de l\'année fait 31 jours';
// } else if (mois == 4) {
//     document.getElementById('p1').innerHTML = ' Le mois numéro 4 de l\'année fait 30 jours';
// } else if (mois == 5) {
//     document.getElementById('p1').innerHTML = ' Le mois numéro 5 de l\'année fait 31 jours';
// } else if (mois == 6) {
//     document.getElementById('p1').innerHTML = ' Le mois numéro 6 de l\'année fait 30 jours';
// } else if (mois == 7) {
//     document.getElementById('p1').innerHTML = ' Le mois numéro 7 de l\'année fait 31 jours';
// } else if (mois == 8) {
//     document.getElementById('p1').innerHTML = ' Le mois numéro 8 de l\'année fait 31 jours';
// } else if (mois == 9) {
//     document.getElementById('p1').innerHTML = ' Le mois numéro 9 de l\'année fait 30 jours';
// } else if (mois == 10) {
//     document.getElementById('p1').innerHTML = ' Le mois numéro 10 de l\'année fait 31 jours';
// } else if (mois == 11) {
//     document.getElementById('p1').innerHTML = ' Le mois numéro 11 de l\'année fait 30 jours';
// } else if (mois == 12) {
//     document.getElementById('p1').innerHTML = ' Le mois numéro 12 de l\'année fait 31 jours';
// } else if (mois >= 13 ) {
//     document.getElementById('p1').innerHTML = ' Il n\'y a que 12 mois dans l\'année';
// } else {
//     document.getElementById('p1').innerHTML = ' Ceci n\'est pas un nombre';
// }


// if(!isNaN(mois)){ // est-ce bien un nombre ?
//     if(mois >= 1 && mois <= 12){ // si le chiffre est entre 1 et 12, on exécute le bloc de code suivant
//         if(mois == 1 || mois == 3 || mois == 5 || mois == 7 || mois == 8 || mois == 10 || mois == 12 ){ 
//             document.getElementById('p1').innerHTML = ' Le numéro ' + mois + ' de l\'année fait 31 jours.';
//         }else if(mois == 4 || mois == 6 || mois == 9 || mois == 11){
//             document.getElementById('p1').innerHTML = ' Le numéro ' + mois + ' de l\'année fait 30 jours.';
//         }else{
//             document.getElementById('p1').innerHTML = ' Le numéro ' + mois + ' de l\'année fait 28 jours.';
//         }
//     }else{ // sinon, on exécute ce code
//         document.getElementById('p1').innerHTML = 'Il n\' y a que 12 mois dans l\'année !';
//     }
// }else{ // si mois n'est pas un nombre (isNan), on exécute ce code
//     document.getElementById('p1').innerHTML = 'Vous devez saisir un chiffre !';
// } //fin de la condition

// autre manière

// if (isNaN(mois)){
//     document.getElementById('p1').innerHTML = 'Vous devez saisir un chiffre !';
// }else if(mois == 1 || mois == 3 || mois == 5 || mois == 7 || mois == 8 || mois == 10 || mois == 12 ){
//     document.getElementById('p1').innerHTML = ' Le numéro ' + mois + ' de l\'année fait 31 jours.';
// }else if(mois == 4 || mois == 6 || mois == 9 || mois == 11){
//     document.getElementById('p1').innerHTML = ' Le numéro ' + mois + ' de l\'année fait 30 jours.';
// }else if(mois == 2){
//     document.getElementById('p1').innerHTML = ' Le numéro ' + mois + ' de l\'année fait 28 jours.';
// }else {
//     document.getElementById('p1').innerHTML = 'Il n\'y a que 12 mois dans l\'année !';
// }

// correction de Patrick

if(isNaN(mois)) { // mois n'est pas un nombre (isNaN)
    document.getElementById('p1').innerHTML = ' Votre choix n\'est pas un chiffre.'
} else { // sinon c'est un nombre entre 1 et 12
    if (mois === 2) {
        document.getElementById('p1').innerHTML = 'Le mois numéro ' + mois + ' qui est le mois de ' + moisNom[mois] + ' fait 28 jours.';
    } else if ((mois === 4) || (mois === 6) || (mois === 9) || (mois === 11)) {
        document.getElementById('p1').innerHTML = 'Le mois numéro ' + mois + ' qui est le mois de ' + moisNom[mois] + ' fait 30 jours.';  
    } else if ((mois === 1) || (mois === 3) || (mois === 5) || (mois === 7) || (mois === 8) || (mois === 10) || (mois === 12 )) {
        document.getElementById('p1').innerHTML = 'Le mois numéro ' + mois + ' qui est le mois de ' + moisNom[mois] + ' fait 31 jours.';  
    } else { // sinon c'est un nombre supérieur à 12    
        document.getElementById('p1').innerHTML = 'Vous devez choisir un nombre entre 1 et 12 !';  
    }
} // fin du if else principal


console.log(moisNom[mois]);
console.info(moisNom.length);
var numMois = moisNom.indexOf('mai');
console.log(numMois);