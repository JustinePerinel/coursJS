// JS pour exo 17 - triangle
console.log('avec une boucle for');

let diese = '';

for (let i = 1 ; i <= 7 ; i++) {
    diese += 'o';
    console.log(diese);
    }

// autre solution boucle for

for(i=0; i <=7; i++){
    console.log("#".repeat(i));
}


// avec une boucle while 

    console.log('avec une boucle while');

    let diese2 = '';
    let w1 = 1;

    while ( w1 <= 10 ){ 
    w1++ ; //incrémente la valeur de la variable de départ
    diese2 += '#';
    console.log(diese2);
}

