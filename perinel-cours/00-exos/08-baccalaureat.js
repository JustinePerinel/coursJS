// paje js pour baccalaureat.html

// prend en compte les nombres décimaux 
var note = parseFloat(prompt('Quelle est votre note du Baccalauréat ?'));
console.log(note);

if ((note < 10) && (note > 0)){
    document.getElementById('p1').innerHTML = 'Votre note est '+note+', désolé mais vous êtes recalé.';
}else if((note >= 10) && (note < 12)){
    document.getElementById('p1').innerHTML = 'Votre note est '+note+', vous obtenez le Baccalauréat, sans mention.';
}else if ((note >= 12) && (note < 14)){
    document.getElementById('p1').innerHTML = 'Votre note est '+note+', vous obtenez le Baccalauréat, avec la mention assez bien !';
}else if ((note >= 14) && (note < 16)){
    document.getElementById('p1').innerHTML = 'Votre note est '+note+', vous obtenez le Baccalauréat, avec la mention bien !';
}else if ((note >= 16) && (note < 18)){
    document.getElementById('p1').innerHTML = 'Votre note est '+note+', vous obtenez le Baccalauréat, avec la mention très bien !';
}else if ((note >= 18) && (note <= 20)){
    document.getElementById('p1').innerHTML = 'Votre note est '+note+', vous obtenez le Baccalauréat, avec les félicitations du Jury !';
}else {
    document.getElementById('p1').innerHTML = 'Vous devez saisir une note entre 0 et 20';
}

let moy = parseFloat(prompt('Quelle est ta moyenne au bac ? ')); // le parsefloat permet d'assurer que la réponse sera considéré comme un "number", dans le cas d'un nombre décimal

console.log(typeof(moy));

function baccalaureat(moy){
    if ( (!isNaN(moy))) { // est bien un nombre ??
        if(moy >= 0 && moy <= 10 ){
            document.getElementById('p2').innerHTML = 'Désolé, tu es recalé !';
        }else if(moy >= 10 && moy <= 12){
            document.getElementById('p2').innerHTML = 'Bravo, tu passes !';
        }else if(moy > 12 && moy <= 20){
            document.getElementById('p2').innerHTML = 'Tu passes et avec une mention, félicitations ! :) ' ;
        }else {
            document.getElementById('p2').innerHTML = 'Votre nombre doit être compris entre 0 et 20! :) '; 
        }
    }else{
        return document.getElementById('p2').innerHTML = 'On a dit un nombre ! ' ;
    }
}
baccalaureat(moy)