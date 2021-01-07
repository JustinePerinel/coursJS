// JS pour exo saisie obligatoire
'use strict';

// avec do.... while....

// do {
//     var reponse = Number(prompt('Avec do... while... : choisir un nombre'));
// } while (isNaN(reponse));

// document.getElementById('p1').innerHTML = 'Vous avez bien saisie un nombre : ' + reponse;

// correction patrick
// let votreSaisie;

// do {
//     votreSaisie = parseFloat(prompt('Merci de saisir un nombre entier ou décimal'));
// } while (isNaN(votreSaisie) == true);

// document.getElementById('p1').innerHTML = ' vous avez bien  saisie un nombre : ' + votreSaisie;


// avec if... else...


// var reponse2 = Number(prompt('Avec if... else... : choisir un nombre '));    


// if(!isNaN(reponse2)) {
//     // var reponse2 = Number(prompt('Avec if... else... : choisir un nombre !'));
//     document.getElementById('p2').innerHTML = 'Vous avez bien saisie un nombre youpi : ' + reponse2;

// } else {
//     reponse2 ;
//     // document.getElementById('p2').innerHTML = reponse2 + "n\'est pas un nombre";
// }
//correction avec un if else
let utilisateurPrompt = prompt('avec if else');
if (utilisateurPrompt.includes('a') || utilisateurPrompt.includes('b') || utilisateurPrompt.includes('c') || utilisateurPrompt.includes('d') || utilisateurPrompt.includes('e') || utilisateurPrompt.includes('f') || utilisateurPrompt.includes('g') || utilisateurPrompt.includes('h') || utilisateurPrompt.includes('i') || utilisateurPrompt.includes('j') || utilisateurPrompt.includes('k') || utilisateurPrompt.includes('l') || utilisateurPrompt.includes('m') || utilisateurPrompt.includes('n') || utilisateurPrompt.includes('o') || utilisateurPrompt.includes('p') || utilisateurPrompt.includes('q') || utilisateurPrompt.includes('r') || utilisateurPrompt.includes('s') || utilisateurPrompt.includes('t') || utilisateurPrompt.includes('u') || utilisateurPrompt.includes('v') || utilisateurPrompt.includes('w') || utilisateurPrompt.includes('x') || utilisateurPrompt.includes('y') || utilisateurPrompt.includes('z')) {
    document.write('Incorrect');
} else if (utilisateurPrompt.includes('.')) {
    utilisateurPrompt = utilisateurPrompt.replace('.', ',');
    document.write('Votre nombre est : ' + utilisateurPrompt);
} else {
   document.write('Votre nombre est : ' + utilisateurPrompt);
}

