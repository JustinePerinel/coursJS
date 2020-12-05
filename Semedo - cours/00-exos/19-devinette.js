//pour générer un nombre aléatoire
// var nbrAleatoire = Math.floor(Math.random() * 101) // Math.random génère un nombre entre 0 et 1 mais Math.floor permet de choisir le nombre max

// 1 - le nombre
// var nbrAleatoire = Math.random(); 
// console.log(typeof nbrAleatoire, nbrAleatoire);

// 2 - on multiplie le nombre par 100
// var nombreX100 = nbrAleatoire * 100;
// console.log(nombreX100);

// // 3- arrondi 
// let nombreArrondi = Math.floor(nombreX100);
// console.log(nombreArrondi);

// 2 et 3 autre solution pour arrondir le nombre
// nombreX100 = parseInt(nbrAleatoire * 100);
// console.log(nombreX100); 

// alert('Bienvenue !');

var nbrAleatoire = Math.floor(Math.random() * 101);
console.log(typeof nbrAleatoire, nbrAleatoire);

var nombre;
// console.log(nombre);

for( var essai = 1; essai <= 6; essai++){

    nombre = Number(prompt('Essai n°' + essai + ': Trouvez le nombre magique entre 1 et 100, vous avez 6 essais !'));

    if((nombre < 1) || (nombre > 100) || (isNaN(nombre))){ 
        alert('Erreur : vous devez entrer un nombre entre 1 et 100');
    }else if(nombre < nbrAleatoire){
        alert('Votre saisie est inférieure au nombre magique');
    }else if(nombre > nbrAleatoire){
        alert('Votre saisie est supérieure au nombre magique !');
    }else{
        // alert('Gagné, le nombre magique est: ' + nbrAleatoire);
        document.getElementById('p1').innerHTML = 'Gagné, le nombre magique est : ' + nbrAleatoire;
        break;
    }
    document.getElementById('p1').innerHTML = 'Perdu ! Le nombre magique est: ' + nbrAleatoire;
} 











