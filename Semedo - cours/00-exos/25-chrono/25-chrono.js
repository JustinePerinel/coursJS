// var secondes = 0;
// var minutes = 0;
// var duration = document.querySelector('.sablier');
// // console.log(duration, secondes, minutes);

// function updateTimer(){
    
//     document.getElementsByClassName('sablier')[0].innerHTML = 'Temps passé : ' + secondes + 'sec';
//     secondes++;
// }

// if(secondes == 60){
//     minutes = secondes / 60;
//     document.getElementsByClassName('sablier')[0].innerHTML = 'Temps passé : ' + minutes + 'min ' + secondes + 'sec';
// }
// // setTimeout(updateTimer, 1000); // le programme démarre 1 secondes après le chargement de la page
// setInterval(updateTimer, 1000); // le programme se répète toutes les secondes

let duration = 0;

const divMinute = document.getElementById('minute');
const divSeconde = document.getElementById('seconde');
setInterval(updateTimer, 1000);

function updateTimer(){
    const minute = Math.floor(duration / 60);
    const seconde = duration % 60;

    console0log('duration : ',)
}