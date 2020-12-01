var moyenne = parseFloat(prompt('Quelle moyenne avez-vous obtenu au Bac ?'));
// le parseFloat() permet de s'assurer que le contenu de la variable soit considéré comme un number et prend en compte les nombres décimaux (nombre à virgule)

// console.log(moyenne);

if(moyenne < 10){
    document.getElementById('p1').innerHTML = 'Vous avez obtenu ' + moyenne + ' au Bac, loser !';
}else if(moyenne >= 10 && moyenne < 12){
    document.getElementById('p1').innerHTML = 'Vous avez obtenu ' + moyenne + ' au Bac, ça passe !';
}else if(moyenne >= 12 && moyenne <= 20){
    document.getElementById('p1').innerHTML = 'Vous avez obtenu ' + moyenne + ' au Bac, well done !';
}else{
    document.getElementById('p1').innerHTML = 'Saisie incorrecte !';
}

console.log(typeof moyenne);

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