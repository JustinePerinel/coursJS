// script pour exo 20 pierre
//Le mode strict apporte quelques changements à la sémantique « normale » de JavaScript:
// Le mode strict élimine quelques erreurs silencieuses de JavaScript en les changeant en erreurs explicites (une exception sera levée).
// Le mode strict corrige les erreurs qui font qu'autrement il est difficile pour les moteurs JavaScript d'effectuer des optimisations. Le code sera donc exécuté plus rapidement en mode strict, sans changer une seule ligne si cela n'est pas nécessaire.
// Le mode strict interdit les mot-clés susceptibles d'être définis dans les futures versions de ECMAScript.
'use strict';

alert('Bienvenue !');

var egale = "égalité";
var win = "gagné";
var lose = "perdu";
var nbrUser = 0;
var nbrIA = 0;

function PFC( player, iA ) {
    while (nbrUser < 2 && nbrIA < 2) {
        var player = prompt("pierre, feuille ou ciseaux ?").toLowerCase();
        var iA = Math.random()*90;
        // player = (player.toLowerCase());
 
        if (player === "pierre") {
        } else if (player === "feuille") {
        } else if (player === "ciseaux") {
        } else {
            alert("entrez pierre, feuille ou ciseaux !!");
        }
 
        if (iA <= 30) {
            iA = "pierre";
        } else if (iA <= 60 && iA > 30) {
            iA = "feuille";
        } else if (iA <= 90 && iA > 60) {
            iA = "ciseaux";
        }
        // console.log("vous: " + player + ", l'ordinateur: " + iA);
        alert("vous: " + player + ", l'ordinateur: " + iA);
 
        if (player === iA) {
            document.getElementById('p1').innerHTML = ( "Vous êtes à " + egale);
        } 
        else if ((player == "ciseaux") && (iA == "pierre" )){
            document.getElementById('p1').innerHTML = ("Vous avez " + lose);
            nbrIA++;
        } 
        else if ((player == "ciseaux") && (iA == "feuille")){
            document.getElementById('p1').innerHTML = ("Vous avez " + win);;
            nbrUser++;
        } 
        else if ((player == "pierre") && (iA == "ciseaux")){
            document.getElementById('p1').innerHTML = ("Vous avez " + win);;
            nbrUser++;
        } 
        else if ((player == "pierre") && (iA == "feuille")){
            document.getElementById('p1').innerHTML = ("Vous avez " + lose);
            nbrIA++;
        } 
        else if ((player == "feuille") && (iA == "ciseaux")){
            document.getElementById('p1').innerHTML = ("Vous avez " + lose);            
            nbrIA++;
        } 
        else if ((player == "feuille") && (iA == "pierre")){
            document.getElementById('p1').innerHTML = ("Vous avez " + win);;
            nbrUser++;
        }
        console.log(nbrUser + " - " + nbrIA);
        alert(nbrUser + " - " + nbrIA);
    } // fin de while
 } // fin de fonction PFC

// AUTRES SOLUTIONS

// var jeu = ["pierre", "feuille", "ciseau"]; // Array
// console.log(jeu);
// var randomItem = jeu[Math.floor(Math.random()*jeu.length)]; // génère de manière aléatoire une des valeurs contenues dans l'Array jeu.
// console.log(randomItem);
// var user = prompt('Pierre, feuille ou ciseau ?').toLowerCase();
// for(var i = 0; i <= 1; i++){ // nombre de tours
//     if(user === jeu[0]){ // si l'user choisit pierre
//         if(randomItem === jeu[0]){
//             document.getElementById('p1').innerHTML = 'Le choix de l\'ordinateur est ' + randomItem + ', le votre est ' + user + '<br> Égalité !';
//         }else if(randomItem === jeu[1]){
//             document.getElementById('p1').innerHTML = 'Le choix de l\'ordinateur est ' + randomItem + ', le votre est ' + user + '<br> Perdu !';
//         }else{
//             document.getElementById('p1').innerHTML = 'Le choix de l\'ordinateur est ' + randomItem + ', le votre est ' + user + '<br> Gagné !';
//         }// fin du if user choisit pierre
//     }else if (user === jeu[1]){ // si l'user choisit feuille
//         if(randomItem === jeu[0]){
//             document.getElementById('p1').innerHTML = 'Le choix de l\'ordinateur est ' + randomItem + ', le votre est ' + user + '<br> Gagné !';
//         }else if(randomItem === jeu[1]){
//             document.getElementById('p1').innerHTML = 'Le choix de l\'ordinateur est ' + randomItem + ', le votre est ' + user + '<br> Égalité !';
//         }else{
//             document.getElementById('p1').innerHTML = 'Le choix de l\'ordinateur est ' + randomItem + ', le votre est ' + user + '<br> Perdu !';
//         }//fin du if si user choisit feuille
//     }else if(user === jeu[2]){// si l'user choisit ciseau
//         if(randomItem === jeu[0]){
//             document.getElementById('p1').innerHTML = 'Le choix de l\'ordinateur est ' + randomItem + ', le votre est ' + user + '<br> Perdu !';
//         }else if(randomItem === jeu[1]){
//             document.getElementById('p1').innerHTML = 'Le choix de l\'ordinateur est ' + randomItem + ', le votre est ' + user + '<br> Gagné !';
//         }else{
//             document.getElementById('p1').innerHTML = 'Le choix de l\'ordinateur est ' + randomItem + ', le votre est ' + user + '<br> Égalité !';
//         } // fin du if user choisit ciseau
//     }else{
//         document.getElementById('p1').innerHTML = 'Votre saisie est incorrecte.';
//     } // fin du if principal
// } // fin de la boucle for





