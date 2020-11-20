// JS pour l'exo baccalaureat

// parseFloat va permettre de prendre en compte le point ex 8.5/20
var noteBac = parseFloat(prompt('Quel est ta moyenne au Bac ? '))

if( (noteBac < 10)) {
    document.getElementById('p1').innerHTML = noteBac + ' : Vous êtes recalé :(';
} else if ((noteBac >= 10 ) && (noteBac < 12 )) {
    document.getElementById('p1').innerHTML =  noteBac + ' : Tu passes ! ';
} else  if (( noteBac >= 12 )&& (noteBac <= 20 )) {
    document.getElementById('p1').innerHTML =  noteBac + ' : Bravo pour la mention';
} else {
    alert('Vous n\'avez pas entré une note entre 0 et 20');
}

// exo baccalaureat
// alert('la page est bien liée');
// let moyenne = parseFloat(prompt('Entrez votre moyenne'));
// console.info(moyenne);
// if ((moyenne > 0) && (moyenne < 10)) {
//     document.getElementById('p1').innerHTML='Vous êtes recalé';
// } else if ((moyenne >= 10) && (moyenne <= 12)) {
//     document.getElementById('p1').innerHTML='Vous êtes recu sans mention!';
// } else if ((moyenne >= 12) && (moyenne <= 20)) {
//     document.getElementById('p1').innerHTML='Bravo vous avez une mention ';
// } else {
//     document.getElementById('p1').innerHTML='Vous devez saisir une note entre 0 et 20'; 
// }


// AVEC FONCTION
// let moy = parseFloat(prompt('Quelle est ta moyenne au bac ? ')); // le parsefloat permet d'assurer que la réponse sera considéré comme un "number", dans le cas d'un nombre décimal
// console.log(typeof(moy));
// function baccalaureat(moy){
//     if ( (!isNaN(moy))) { // est bien un nombre ??
//         if(moy >= 0 && moy <= 10 ){
//             document.getElementById('p1').innerHTML = 'Tu es recalé !';
//         }else if(moy >= 10 && moy <= 12){
//             document.getElementById('p1').innerHTML = 'Tu passes !';
//         }else if(moy > 12 && moy <= 20){
//             document.getElementById('p1').innerHTML = 'Bravo pour la mention ! :) ' ;
//         }else {
//             document.getElementById('p1').innerHTML = 'Votre nombre doit être compris entre 0 et 20! :) '; 
//         }
//     }else{
//         return document.getElementById('p1').innerHTML = 'Yahoooo! es tu sûr de ce cela ?' ;
//     }
// }
// baccalaureat(moy)
