// JS pour l'exo valeurs finales

var nb1 = Number(prompt("Entrez nb1 : 7"));
var nb2 = Number(prompt("Entrez nb2: 7"));
var nb3 = Number(prompt("Entrez nb3: 7"));

// si tous les nbr valent 7
if (nb1 > nb2) { 
    nb1 = nb3 * 2; 
} else { 
    nb1++;  
    if (nb2>nb3){
      nb1 = nb1 + nb3 *3; 
      } else {
          nb1 = 0; 
          nb3 = nb3 * 2 + nb2;
  }
}

document.getElementById('n1').innerHTML = nb1;
document.getElementById('n2').innerHTML = nb2;
document.getElementById('n3').innerHTML = nb3;

var nb1 = Number(prompt("Entrez nb1 : 4"));
var nb2 = Number(prompt("Entrez nb2: 4"));
var nb3 = Number(prompt("Entrez nb3: 4"));

// si tous les nombres valent 4 entré dans le prompt
if (nb1 > nb2) { 
    nb1 = nb3 * 2; 
} else { 
    nb1++;  
    if (nb2>nb3){
      nb1 = nb1 + nb3 *3; 
      } else {
          nb1 = 0; 
          nb3 = nb3 * 2 + nb2;
  }
}

document.getElementById('n4').innerHTML = nb1;
document.getElementById('n5').innerHTML = nb2;
document.getElementById('n6').innerHTML = nb3;

var nb1 = Number(prompt("Entrez nb1 : 4"));
var nb2 = Number(prompt("Entrez nb2: 3"));
var nb3 = Number(prompt("Entrez nb3: 2"));

// Si nb1 = 4, nb2 = 3, nb3=2
if (nb1 > nb2) { 
    nb1 = nb3 * 2; 
} else { 
    nb1++;  
    if (nb2>nb3){
      nb1 = nb1 + nb3 *3; 
      } else {
          nb1 = 0; 
          nb3 = nb3 * 2 + nb2;
  }
}

document.getElementById('n7').innerHTML = nb1;
document.getElementById('n8').innerHTML = nb2;
document.getElementById('n9').innerHTML = nb3;

var nb1 = Number(prompt("Entrez nb1 : 2"));
var nb2 = Number(prompt("Entrez nb2: 4"));
var nb3 = Number(prompt("Entrez nb3: 0"));

// Si nb1 = 2, nb2=4, nb3=0
if (nb1 > nb2) { 
    nb1 = nb3 * 2; 
} else { 
    nb1++;  
    if (nb2>nb3){
      nb1 = nb1 + nb3 *3; 
      } else {
          nb1 = 0; 
          nb3 = nb3 * 2 + nb2;
  }
}

document.getElementById('n10').innerHTML = nb1;
document.getElementById('n11').innerHTML = nb2;
document.getElementById('n12').innerHTML = nb3;

document.getElementById('p1').innerHTML = 'le nombre 1 vaut au final : ' + nb1
document.getElementById('p2').innerHTML = 'le nombre 2 vaut au final : ' + nb2
document.getElementById('p3').innerHTML = 'le nombre 3 vaut au final : ' + nb3
