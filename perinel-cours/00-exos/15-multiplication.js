// page js pour la page 15-multipkication.html

//méthode 1
var nb1 = Number(prompt('Ici, tapez un nombre :'));

for(var a = 1; a <= 10; a++){
    document.getElementById('p1').innerHTML += nb1 + ' x ' + a + ' = ' + nb1*a + '<br>';
}

//méthode 2
var nb2 = Number(prompt('Choisis un deuxième nombre : '));
console.log(typeof nb2, nb2);

for(var i = 1; i <= 10; i++){
    var resultat = nb2*i; // opération
    document.getElementById('p2').innerHTML += nb2 + ' x ' + i + ' = ' + resultat + '<br>'; // à chaque passage; le nb2 * i = resultat
}