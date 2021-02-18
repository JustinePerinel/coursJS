// page js pour la page 01-bonjour.js 

var nom = prompt('Bonjour, quel est votre nom de famille ?');

var prenom = prompt('Et votre prénom ?');

document.querySelector('#p1').innerHTML = 'Bonjour, tu t\'appelles ' + nom + ', '+prenom+' '+nom+ '. Ravie de te rencontrer !';