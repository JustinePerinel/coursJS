let duration = 0;

// const div = document.getElementsByClassName('sablier')[0];

const divMinute = document.getElementById("minute");
const divSeconde = document.getElementById("seconde");
setInterval(updateTimer, 1000);


function updateTimer() {
    // toute les 60 seconde + 1 minute 
    const minute = Math.floor(duration / 60);
    const seconde = duration % 60;

    console.log("duration: ", duration, "seconde: ", seconde);

    divMinute.innerText = minute < 10 ? "0" + minute : minute;
    divSeconde.innerText = seconde < 10 ? "0" + seconde : seconde;

    duration++;
}

//  // écriture en ternaire
//  if (minute < 10) {
//     divMinute.innerText = "0" + minute ;
// } else {
//     divMinute.innerText = minute ;
// }