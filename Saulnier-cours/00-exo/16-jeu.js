// JS pour exo ni oui ni non


var disMoi =''; // initialisation de la varirable avec un string vide, on y entrera la réponse de l'utilisateur
console.log(typeof disMoi, disMoi);

var i = 1;

while ( (disMoi !== 'oui') && (disMoi !== 'non') ){
    disMoi = prompt('Tu joues à ni oui ni non ?');
    i++; //pour les passages multiples de la boucle
 }

 document.getElementById('p1').innerHTML = 'le jeu est fini ! Tu as perdu, tu as répondu ' + disMoi;