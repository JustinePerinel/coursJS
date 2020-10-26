// .js pour les différents types de données JS 

                                // 1. STRING
let presentation = "Je m'appelle Michaël";
let age = 25;
let age2 = 60;
let codePostal = 92150

console.log(typeof presentation);


// on récupère un élement de la page dont l'ID est p1 
// innerHTML permet de remplacer complètement le contenu d'un élément identifié par son élément ID 
// puis on concatène une string et le résultat de la fonction typeof()
// le résultat s'affiche dans la page
document.getElementById('p1').innerHTML = 'Type de données pour la variable présentation : ' + typeof presentation; 

document.getElementById('p2').innerHTML = 'Type de données pour la variable age : ' + typeof age; 

document.getElementById('p3').innerHTML = 'Type de données pour la variable code postale : ' + typeof codePostal; 


// 1ere solution avec des guillemets différentes
let phrase = 'Mon film préféré est "20 0000 lieues sous les mers"';

// 2eme solution avec les échappements
// let phrase = "Mon film préféré est \"20 000 lieues sous les mers\"";

console.log(phrase);


                               // 2. NUMBER 

let x = 10;
let y = -20000;
let z = 3.14;

// on peut mettre plusieurs arguments dans la console.log( )
console.log(typeof x, y, z)

                               // 3. BOOLEAN

// test 1
let test = 8 > 4;

// test 2
// Mettre == (= *2) pour calcul 
let test2 = 12 + 25 == 46;

// test 3 
let test3 = 3250 * 65 == 211250;

console.log(test, test2, test3);


                               // NULL ET UNDEFINED
let arbre;

console.log(typeof arbre)


let nul = null;
// ind = indéfinie
let ind;

document.getElementById('p4').innerHTML = 'Type de données pour la variable null : ' + typeof nul;

document.getElementById('p5').innerHTML = 'Type de données pour la variable ind : ' + typeof ind;