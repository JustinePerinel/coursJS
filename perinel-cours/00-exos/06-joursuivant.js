// page pour joursuivant.html

// avec la méthode if else if else

var jour = prompt('Quel jour sommes-nous aujourd\'hui ?');

if( jour == 'lundi'){
    document.getElementById('p1').innerHTML = 'Aujourd\'hui nous sommes ' + jour + ', demain nous serons donc mardi.';
} else if( jour == 'mardi'){
    document.getElementById('p1').innerHTML = 'Aujourd\'hui nous sommes ' + jour + ', demain nous serons donc mercredi.';
}else if( jour == 'mercredi'){
    document.getElementById('p1').innerHTML = 'Aujourd\'hui nous sommes ' + jour + ', demain nous serons donc jeudi.';
}else if( jour == 'jeudi'){
    document.getElementById('p1').innerHTML = 'Aujourd\'hui nous sommes ' + jour + ', demain nous serons donc vendredi.';
}else if( jour == 'vendredi'){
    document.getElementById('p1').innerHTML = 'Aujourd\'hui nous sommes ' + jour + ', demain nous serons donc samedi.';
}else if( jour == 'samedi'){
    document.getElementById('p1').innerHTML = 'Aujourd\'hui nous sommes ' + jour + ', demain nous serons donc dimanche.';
}else if( jour == 'dimanche'){
    document.getElementById('p1').innerHTML = 'Aujourd\'hui nous sommes ' + jour + ', demain nous serons donc lundi.';
}else{
    document.getElementById('p1').innerHTML = 'Ceci n\'est pas un jour de la semaine.';
}

// avec la méthode switch

var jour2 = prompt('Quel jour sommes-nous aujourd\'hui ?');

    switch(jour2){ 
    case 'lundi': 
        document.getElementById('p2').innerHTML = 'Aujourd\'hui nous sommes ' + jour2 + ', demain nous serons donc mardi.'; 
        break;  
    case 'mardi': 
        document.getElementById('p2').innerHTML = 'Aujourd\'hui nous sommes ' + jour + ', demain nous serons donc mercredi.';
        break; 
    case 'mercredi': 
        document.getElementById('p2').innerHTML = 'Aujourd\'hui nous sommes ' + jour + ', demain nous serons donc jeudi.';
        break; 
    case 'jeudi': 
        document.getElementById('p2').innerHTML = 'Aujourd\'hui nous sommes ' + jour + ', demain nous serons donc vendredi.';
        break; 
    case 'vendredi': 
        document.getElementById('p2').innerHTML = 'Aujourd\'hui nous sommes ' + jour + ', demain nous serons donc samedi.'; 
        break; 
    case 'samedi': 
        document.getElementById('p2').innerHTML = 'Aujourd\'hui nous sommes ' + jour + ', demain nous serons donc dimanche.';
        break; 
    case 'dimanche': 
        document.getElementById('p2').innerHTML = 'Aujourd\'hui nous sommes ' + jour + ', demain nous serons donc lundi.';
        break; 
    default: 
        document.getElementById('p2').innerHTML =  'Ceci n\'est pas un jour de la semaine.';
        }