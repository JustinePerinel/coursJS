// script pour exo 19 devinette

alert('Bienvenue !');

// on doit trouver un nombre au hasard que l'utilisateur doit trouver
// 1- le nombre
// let nbrAuHasard = Math.random(); //nombre décimal entre 0 et 1
// console.log(typeof nbrAuHasard, nbrAuHasard);
// // 2 - on multiplie le nombre trouvé par 100
// let nbrX100 = nbrAuHasard*100;
// console.log(nbrX100);
// // 3- on arrondie le nombre
// let nbrArrondi = Math.floor(nbrX100);
// console.log(nbrArrondi);

// étape 2 et 3 // autre solution pour arrondir le nombre
// let nbrX100 = parseInt(nbrAuHasard*100);
// console.log(nbrX100);
// var NbEssais = 0;
// function Devine() {
// var choisi = alert.form1.devine1.value;
// NbEssais++;
// status = "Nombre d'essais : " + NbEssais;
// if (choisi < num) {
//     window.alert = "Non, le nombre est plus grand.";}
// if (choisi > num){
//     window.alert = "Non, le nombre est plus petit.";}
// if (choisi == num) {
//     window.alert("Correct ! Vous avez trouvé en " + NbEssais + "essais.");
//     location.reload();
//     }
// if (NbEssais == 6) {
//     window.alert("Désolé, c'est fini. Le nombre correct était : " + num);
//     location.reload();
//     }
// }





// var solution = Math.floor(Math.random() * 100) + 1;
// console.log(solution);

// var choix = parseInt(prompt("Entrez un nombre :"));
// var tentative = 1;

// while((choix !== solution) && (tentative < 6)){
//     if (choix >= solution) {
//     window.prompt(choix + " est trop grand");
//    } else if (choix <= solution){
//     window.prompt(choix + " est trop petit");}
//    tentative++; 
//     // var choix = Number(prompt("Entrez un nombre:"));
// }
 
// if(choix === solution){
// window.prompt("Bravo ! La solution est " + solution);
// }else{
// window.prompt("Vous avez perdu!");}




/*
Activité : jeu de devinette
*/
 
// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
//COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO
 
// console.log("Bienvenue dans ce jeu de devinette !");
 
// //Cette ligne génère aléatoirement un nombre entre et 
// var solution = Math.floor(Math.random() * 100) + 1;
// console.log(solution);
 
// var nombre = Number(prompt("Entrez un nombre entre 0 et 100"));
// var tentative = 1;
 
// while((nombre !== solution) && (tentative < 6)) {
//     if (nombre > solution) {
//         console.info(nombre + " est trop grand");
//         prompt(nombre + " est trop grand, entrez un nombre entre 0 et 100");
//         nombre = Number(prompt("Entrez un nombre"));}
//     else if(nombre < solution) {
//         console.info(nombre + " est trop petit");
//         prompt(nombre + " est trop petit, entrez un nombre entre 0 et 100");
//         nombre = Number(prompt("Entrez un nombre"));}
    
//     // nombre = Number(prompt("Entrez un nombre"));
//     tentative++;
// }
 
// if (nombre === solution){
//     console.info("Bravo ! La  solution est " + solution);
//     prompt("Bravo ! La  solution est " + solution)}
// else {
//     console.info("Vous avez perdu");
//     prompt("Vous avez perdu");

// }

console.log("Bienvenue dans ce jeu de devinette !");

var solution = Math.floor(Math.random() * 100); // Je génère un nombre aléatoire entre 1 et 100

console.log("(La solution est " + solution + ")");


for (var i = 1; i <= 6; i++) { // je lance la boucle, où i <=  nombre d'essai voulu maximum
    var essai = parseInt(prompt("Tu as 6 essais pour trouver le nombre mystère, choisis un nombre entre 1 et 100 :"));
                              
    if (essai === solution) {
        console.log("Vous avez trouvé en " + i + " essai(s)");
        alert("Bravo, Vous avez trouvé en " + i + " essai(s)");
        break; // si la réponse est trouvé, la boucle s'arrête et la console l'affiche, en précisant le nombre d'essai nécessaires.
    } 
    if (essai < solution){ // comparent la valeur "essai" à la valeur "solution"
        // console.log(essai + " est trop petit");
        alert(essai + ' est trop petit... Vous en êtes à ' + i + ' sur 6 tentatives!!')
    } 
    if (essai > solution) {
        // console.log(essai + " est trop grand");
        alert(essai + ' est trop grand... Vous en êtes à ' + i + ' sur 6 tentatives!!')
    } 
    if (i === 6){
        console.log("Vous avez perdu ! Le nombre était : " + solution);
        alert('Vous avez perdu, le nombre était ' + solution ); // si la solution n'est pas trouvée, la console l'affiche en donnant la solution
    }
    if (isNaN(essai)) { //si ce n'est pas un nombre
        alert('Votre proposition n\'est pas un nombre !! Vous en êtes à ' + i + ' sur 6 tentatives!!');
    } console.log(i);   
} // fin boucle for

