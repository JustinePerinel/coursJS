// page pour 04-05-conclusion.html 

// les fonctions anonymes 
// on va créer une fonction anonyme, qui n'aura pas de nom

// function(){
//       alert('Alerte exécutée par une fonction anonyme !');
// }
//Celle-ci ne fonctionne pas !!!

// comment appeler la fonction si elle n'a pas de nom ?? Il faut la mettre dans une variable !

var alerte = function(){
      alert('Alerte exécutée par une fonction anonyme !');
}

// C'est une variable mais il faut mettre des parenthèses à la fin car on l'appelle comme une fonction
alerte(); // il faut absolument appeler la variable

// auto-invocation d'une fonction anonyme 

// function () {
//       alert('ALERTE !!! Seconde exécution d\'une fonction anonyme.')
//}

(function () {
      alert('ALERTE !!! Seconde exécution d\'une fonction anonyme.')
})();
// placer la fonction entre parenthèses, placer ensuite un autre couple de parenthèses et d'un point virgule. : (fonction(){bloc de code})();

// Les fonctions auto-invoquées (self-invoked functions en anglais) vont être des fonctions qui vont s'appeler elles-mêmes. 
//Pour créer une fonction auto-invoquée à partir d'une fonction, il va tout simplement falloir rajouter un couple de parenthèses autour de la fonction et un second après le code de la fonction.

//au déclenchement d'un événement 

// function () {
//       alert('Eh ! Tu as cliqué sur le paragragraphe ! Bravo !')
// }

let paragraphe1 = document.getElementById('p1');

paragraphe1.addEventListener('click', function () {
      alert('Eh ! Tu as bien cliqué sur le paragragraphe ! Bravo !')
});

let paragraphe2 = document.getElementById('p2');

paragraphe2.addEventListener('click', function () {
      alert('Encore une alerte ! Trop fort !')
});

//fonction récursive 

function decompte(t){
      if(t > 0){
            document.getElementById('p3').innerHTML += t + '<br>';
            return decompte(t-1);
      }else{
            return t;
      } // fin du if else
} // fin function

decompte(15);