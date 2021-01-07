// page js pour 11-heuresuivante.html

    var heure = parseInt(prompt('Entrez l\'heure !'));
    var minutes = parseInt(prompt('Et les minutes ?'));
    var secondes = parseInt(prompt('Et les secondes svp ?'));
    console.log(heure, minutes, secondes)

    // if (heure <= 0 || heure > 23 || minutes < 0 || minutes > 60 || secondes <= 0 || secondes > 60){
    //     alert('Attention, une journée fait 24 heures et il n\'y a que 60 minutes dans une heure et 60 secondes dans une minutes!');

    // }else if(isNaN(heure) || isNaN(minutes) || isNaN(secondes)){
    //     document.getElementById('p1').innerHTML = 'Heure incorrecte';  
    // }else{
    //     if (heure == 23 && minutes == 59 && secondes == 59){
    //         document.getElementById('p1').innerHTML = 'Dans une seconde, il sera 0h 0min 0sec. ';

    //     }else if (secondes == 59 && minutes == 59) {
    //         document.getElementById('p1').innerHTML = 'Dans une seconde, il sera ' + (heure++) +'h 00min 00sec. ';
    //         if (heure < 10 && minutes < 10) {
    //             heure = '0'+heure;
    //             minutes = '0'+minutes;
    //         } 

    //     }else if(secondes == 59){
    //         document.getElementById('p1').innerHTML = 'Dans une seconde, il sera ' + heure +'h '+ (minutes++) +'min '+ '0sec. '; 
    //         if (heure < 10 && minutes < 10) {
    //             heure = '0'+heure;
    //             minutes = '0'+minutes;
    //         }

    //     }else if(minutes == 59){
    //         document.getElementById('p1').innerHTML = 'Dans une seconde, il sera ' + heure +'h '+ minutes+ 'min '+ secondes +'sec. '; 
    //         if (heure < 10 && minutes < 10) {
    //             heure = '0'+heure;
    //             minutes = '0'+minutes;
    //         }

    //     }else {
    //         document.getElementById('p1').innerHTML = 'Dans une seconde, il sera '+heure+'h ' + minutes +'min ' + (secondes++) +'sec. '; 
    //         if (heure < 10 && minutes < 10) {
    //             heure = '0'+heure;
    //             minutes = '0'+minutes;
    //         }
    //     }
    // } // fin du if else 
    
// correction Patrick


if((heure >= 0) && (heure <= 23) && (minutes >= 0) && (minutes <= 59) && (secondes >= 0) && (secondes <= 59)){
    secondes++;
    if (secondes === 60){
        secondes = 0;
        minutes++;
        if (minutes === 60){
            minutes = 0;
            heure++
            if (heure === 24){
                heure = 0;
            }
        }
    }
    console.log(heure, minutes, secondes)
    document.getElementById('p2').innerHTML = 'Dans une seconde, il sera ' + heure + 'h '+ minutes + 'min '+secondes+'sec.'
}else {
    document.getElementById('p2').innerHTML = 'Heure incorrecte'
}