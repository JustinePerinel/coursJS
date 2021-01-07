var jeu = ["pierre", "feuille", "ciseau"]; // Array
console.log(jeu);
  
var randomItem = jeu[Math.floor(Math.random()*jeu.length)]; // génère de manière aléatoire une des valeurs contenues dans l'Array jeu.
console.log(randomItem);

var user = prompt('Pierre, feuille ou ciseau ?').toLowerCase();

for(var i = 0; i <= 1; i++){ // nombre de tours
    
    if(user === jeu[0]){ // si l'user choisit pierre
        if(randomItem === jeu[0]){
            document.getElementById('p1').innerHTML = 'Le choix de l\'ordinateur est ' + randomItem + ', le votre est ' + user + '<br> Égalité !';
        }else if(randomItem === jeu[1]){
            document.getElementById('p1').innerHTML = 'Le choix de l\'ordinateur est ' + randomItem + ', le votre est ' + user + '<br> Perdu !';
        }else{
            document.getElementById('p1').innerHTML = 'Le choix de l\'ordinateur est ' + randomItem + ', le votre est ' + user + '<br> Gagné !';
        }// fin du if user choisit pierre

    }else if (user === jeu[1]){ // si l'user choisit feuille
        if(randomItem === jeu[0]){
            document.getElementById('p1').innerHTML = 'La feuille enveloppe la pierre : Gagné !';
        }else if(randomItem === jeu[1]){
            document.getElementById('p1').innerHTML = 'Égalité !';
        }else{
            document.getElementById('p1').innerHTML = 'Le ciseau coupe la feuille : Perdu !';
        }//fin du if si user choisit feuille

    }else if(user === jeu[2]){// si l'user choisit ciseau
        if(randomItem === jeu[0]){
            document.getElementById('p1').innerHTML = 'Le ciseau est écrasé par la pierre : Gagné !';
        }else if(randomItem === jeu[1]){
            document.getElementById('p1').innerHTML = 'La feuille est coupée par le ciseau : Perdu !';
        }else{
            document.getElementById('p1').innerHTML = 'Égalité !';
        } // fin du if user choisit ciseau

    }else{
        document.getElementById('p1').innerHTML = 'Votre saisie est incorrecte.';
    } // fin du if principal
} // fin de la boucle for


// for (var i = 0; i <= 1; i++) {
    
//     if((user === 'pierre') && (randomItem === 'ciseau')){
//         document.getElementById('p1').innerHTML = 'Le choix de l\'ordinateur est ' + randomItem + ', le votre est ' + user + '<br> Gagné !';
//     }else if ((user === 'feuille') && (randomItem === 'pierre')){
//         document.getElementById('p1').innerHTML = 'Le choix de l\'ordinateur est ' + randomItem + ', le votre est ' + user + '<br> Gagné !';
//     }else if ((user === 'ciseau') && (randomItem === 'feuille')){
//         document.getElementById('p1').innerHTML = 'Le choix de l\'ordinateur est ' + randomItem + ', le votre est ' + user + '<br> Gagné !';
//     }else if((user === 'pierre') && (randomItem === 'feuille')){
//         document.getElementById('p1').innerHTML = 'Le choix de l\'ordinateur est ' + randomItem + ', le votre est ' + user + '<br> Perdu !';
//     }else if((user === 'feuille') && (randomItem === 'ciseau')){
//         document.getElementById('p1').innerHTML = 'Le choix de l\'ordinateur est ' + randomItem + ', le votre est ' + user + '<br> Perdu !';
//     }else if((user === 'ciseau') && (randomItem === 'pierre')){
//         document.getElementById('p1').innerHTML = 'Le choix de l\'ordinateur est ' + randomItem + ', le votre est ' + user + '<br> Perdu !';
//     }else if(user === randomItem){
//         document.getElementById('p1').innerHTML = 'Le choix de l\'ordinateur est ' + randomItem + ', le votre est ' + user + '<br> Égalité !';
//     }else {
//         document.getElementById('p1').innerHTML = 'Votre saisie est incorrecte.';
//     }
    
//     // fin du if
// } // fin de la boucle for

// Solution Patrick -------------------------

//pierre feuille ciseau 
// Le mode strict apporte quelques changements à la sémantique « normale » de JS:
// Le mode strict élimine quelques erreurs silencieuses du JS en les changeant en erreurs explicites (une exception sera levée).
// Le mode strict corrige les erreurs qui font qu'autrement il est difficile pour les moteurs JavaScript d'effectuer des optimisations. Le code sera donc exécuté plus rapidement en mode strict, sans changer une seule ligne si cela n'est pas nécessaire.
// Le mode strict interdit les mot-clés susceptibles d'être définis dans les futures versions de ECMAScript.

// 'use strict';

