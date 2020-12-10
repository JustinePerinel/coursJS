// JS pour exo 17 - triangle
console.log('avec une boucle for');

let diese = '';

for (let i = 1 ; i <= 7 ; i++) {
    diese += 'o';
    console.log(diese);
    }

// autre solution boucle for

for(i=0; i <=7; i++){
    // La méthode repeat() construit et renvoie une nouvelle chaine de caractères qui contient le nombre de copie demandée de la chaine de caractères sur laquelle la méthode a été appelée, concaténées les unes aux autres.
    console.log("#".repeat(i));
}


// avec une boucle while 

    console.log('avec une boucle while');

    let diese2 = '';
    let w1 = 1;

// 1ere méthode

//     while ( w1 <= 10 ){ 
//     diese2 += '#';
//     console.log(diese2);
//     w1++ ; //incrémente la valeur de la variable de départ
// }

// fonctionne aussi commme ça

    while ( w1 <= 10 ){ 
    // diese2 += '#';
    diese2 = diese2 + '0';
    console.log(diese2);
    w1++ ; //incrémente la valeur de la variable de départ
}



