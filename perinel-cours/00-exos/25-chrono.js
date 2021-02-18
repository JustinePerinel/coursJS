var duration = 0;
var sablier = document.querySelector('.sablier');
console.log(duration, sablier);

function updateTimer() {
    duration++;
    console.log(duration);

    var secondes = Math.floor(duration % 60);

    if (secondes < 10){
        secondes = '0'+secondes;
    }
    // sablier.innerHTML = secondes < 10 ? "0" + secondes : secondes;

    var minutes = Math.floor(duration / 60);
    
    if (minutes < 10){
        minutes = '0'+minutes;
    }
    // sablier.innerText = minutes < 10 ? "0" + minutes : minutes;


    sablier.innerText = minutes +' : ' + secondes;
}



 setInterval(updateTimer, 1000); //On attend 5 secondes avant d'exécuter la fonction

