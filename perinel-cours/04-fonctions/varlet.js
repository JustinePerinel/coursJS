// let portée de bloc 
// var portée élargie 

function porteeNew(){
      let xlet = 1;
      var yvar = 2;
            if(true){
                  let xlet = 500;
                  var yvar = 100;
                  document.getElementById('p1').innerHTML = 'La variable let "xlet" dans if = '+xlet;
                  document.getElementById('p2').innerHTML = 'La variable var "yvar" dans if = '+yvar;
                  //console.log(xlet);
            } // fin du if
      document.getElementById('p3').innerHTML = 'La variable let "xlet" hors du if = '+xlet;
      document.getElementById('p4').innerHTML = 'La variable var "yvar" hors du if = '+yvar;
      //yvar affichera la dernière valeur déclarée car var a une portée élargie
      
console.log(yvar)
} // fin fonction

porteeNew();