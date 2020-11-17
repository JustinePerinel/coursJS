var prixHT = prompt('Quel est le prix de ce que vous avez acheté, hors taxes ?');

var prixTTC = prixHT * 1.20;

document.getElementById('p1').innerHTML = 'Le prix de votre objet hors taxes est de ' + prixHT + '€. Avec les taxes, le prix sera de ' + prixTTC + '€.';

