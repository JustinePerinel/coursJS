// boucle for pour afficher dans la console les chiffres pairs et impairs

// for(var i = 1; i<= 10; i++){
//     if(i % 2 === 0){ // affichera les chiffres pairs dans la console
//         console.log(i + ' pair');
//     }
// }

// for(var i = 1; i<= 10; i++){
//     if(i % 2 === 0){ // affichera les chiffres pairs dans la console
//         console.log(i + ' pair');
//     }else{
//         console.log(i + ' impair');
//     }
// }

// avec prompt()

var unNombre = parseInt(prompt('For - Entrez un nombre :')); // parseInt on est sûr que c'est un entier avec Number() on risque d'avoir un décimal

var nombreMax = (unNombre + 10);

for(var i = unNombre ; i <= nombreMax; i++){
    if(i % 2 === 0){ 
        // console.log(i + ' pair');
        document.getElementById('p1').innerHTML += i + ' pair <br>';
    }else{
        // console.log(i + ' impair');
        document.getElementById('p1').innerHTML += i + ' impair <br>';
    }
}

var unNombre2 = parseInt(prompt('While - Entrez un second nombre :'));
var nombreMax2 = (unNombre2 + 10);

while(unNombre2 <= nombreMax2){
    if(unNombre2 % 2 === 0){ 
        document.getElementById('p2').innerHTML += unNombre2 + ' pair <br>';
    }else{
        document.getElementById('p2').innerHTML += unNombre2 + ' impair <br>';
    }
    unNombre2++;
}