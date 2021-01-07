// script pour exo 19 devinette

alert('Bienvenue !');

// on doit trouver un nombre au hasard que l'utilisateur doit trouver
// 1- le nombre
// let nbrAuHasard = Math.random(); //nombre décimal entre 0 et 1
// console.log(typeof nbrAuHasard, nbrAuHasard);
// // 2 - on multiplie le nombre trouvé par 100
// let nbrX100 = nbrAuHasard*100;
// console.log(nbrX100);
// // 3- on arrondie le nombre
// let nbrArrondi = Math.floor(nbrX100);
// console.log(nbrArrondi);

// étape 2 et 3 // autre solution pour arrondir le nombre
// let nbrX100 = parseInt(nbrAuHasard*100);
// console.log(nbrX100);
console.log("Bienvenue dans ce jeu de devinette !");

var solution = Math.floor(Math.random() * 100) + 1 ; // Je génère un nombre aléatoire entre 1 et 100
console.log("(La solution est " + solution + ")");

for (var i = 1; i <= 6; i++) { // je lance la boucle, où i <=  nombre d'essai voulu maximum
    var essai = parseInt(prompt("Tu as 6 essais pour trouver le nombre mystère, choisis un nombre entre 1 et 100 :"));
                              
    if (essai === solution) {
        console.log("Vous avez trouvé en " + i + " essai(s)");
        alert("Bravo, Vous avez trouvé en " + i + " essai(s)");
        break; // si la réponse est trouvé, la boucle s'arrête et la console l'affiche, en précisant le nombre d'essai nécessaires.
        // OU i = 6 pour remplacer le break;
    } 
    if (essai < solution){ // comparent la valeur "essai" à la valeur "solution"
        // console.log(essai + " est trop petit");
        alert(essai + ' est trop petit... Vous en êtes à ' + i + ' sur 6 tentatives!!');
    } 
    if (essai > solution) {
        // console.log(essai + " est trop grand");
        alert(essai + ' est trop grand... Vous en êtes à ' + i + ' sur 6 tentatives!!');
    } 
    if (i === 6){
        console.log("Vous avez perdu ! Le nombre était : " + solution);
        alert('Vous avez perdu, le nombre était ' + solution ); // si la solution n'est pas trouvée, la console l'affiche en donnant la solution
    }
    if (isNaN(essai)) { //si ce n'est pas un nombre
        alert('Votre proposition n\'est pas un nombre !! Vous en êtes à ' + i + ' sur 6 tentatives!!');
    } console.log(i);   
} // fin boucle for

// autreS SOLUTION

// var nbrHasard = Math.floor(Math.random() * 100);
// console.log(typeof nbrHasard, nbrHasard);
// for(i = 1; i <= 6; i++){
//     var choixUser = parseInt(prompt('Trouvez quel est le nombre mystère, compris entre 0 et 100. Attention, vous n\'avez que 6 essais !'));
//         if((choixUser < 0) || (choixUser > 100)){ // on teste si en dessous de 0 et au dessus de 100
//             alert('Vous devez saisir un nombre entre 0 et 100 !');
//             i--; // ça ne compte pas dans les essais
//         }else if(isNaN(choixUser)){ // on teste si l'utilisateur met autre chose qu'un chiffre ou un nombre
//             alert('Vous devez saisir un NOMBRE !');
//             i--;// ça ne compte pas dans les essais
//         }else if(choixUser < nbrHasard){
//             alert('Visez plus haut ! ' + i + '/6.');
//         }else if(choixUser > nbrHasard){
//             alert('Visez plus bas ! Vous  ' + i + '/6.');
//         }else{
//             document.getElementById('p1').innerHTML = 'Vous avez gagné, bravo ! La réponse était bien '+ nbrHasard +'.';
//             break; // on casse la boucle
//         }
//     document.getElementById('p1').innerHTML = 'Dommage, vous n\'avez pas trouvé la bonne réponse, c\'était '+ nbrHasard +'.';
// }


