// page js pour 21-saisie-obligatoire.html

do{
    var nbr = Number(prompt('Saisissez un nombre entier ou décimal:'));
    // console.log(nbr);
}while(isNaN(nbr) || nbr === 0);
document.getElementById('p1').innerHTML = 'Vous avez bien saisi un nombre : le nombre ' + nbr;


for(i = 0; i < 1; i++){
    var nbr2 = Number(prompt('Do...while - Saisissez un nombre :'))
    if (isNaN(nbr2) || nbr2 === 0){
        i--;
    }else {
        document.getElementById('p2').innerHTML = 'Vous avez bien saisi un nombre : le nombre ' + nbr2;
    }
}

// correction avec if else 

// if (utilisateurPrompt.includes('a') || utilisateurPrompt.includes('b') || utilisateurPrompt.includes('c') || utilisateurPrompt.includes('d') || utilisateurPrompt.includes('e') || utilisateurPrompt.includes('f') || utilisateurPrompt.includes('g') || utilisateurPrompt.includes('h') || utilisateurPrompt.includes('i') || utilisateurPrompt.includes('j') || utilisateurPrompt.includes('k') || utilisateurPrompt.includes('l') || utilisateurPrompt.includes('m') || utilisateurPrompt.includes('n') || utilisateurPrompt.includes('o') || utilisateurPrompt.includes('p') || utilisateurPrompt.includes('q') || utilisateurPrompt.includes('r') || utilisateurPrompt.includes('s') || utilisateurPrompt.includes('t') || utilisateurPrompt.includes('u') || utilisateurPrompt.includes('v') || utilisateurPrompt.includes('w') || utilisateurPrompt.includes('x') || utilisateurPrompt.includes('y') || utilisateurPrompt.includes('z')) {
//     document.write('Incorrect');
// } else if (utilisateurPrompt.includes('.')) {
//     utilisateurPrompt = utilisateurPrompt.replace('.', ',');
//     document.write('Votre nombre est : ' + utilisateurPrompt);
// } else {
//    document.write('Votre nombre est : ' + utilisateurPrompt);
// }

