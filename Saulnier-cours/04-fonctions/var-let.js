// JS pour var = portée élargie et let portée de bloc
//ATTENTION evitons de delcarer plusieurs variables dans différents espaces en utilisant un meme nom (içi pour la demonstrations que nous le faisons)
function porteeNew() {
let xLet = 1 ;
var yVar = 2 ;
if(true) {
    let xLet = 500;// let n'aura pas de portée au dela de ce bloc if
    var yVar = 100;// var aura une portée au dela de ce bloc if
    document.getElementById('p1').innerHTML = ' La variable let "xLet" dans le if = ' + xLet;
    document.getElementById('p2').innerHTML = ' La variable var "yVar" dans le if = ' + yVar;
}//fin de if (true)
    document.getElementById('p3').innerHTML = ' La varibale let "xLet" hors du if = ' + xLet;
    document.getElementById('p4').innerHTML = ' La variable var "yVar" hors du if = ' + yVar;
    // yVar affichera la dernière valeur déclarée car var a une portée élargie
    
}// fin de function

// 
porteeNew();