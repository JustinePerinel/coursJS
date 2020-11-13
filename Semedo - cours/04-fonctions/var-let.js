// let portée de bloc // var portée élargie
// ATTENTION évitons de déclarer plusieurs variables dans différents espaces en utilisant un même nom (ici c'est pour la démonstration que nous le faisons)

function porteeNew(){
    let xLet = 1;
    var yVar = 2;
    if(true) {
        let xLet = 500; // let n'aura pas de portée au delà de ce bloc
        var yVar = 100; // var aura une portée au delà de ce bloc de code 'if"
        document.getElementById('p1').innerHTML = 'La variable "xLet" dans if = ' + xLet ;
        document.getElementById('p2').innerHTML = 'La variable "yVar" dans if = ' + yVar ;
        // console.log(xLet);
    } // fin du if true
    document.getElementById('p3').innerHTML = 'La variable "xLet" hors if = ' + xLet ;
    document.getElementById('p4').innerHTML = 'La variable "yVar" hors du if = ' + yVar ;
    // yVar affichera la dernière valeur (yVar = 100) car var a une portée élargie
} // fin de la fonction

porteeNew();
console.log(xLet);
