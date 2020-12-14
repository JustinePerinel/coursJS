// JS pour exo 17 - triangle
console.log('avec une boucle for');

// let diese = '';

// for (let ligne = 1 ; ligne <= 7 ; i++) {
//     diese += 'o';
//     console.log(diese);
//     }

// // autre solution boucle for

// for(i=0; ligne <=7; i++){
//     // La méthode repeat() construit et renvoie une nouvelle chaine de caractères quligne contient le nombre de copie demandée de la chaine de caractères sur laquelle la méthode a été appelée, concaténées les unes aux autres.
//     console.log("#".repeat(i));
// }

let nbrLigne = 7;

for (let ligne = 0; ligne < nbrLigne; ligne++) {
    let etoiles = '';
    let espaces = '';

    // 1er for pour les espaces au début de la ligne
    // sur la 1ère (quligne aura une étoile) je place 6 espaces à gauche de l'étoile 1ère opération le nbr de lignes - l'étoile placée
    for(let col = 0; col < nbrLigne - ( ligne + 1 ); col++){
        espaces += ' ';
    }

    // 2nd for pour les étoiles
    for(let col = 0; col < 2 * ligne + 1; col++) {
        etoiles += '*';
    }
    console.log(espaces + etoiles);
}