// fichier js poir 16-jeu.html

var disMoi = ''; //initialisation de la variable, avec une string vide , on y rentrera la réponse de l'utilisateur
var i = 0; // initialisation d'une variable pour la boucle

while(disMoi !== 'oui' && disMoi !== 'non'){ // tant qu'il n'a dit ni oui ni non
    disMoi = prompt('On joue à "Ni oui, ni non" ?');
    i++; // une boucle a besoin de nombres de tours
}
document.getElementById('p1').innerHTML = 'Tu as dis ' + disMoi + ', c\'est perdu ! ';

console.log(typeof disMoi, disMoi);