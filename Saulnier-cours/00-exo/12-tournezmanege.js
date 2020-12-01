// JS pour exo tournez manège

// Boucle WHILE

let w1 = 1;

while ( w1 < 11 ){ 
    document.getElementById('p1').innerHTML += ' Avec while ; c\'est le tour n° ' + w1 + '<br>';
    w1++ ; //incrémente la valeur de la variable de départ
}

//  Boucle FOR

for (let i =1 ; i < 11 ; i++) {
    document.getElementById('p2').innerHTML += 'Avec for ; c\'est le tour n° ' + i + '<br>';
}

//  l'utilisateur va choisir le tour, en fonction while et for
// prompt en while
var nbrTour = Number(prompt('Combien de tours voulez-vous?'));

let w3 = 1;

while ( w3 <= nbrTour ) {
    document.getElementById('p3').innerHTML += ' C\'est le tour n° ' + w3 + '<br>';
    w3++;
}

// prompt en for
var nbrTour2 = Number(prompt('Combien de tours voulez-vous?'));

for (let w3 =1 ; w3 <= nbrTour2  ; w3++) {
    document.getElementById('p4').innerHTML += 'C\'est le tour n° ' + w3 + '<br>';
}
