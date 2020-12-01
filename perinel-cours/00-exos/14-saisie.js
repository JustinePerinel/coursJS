// page js pour l'exercice 14-saisie.html
alert('coucou')
var i = 0; // valeur initiale qui va nous permettre de rentrer dans la boucle 

while (i < 50 || i > 100){ // tous les nombres qui ne sont pas compris entre 50 et 100
    var i = Number(prompt('Saisissez un nombre compris entre 50 et 100'));
}
document.getElementById('p1').innerHTML = 'Le nombre récupéré est : '+ i ;
console.log(i);