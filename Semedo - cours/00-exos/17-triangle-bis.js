let nbrLigne = 7;

for(let ligne = 0; ligne < nbrLigne; ligne++){
    let etoiles = ''; // les variables sont vides
    let espaces = '';

    // 1er for pour les espaces au début de la ligne
    // sur la 1ère ligne (qui aura une étoile), on place 6 espaces à gauche de l'étoile. 1ère opération = le nbr de lignes - l'étoile placée
    for(let col = 0; col < nbrLigne - (ligne + 1); col++){
        espaces += ' ';
    }

    // 2nd for pour les étoiles
    for(let col = 0; col < 2 * ligne + 1; col++){
        etoiles += '*';
    }

    console.log(espaces + etoiles);
}