// exo en while
// alert('coucou');

// var manege1 = 1;
// // console.log(manege1);

// while(manege1 <= 10){ // le bloc de code s'exécute tant que les conditions sont remplies
//     document.getElementById('p1').innerHTML += 'Avec while; c\'est le tour n° ' + manege1 + '.<br>';
//     manege1++; // on incrémente la valeur de départ
// }

// methode avec variable à 0 -------
//1 - avec while
var w1 = 0;
while(w1 < 10){ // inférieur à 10 sinon l'incrémentation se fera en amont et aura 11 lignes au lieu de 10
    w1++;
    document.getElementById('p1').innerHTML += 'While : C\'est le tour de manège n°'+w1+'.<br>';
} 

// avec for ------

for(var i = 1; i <= 10; i++){ // ici on initialise i à 1; i prend la valeur 1, boucle une première fois puis incrémente (jusqu'à 10)
    document.getElementById('p2').innerHTML += 'Avec for; c\'est le tour n° ' + i + '.<br>';
}

// exo 2 avec prompt ------
// while

var nb1 = 0;

var manege1 = Number(prompt('While : Combien voulez-vous faire de tours de manège ?'));

while(nb1 < manege1){ 
    nb1++; 
    document.getElementById('p3').innerHTML += 'Avec while; c\'est le tour n° ' + nb1 + '.<br>';
}

// for

var manege2 = Number(prompt('For : Combien voulez-vous faire de tours de manège ?'));

for(var nb2 = 1; nb2 <= manege2; nb2++){
    document.getElementById('p4').innerHTML += 'Avec for; c\'est le tour n° ' + nb2 + '.<br>';
}
