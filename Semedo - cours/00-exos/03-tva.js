var prixHT = prompt('Prix HT :');
var prixTTC = prixHT * 1.20;

// console.log(prixHT, prixTTC);

document.getElementById('p1').innerHTML = 'Résultat : Prix ' + prixHT + '€ HT pour un total de ' + prixTTC + '€ TTC.';