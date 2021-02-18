// corrections 

'use strict';
//Le mode strict apporte quelques changements à la sémantique « normale » de JavaScript:
// Le mode strict élimine quelques erreurs silencieuses de JavaScript en les changeant en erreurs explicites (une exception sera levée).
// Le mode strict corrige les erreurs qui font qu'autrement il est difficile pour les moteurs JavaScript d'effectuer des optimisations. Le code sera donc exécuté plus rapidement en mode strict, sans changer une seule ligne si cela n'est pas nécessaire.
// Le mode strict interdit les mot-clés susceptibles d'être définis dans les futures versions de ECMAScript.

var choixOrdi;
var choixJoueur = '';
var random;

choixJoueur = window.prompt('Choisissez-vous pierre, feuille, ou ciseaux ?').toLowerCase();
random = Math.random();

if (random <= 0.33){
    choixOrdi = 'pierre';
} else if (random <= 0.66){
    choixOrdi = 'feuille'
} else {
    choixOrdi = 'ciseaux'
}

if (choixJouteur == choixOrdi) {
    document.getElementById('p1').innerHTML = 'Égalité !'
} else {
    switch (choixOrdi){
        case 'ciseaux' : 
        if (choixJoueur == 'pierre'){
            document.getElementById('p1').innerHTML = 'La pierre écrase le ciseau. Vous gagnez !'
        }else {
            document.getElementById('p1').innerHTML = 'Les ciseaux coupent la feuille. Vous perdez !' 
        } break ;
        case 'feuille' : 
        if (choixJoueur == 'pierre'){
            document.getElementById('p1').innerHTML = 'La pierre est enveloppée par la feuille. Vous gagnez !'
        }else {
            document.getElementById('p1').innerHTML = 'Les ciseaux coupent la feuille. Vous gagnez !' 
        } break ;
        case 'pierre' : 
        if (choixJoueur == 'feuille'){
            document.getElementById('p1').innerHTML = 'La feuille enveloppe la pierre. Vous gagnez !'
        }else {
            document.getElementById('p1').innerHTML = 'Les ciseaux se font écraser par la pierre. Vous perdez !' 
        } break ;
    } // fin du switch
} // fin if else

// correction KATIA 

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
            document.getElementById('p1').innerHTML = 'Le choix de l\'ordinateur est ' + randomItem + ', le votre est ' + user + '<br> Gagné !';
        }else if(randomItem === jeu[1]){
            document.getElementById('p1').innerHTML = 'Le choix de l\'ordinateur est ' + randomItem + ', le votre est ' + user + '<br> Égalité !';
        }else{
            document.getElementById('p1').innerHTML = 'Le choix de l\'ordinateur est ' + randomItem + ', le votre est ' + user + '<br> Perdu !';
        }//fin du if si user choisit feuille

    }else if(user === jeu[2]){// si l'user choisit ciseau

        if(randomItem === jeu[0]){
            document.getElementById('p1').innerHTML = 'Le choix de l\'ordinateur est ' + randomItem + ', le votre est ' + user + '<br> Perdu !';
        }else if(randomItem === jeu[1]){
            document.getElementById('p1').innerHTML = 'Le choix de l\'ordinateur est ' + randomItem + ', le votre est ' + user + '<br> Gagné !';
        }else{
            document.getElementById('p1').innerHTML = 'Le choix de l\'ordinateur est ' + randomItem + ', le votre est ' + user + '<br> Égalité !';
        } // fin du if user choisit ciseau

    }else{
        document.getElementById('p1').innerHTML = 'Votre saisie est incorrecte.';
    } // fin du if principal
    
} // fin de la boucle for