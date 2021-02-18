// page js pour la page 19-devinette.html

// alert('Bienvenue dans le jeu !');

var nombreArrondi = Math.floor(Math.random() * 100);
console.log(typeof nombreArrondi, nombreArrondi);


for(i = 1; i <= 6; i++){
    var choixUser = parseInt(prompt('Trouvez quel est le nombre mystère, compris entre 0 et 100. Attention, vous n\'avez que 6 essais !'));
        if((choixUser < 0) || (choixUser > 100)){ // on teste si en dessous de 0 et au dessus de 100
            alert('Vous devez saisir un nombre entre 0 et 100 !' + i + '/6');
            i--; // ça ne compte pas dans les essais
        }else if(isNaN(choixUser)){ // on teste si l'utilisateur met autre chose qu'un chiffre ou un nombre
            alert('Vous devez saisir un NOMBRE ! ' + i + '/6');
            i--;// ça ne compte pas dans les essais
        }else if(choixUser < nombreArrondi){
            alert('Visez plus haut ! ' + i + '/6.');
        }else if(choixUser > nombreArrondi){
            alert('Visez plus bas ! ' + i + '/6.');
        }else{
            document.getElementById('p1').innerHTML = 'Vous avez gagné, bravo ! La réponse était bien '+ nombreArrondi +'.';
            break; // on casse la boucle
        }
    document.getElementById('p1').innerHTML = 'Dommage, vous n\'avez pas trouvé la bonne réponse, c\'était '+ nombreArrondi +'.';
} // fin de la boucle principale

// correction Patrick

// for (var i = 1; i <= 6; i++ ) {
//     var choixUtilisateur = parseInt(prompt('Trouvez quel est le nombre mystère, compris entre 0 et 100. Attention, vous n\'avez que 6 essais !'));// parseINt nous assure que le nombre est un nombre entier (ex. si on rentre 92.3 il considère 92)
//         if (!isNaN(choixUtilisateur)) {// nous assure que la saisie est un nombre est-ce bien un nombre ? 
//             if (nombreArrondi === choixUtilisateur) {//oui c'est un nombre et le nombre est égal au nombre au hasard
//                 document.getElementById('p1').innerHTML = 'Vous avez gagné, bravo ! La réponse était bien '+ nombreArrondi +'.';
//                 i = 6;//i = 6 la boucle s'arrête
//             } else {
//                 if (nombreArrondi < choixUtilisateur) {
//                     confirm('Le nombre est plus petit ; essai ' + i + '/6');
//                 } else {
//                     confirm('Le nombre est plus grand ; essai ' + i + '/6');
//                 }
//             }//fin if plus grand ou plus petit
//         } else {
//             confirm('Il faut choisir un nombre !');
//         }//fin if principal        
        
//     }//fin for boucle 6 fois

//     alert('La bonne réponse était ' + nombreArrondi);
//     document.write('La bonne réponse était ' + nombreArrondi);

// for ( i = 1; i < 7; i++) {
//     var choixUtilisateur = Number(prompt('Trouvez quel est le nombre mystère, compris entre 0 et 100. Attention, vous n\'avez que 6 essais !'));
//     if (isNaN(choixUtilisateur)) {
//         alert('Vous devez saisir un nombre !');
//         i++
//     }else if(choixUtilisateur > 100 || choixUtilisateur < 0) {
//         alert('Vous devez saisir un nombre entre 0 et 100');
//         i++
//     }else if (choixUtilisateur > nombreArrondi) {
//         alert('Vous êtes trop haut !');
//     }else if (choixUtilisateur < nombreArrondi) {
//         alert('Vous êtes trop bas !')
//     }else {
//         document.getElementById('p1').innerHTML = 'Vous avez gagné, bravo ! La réponse était bien '+ nombreArrondi+'.';
//         i = 7;
//     }
//     document.getElementById('p1').innerHTML = 'Dommage, vous n\'avez pas trouvé la bonne réponse, c\'était '+ nombreArrondi+'.';
// }