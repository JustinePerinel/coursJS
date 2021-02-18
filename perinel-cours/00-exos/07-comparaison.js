//page du JS pour 07-comparaison.html

var nbr1 = parseFloat(prompt('Saisissez un premier nombre !'));
var nbr2 = parseFloat(prompt('Et un deuxième ?'));
// permet de s'assurer que nous avons bien récupérer un nombre

// console.log(nbr1,nbr2);

if(nbr1 < nbr2){
    document.getElementById('p1').innerHTML = 'Le premier nombre que vous avez saisi ('+nbr1+') est plus petit que le second ('+nbr2+').';
}else if(nbr1 > nbr2){
    document.getElementById('p1').innerHTML = 'Le premier nombre que vous avez saisi ('+nbr1+') est plus grand que le second ('+nbr2+').';
}else if(nbr1 == nbr2){
    document.getElementById('p1').innerHTML = 'Le premier nombre que vous avez saisi ('+nbr1+') est égal au second ('+nbr2+').';
}else{
    document.getElementById('p1').innerHTML = 'Attention, nous avons dit un nombre !';
}


//AUTRE SOLUTION 

// if( (!isNaN(nbr1)) && (!isNaN(nbr2)) ) {
//         if(nbr1 < nbr2){
//             document.getElementById('p1').innerHTML = 'Le premier nombre que vous avez saisi ('+nbr1+') est plus petit que le second ('+nbr2+').';
//         }else if(nbr1 > nbr2){
//             document.getElementById('p1').innerHTML = 'Le premier nombre que vous avez saisi ('+nbr1+') est plus grand que le second ('+nbr2+').';
//         }else{
//             document.getElementById('p1').innerHTML = 'Le premier nombre que vous avez saisi ('+nbr1+') est égal au second ('+nbr2+').';
//         } // fin du if else
//     }else {
//         alert('Attention, nous avons dit un nombre !');
//     } // fin de la condition générale 