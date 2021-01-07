//pour générer un nombre aléatoire
// var nbrAleatoire = Math.floor(Math.random() * 101) // Math.random génère un nombre entre 0 et 1 mais Math.floor permet de choisir le nombre max

// 1 - le nombre
var nbrAleatoire = Math.random(); 
console.log(typeof nbrAleatoire, nbrAleatoire);

// 2 - on multiplie le nombre par 100
var nombreX100 = nbrAleatoire * 100;
console.log(nombreX100);

// 3- arrondi 
let nombreArrondi = Math.floor(nombreX100);
console.log(nombreArrondi);

// 2 et 3 autre solution pour arrondir le nombre
// nombreX100 = parseInt(nbrAleatoire * 100);
// console.log(nombreX100); 

// alert('Bienvenue !');

// CA MAAAAAAAAARCHE !!!!!! ------------------------------------------------

// var nbrAleatoire = Math.floor(Math.random() * 101);
// console.log(typeof nbrAleatoire, nbrAleatoire);

// var nombre;
// // console.log(nombre);

// for( var essai = 1; essai <= 6; essai++){

//     nombre = Number(prompt('Essai n°' + essai + ': Trouvez le nombre magique entre 1 et 100, vous avez 6 essais !'));

//     if((nombre < 1) || (nombre > 100) || (isNaN(nombre))){ 
//         alert('Erreur : vous devez entrer un nombre entre 1 et 100');
//     }else if(nombre < nbrAleatoire){
//         alert('Votre saisie est inférieure au nombre magique');
//     }else if(nombre > nbrAleatoire){
//         alert('Votre saisie est supérieure au nombre magique !');
//     }else{
//         // alert('Gagné, le nombre magique est: ' + nbrAleatoire);
//         document.getElementById('p1').innerHTML = 'Gagné, le nombre magique est : ' + nbrAleatoire;
//         break;
//     }
//     document.getElementById('p1').innerHTML = 'Perdu ! Le nombre magique est: ' + nbrAleatoire;
// } 

// Methode Patrick ------------------------

for(var i = 1; i<=6; i++){
    var choixUtilisateur = parseInt(prompt('Le jeu est simple, je pense à un nombre entre 0 et 100. A ton avis, quel est ce nombre ? Tu as droit à 6 essais !')); //parsinInt nous assure que le nombre saisi est entier (si on saisi 92.3, il considère 92)
        if(!isNaN(choixUtilisateur)){ // nous assure que la saisie est un nombre
            if(nombreArrondi === choixUtilisateur){ // le nombre est égal au nombre au hasard
                alert('Bien joué');
                i=6; // la boucle s'arrête
            }else{
                if(nombreArrondi < choixUtilisateur){
                    alert('Le nombre est plus petit ; essai n°' + i + ' /6');
                }else{
                    alert('Le nombre est plus grand ; essai n°' + i + ' /6');
                }
            }// fin if plus grand ou plus petit

        }else{
            alert('Il faut entrer un nombre !!');
        }// fin if principal
    
} // fin for

alert('La bonne réponse était ' + nombreArrondi);

// Methode Audrey ---------------------------

// var solution = Math.floor(Math.random() * 100) + 1 ; // Je génère un nombre aléatoire entre 1 et 100
// console.log("(La solution est " + solution + ")");
// for (var i = 1; i <= 6; i++) { // je lance la boucle, où i <=  nombre d'essai voulu maximum
//     var essai = parseInt(prompt("Tu as 6 essais pour trouver le nombre mystère, choisis un nombre entre 1 et 100 :"));
//     if (essai === solution) {
//         console.log("Vous avez trouvé en " + i + " essai(s)");
//         alert("Bravo, Vous avez trouvé en " + i + " essai(s)");
//         break; // si la réponse est trouvé, la boucle s'arrête et la console l'affiche, en précisant le nombre d'essai nécessaires.
//         // OU i = 6 pour remplacer le break;
//     } 
//     if (essai < solution){ // comparent la valeur "essai" à la valeur "solution"
//         // console.log(essai + " est trop petit");
//         alert(essai + ' est trop petit... Vous en êtes à ' + i + ' sur 6 tentatives!!');
//     } 
//     if (essai > solution) {
//         // console.log(essai + " est trop grand");
//         alert(essai + ' est trop grand... Vous en êtes à ' + i + ' sur 6 tentatives!!');
//     } 
//     if (i === 6){
//         console.log("Vous avez perdu ! Le nombre était : " + solution);
//         alert('Vous avez perdu, le nombre était ' + solution ); // si la solution n'est pas trouvée, la console l'affiche en donnant la solution
//     }
//     if (isNaN(essai)) { //si ce n'est pas un nombre
//         alert('Votre proposition n\'est pas un nombre !! Vous en êtes à ' + i + ' sur 6 tentatives!!');
//     } console.log(i);   
// } // fin boucle for












