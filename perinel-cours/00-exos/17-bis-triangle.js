//page js pour 17-bis-triangle.html

// for (i = 0; i <= 10; i++){
//     console.log(' '.repeat(i),'*'.repeat(i)) 
// }

let nbrLignes = 7;

for (ligne = 0; ligne < nbrLignes; ligne++) {
    let etoiles = '';
    let espaces = '';
    
    // 1ere for pour les espaces au début de la ligne
    // calcul : je place le nombre de colonnes auquel on soustrait le nombre d'étoiles
    for (let col = 0; col < nbrLignes - (ligne + 1); col++){
        espaces += ' ';
    }

    for (let col = 0; col < 2 * ligne + 1; col++){
        etoiles += '*';
    }
    console.log(espaces + etoiles);
}