// // confirm('coucou');
// // 1- INITIALISATION DES VARIABLES

// var choixOrdinateur;
// var choixJoueur = '';
// var random;

// // 2- PROMPT() POUR POSER LA QUESTION A L'UTILISATEUR
// // 'window est implicite'

// choixJoueur = window.prompt('Que choisissez-vous : pierre, feuille ou ciseau ?').toLowerCase();// pas de différence avec prompt() et toLowerCase() met le terme en minuscules
// // 3- pour le choix de l'ordinateur on va utiliser un nombre en alétaoire et affecter à ce nombre un des mots à choisir...

// random = Math.random();
// console.log(typeof random, random);

// // 4- on fait un if else if pour choisir le nombre 

// if (random <= 0.33) {
//         choixOrdinateur = 'pierre';
//     } else if (random <= 0.66) {
//         choixOrdinateur = 'feuille';
//     } else {
//         choixOrdinateur = 'ciseau';
// }// fin if else choix du mot au hasard par l'ordinateur

// console.log(typeof choixOrdinateur, choixOrdinateur);

// // 5-  puis if si ils ont choisi la même chose 
// if (choixJoueur == choixOrdinateur) {
//     document.write('Egalité');
// } else {// le choix est différent >>>> un switch
//    switch(choixOrdinateur) {
//     case 'ciseau':// choix ordi
//             if (choixJoueur == 'pierre') {
//                 document.write('<p>La pierre écrase le ciseau : vous gagnez !</p>');
//             } else {// de facto le joueuer a forcément choisi feuille 
//                 document.write('<p>Les ciseaux coupent la feuille : vous perdez !</p>');
//             }
//             break;
//         case 'feuille':// choix ordi
//             if (choixJoueur == 'pierre') {
//                 document.write('<p>La pierre est enveloppée par la feuille : vous perdez !</p>');
//             } else {// de facto le joueuer a forcément choisi ciseau 
//                 document.write('<p>Les ciseaux coupent la feuille : vous gagnez !</p>');
//             }
//             break;
//         case 'pierre':
//             if(choixJoueur == 'feuille') {
//                 document.write('<p>La feuille enveloppe la pierre : vous gagnez !</p>');
//             } else {// choixJoueur == 'ciseau'
//                 document.write('<p>Le ciseau est écrasé par la pierre : vous perdez !</p>');
//             }
//             break;
//    }//fin du switch
// } // fin du if

//methode AUDREY --------------

// var egale = "égalité";
// var win = "gagné";
// var lose = "perdu";
// var nbrUser = 0;
// var nbrIA = 0;
// function PFC( player, iA ) {
//     while (nbrUser < 2 && nbrIA < 2) {
//         var player = prompt("pierre, feuille ou ciseaux ?").toLowerCase();
//         var iA = Math.random()*90;
//         // player = (player.toLowerCase());
//         if (player === "pierre") {
//         } else if (player === "feuille") {
//         } else if (player === "ciseaux") {
//         } else {
//             alert("entrez pierre, feuille ou ciseaux !!");
//         }
//         if (iA <= 30) {
//             iA = "pierre";
//         } else if (iA <= 60 && iA > 30) {
//             iA = "feuille";
//         } else if (iA <= 90 && iA > 60) {
//             iA = "ciseaux";
//         }
//         // console.log("vous: " + player + ", l'ordinateur: " + iA);
//         alert("vous: " + player + ", l'ordinateur: " + iA);
//         if (player === iA) {
//             document.getElementById('p1').innerHTML = ( "Vous êtes à " + egale);
//         } 
//         else if ((player == "ciseaux") && (iA == "pierre" )){
//             document.getElementById('p1').innerHTML = ("Vous avez " + lose);
//             nbrIA++;
//         } 
//         else if ((player == "ciseaux") && (iA == "feuille")){
//             document.getElementById('p1').innerHTML = ("Vous avez " + win);;
//             nbrUser++;
//         } 
//         else if ((player == "pierre") && (iA == "ciseaux")){
//             document.getElementById('p1').innerHTML = ("Vous avez " + win);;
//             nbrUser++;
//         } 
//         else if ((player == "pierre") && (iA == "feuille")){
//             document.getElementById('p1').innerHTML = ("Vous avez " + lose);
//             nbrIA++;
//         } 
//         else if ((player == "feuille") && (iA == "ciseaux")){
//             document.getElementById('p1').innerHTML = ("Vous avez " + lose);            
//             nbrIA++;
//         } 
//         else if ((player == "feuille") && (iA == "pierre")){
//             document.getElementById('p1').innerHTML = ("Vous avez " + win);;
//             nbrUser++;
//         }
//         console.log(nbrUser + " - " + nbrIA);
//         alert(nbrUser + " - " + nbrIA);
//     } // fin de while
//  } // fin de fonction PFC

