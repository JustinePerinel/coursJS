var jeu;

// while(jeu != 'oui'){
//     jeu = prompt('On joue à ni oui ni non ?');
// }

// console.log(jeu + '... Fini !');
// document.getElementById('p1').innerHTML = jeu + '... fini !';

var reponse = ['oui', 'non'];

console.log(ouiNon);

while( (jeu != reponse[0]) || (jeu != reponse[1]) ){
    jeu = prompt('On joue à ni oui ni non ?');
}

console.log(jeu + '... Fini !');
document.getElementById('p1').innerHTML = jeu + '... fini !';
