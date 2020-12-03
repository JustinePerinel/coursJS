// page js pour pour page 10-nombrejours.html

var mois = parseInt(prompt('Choisissez un mois : ', 'saisir un numéro entre 1 et 12'));

// if (mois >= 1 && mois <= 12){
//     if(mois == 1) {
//         document.getElementById('p1').innerHTML = 'Vous avez choisi le mois de janvier, il y a 31 jours ! '
//     } else if (mois == 2) {
//         document.getElementById('p1').innerHTML = 'Vous avez choisi le mois de février, il y a 28 jours ! '
//     } else if (mois == 3) {
//         document.getElementById('p1').innerHTML = 'Vous avez choisi le mois de mars, il y a 31 jours ! '
//     } else if (mois == 4) {
//         document.getElementById('p1').innerHTML = 'Vous avez choisi le mois d\'avril, il y a 30 jours ! '
//     } else if (mois == 5) {
//         document.getElementById('p1').innerHTML = 'Vous avez choisi le mois de mai, il y a 31 jours ! '
//     } else if (mois == 6) {
//         document.getElementById('p1').innerHTML = 'Vous avez choisi le mois de juin, il y a 30 jours ! '
//     } else if (mois == 7) {
//         document.getElementById('p1').innerHTML = 'Vous avez choisi le mois de juillet, il y a 31 jours ! '
//     } else if (mois == 8) {
//         document.getElementById('p1').innerHTML = 'Vous avez choisi le mois d\'août, il y a 31 jours ! '
//     } else if (mois == 9) {
//         document.getElementById('p1').innerHTML = 'Vous avez choisi le mois de septembre, il y a 30 jours ! '
//     } else if (mois == 10) {
//         document.getElementById('p1').innerHTML = 'Vous avez choisi le mois d\'octobre, il y a 31 jours ! '
//     } else if (mois == 11) {
//         document.getElementById('p1').innerHTML = 'Vous avez choisi le mois de novembre, il y a 30 jours ! '
//     } else {
//         document.getElementById('p1').innerHTML = 'Vous avez choisi le mois de décembre, il y a 31 jours !'
//     }
// }else{
//     document.getElementById('p1').innerHTML = 'Vous devez saisir un nombre entre 1 et 12 !'
// }

// correction Katia 1
// if(!isNaN(mois)){ // est-ce bien un nombre ?
//     if(mois >= 1 && mois <= 12){ // si le chiffre est entre 1 et 12, on exécute le bloc de code suivant
//         if(mois == 1 || mois == 3 || mois == 5 || mois == 7 || mois == 8 || mois == 10 || mois == 12 ){ 
//             document.getElementById('p1').innerHTML = ' Le mois numéro ' + mois + ' de l\'année fait 31 jours.';
//         }else if(mois == 4 || mois == 6 || mois == 9 || mois == 11){
//             document.getElementById('p1').innerHTML = ' Le mois numéro ' + mois + ' de l\'année fait 30 jours.';
//         }else{
//             document.getElementById('p1').innerHTML = ' Le mois numéro ' + mois + ' de l\'année fait 28 jours.';
//         }
//     }else{ // sinon, on exécute ce code
//         document.getElementById('p1').innerHTML = 'Il n\' y a que 12 mois dans l\'année !';
//     }
// }else{ // si mois n'est pas un nombre (isNan), on exécute ce code
//     document.getElementById('p1').innerHTML = 'Vous devez saisir un chiffre !';
// } //fin de la condition

// correction Katia 2
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

var moisNom = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
console.log(moisNom[4]);
console.info(moisNom.length);

// permet de savoir quel est le numéro de notre élément dans le tableau 
var numMois = moisNom.indexOf('mai');
console.log(numMois)

if (isNaN(mois)){
    document.getElementById('p1').innerHTML = 'Votre choix n\'est pas un chiffre'
} else {/* sinon c'est un nombre */
    if (mois == 2){
        // document.getElementById('p1').innerHTML = ' Le numéro ' + mois + ' de l\'année fait 28 jours.';
        document.getElementById('p1').innerHTML = ' Le mois numéro ' + mois + ', '+ moisNom[mois-1] + ', fait 28 jours.';
    } else if ((mois === 4) || (mois === 6) || (mois === 9) || (mois === 11)){
        document.getElementById('p1').innerHTML = ' Le mois numéro ' + mois + ', '+ moisNom[mois-1] + ', fait 30 jours.';
    } else if ((mois === 1) || (mois === 3) || (mois === 5) || (mois === 7) || (mois === 8) || (mois === 10) || (mois === 12) ){
        document.getElementById('p1').innerHTML = ' Le mois numéro ' + mois + ', '+ moisNom[mois-1] + ', fait 31 jours.';
    } else {
        document.getElementById('p1').innerHTML = 'Vous devez saisir un nombre entre 1 et 12 !'
    }
} // fin du if else

