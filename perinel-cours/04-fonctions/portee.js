// la feuille pour la page 04-02-portee.js 

// deux variables globales
let x = 5;
var y = 10;

function portee1(){ // 1ère fonction avec des variables globales
      document.getElementById('p1').innerHTML = 'Depuis portee1() x = '+ x +' et y = ' + y ;
}
portee1();

function portee2(){ // 2ème fonction avec des variables locales
      let a = 1;
      var b = 2; 
      document.getElementById('p2').innerHTML = 'Depuis portee2() a = '+ a +' et b = ' + b ;
}

portee2();

function portee3(){ // 3ème fonction avec des variables locales qui portent le même ,nom que les variables globales (l. 4&5). Bien qu'elles portent le même nom que les globales, ce sont deux entités différentes.
      let x = 20; // la fonction va donc utiliser les variables locales
      var y = 40;
      document.getElementById('p3').innerHTML = 'Depuis portee3() x = '+ x +' et y = ' + y ;
}

portee3();

// On tente d'afficher les globales
document.getElementById('p4').innerHTML = 'Ceci n\'est pas dans une fonction : depuis l\'espace global x = '+ x +' et y = ' + y ;

// On tente d'afficher les locales
// document.getElementById('p5').innerHTML = 'Depuis l\'espace global a = '+ a +' et b = ' + b ;
// impossible car les variables sélectionnées se trouvent dans une fonction et ont donc une portée locale
// l'erreur générée par cette ligne lorsqu'elle n'est pas commentée est normale. 
