var mois = parseInt(prompt('Quel mois choisissez-vous ?', 'n° du mois de l\'année entre 1 et 12'));

// Tableau -------------

var moisNom = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

console.log(moisNom);
console.log(moisNom.length);

var numMois = moisNom.indexOf('mai');
console.log(numMois);

// console.log(mois);

// Solution Patrick --------

if(isNaN(mois)){ // si ce n'est pas un number
    document.getElementById('p1').innerHTML = 'Vous devez saisir un chiffre !' // fait ça
}else{ // sinon c'est un nombre
        if(mois === 2){ // un nombre égal à 2 etc.
            // document.getElementById('p1').innerHTML = ' Le mois numéro ' + mois + ' de l\'année fait 28 jours.';
            document.getElementById('p1').innerHTML = ' Le mois numéro ' + mois + ', ' + moisNom[mois - 1] + ', '+'fait 28 jours.'; 
        }else if(mois === 4 || mois === 6 || mois === 9 || mois === 11){// ou à 4 ou à 6 etc.
            // document.getElementById('p1').innerHTML = ' Le numéro ' + mois + ' de l\'année fait 30 jours.';
            document.getElementById('p1').innerHTML = ' Le mois numéro ' + mois + ', ' + moisNom[mois - 1] + ', '+'fait 30 jours.'; 
        }else if(mois === 1 || mois === 3 || mois === 5 || mois === 7 || mois === 8 || mois === 10 || mois === 12 ){// ou à 1 ou à 3 etc.
            // document.getElementById('p1').innerHTML = ' Le numéro ' + mois + ' de l\'année fait 31 jours.';
            document.getElementById('p1').innerHTML = ' Le mois numéro ' + mois + ', ' + moisNom[mois - 1] + ', '+'fait 31 jours.'; 
        }else {
            document.getElementById('p1').innerHTML = 'Votre choix de numéro, le ' + mois + ' , n\'est pas dans le calendrier !';
        }     
}// fin du if else principal

// première solution ----------

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

// Autre solution -------------

// if (isNaN(mois)){
//         document.getElementById('p1').innerHTML = 'Vous devez saisir un chiffre !';
//     }else if(mois == 1 || mois == 3 || mois == 5 || mois == 7 || mois == 8 || mois == 10 || mois == 12 ){
//         document.getElementById('p1').innerHTML = ' Le numéro ' + mois + ' de l\'année fait 31 jours.';
//     }else if(mois == 4 || mois == 6 || mois == 9 || mois == 11){
//         document.getElementById('p1').innerHTML = ' Le numéro ' + mois + ' de l\'année fait 30 jours.';
//     }else if(mois == 2){
//         document.getElementById('p1').innerHTML = ' Le numéro ' + mois + ' de l\'année fait 28 jours.';
//     }else {
//         document.getElementById('p1').innerHTML = 'Il n\'y a que 12 mois dans l\'année !';
// }

// Autre solution ---------

// let nombreSaisi = prompt('Quel moi choisissez-vous ?', 'saisir le numéro du moi entre 1 et 12');
// mois = parseInt(nombreSaisi);
// if (isNaN(mois)){
//     document.getElementById('p1').innerHTML = nombreSaisi + ' n\est pas un nombre '+'(Katia ton code commence ici => Vous devez saisir un chiffre !)';
// }else if(mois == 1 || mois == 3 || mois == 5 || mois == 7 || mois == 8 || mois == 10 || mois == 12 ){
//     document.getElementById('p1').innerHTML = ' Le numéro ' + mois + ' de l\'année fait 31 jours.';
// }else if(mois == 4 || mois == 6 || mois == 9 || mois == 11){
//     document.getElementById('p1').innerHTML = ' Le numéro ' + mois + ' de l\'année fait 30 jours.';
// }else if(mois == 2){
//     document.getElementById('p1').innerHTML = ' Le numéro ' + mois + ' de l\'année fait 28 jours.';
// }else {
//     document.getElementById('p1').innerHTML = 'Il n\'y a que 12 mois dans l\'année !';
// }

