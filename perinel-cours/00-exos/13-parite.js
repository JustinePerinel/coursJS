// page js pour 13-parite.html

//Exo 1
for (var i = 1; i <= 10; i++){
    if(i % 2 === 0){
        console.log(i, 'est pair');
        document.getElementById('p1').innerHTML += i + ' est pair. <br>'
    }else{
        console.log(i, 'est impair')
        document.getElementById('p1').innerHTML += i + ' est impair. <br>'
    }
}


// Exo 2
var nbUser = parseInt(prompt('Entrez un nombre entier : ')); // demande son nombre à l'utilisateur
var nbMax = (nbUser + 10) // s'assure qu'on aille pas au delà de +10

for (var i = nbUser; i < nbMax ; i++){ // initialisation de la variable
    if(i % 2 === 0){
        document.getElementById('p2').innerHTML += i + ' est pair. <br>'
    }else{
        document.getElementById('p2').innerHTML += i + ' est impair. <br>'
    }
}

var nbUser2 = parseInt(prompt('Entrez un nombre entier : '));
var nbMax2 = (nbUser2 + 10) 

while(nbUser2 < nbMax2){ 
    if(nbUser2 % 2 === 0){
        document.getElementById('p3').innerHTML += nbUser2 + ' est pair. <br>'
    }else{
        document.getElementById('p3').innerHTML += nbUser2 + ' est impair. <br>'
    }
    nbUser2++;
} 