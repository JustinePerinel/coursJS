// Valeurs de retour

function division(a,b){
      if(b == 0){
            return  'Division par 0 impossible !';
      }else{
            return 'Lorsque '+a+' est divisé pas '+b+' le résultat est '+a/b;
            alert('Ce bloc ne s\'exécute pas !'); //après le return plus rien ne se passe
      } //fin du if else
}// fin de la fonction division()
console.log(division(5,2));


let nbr1 = prompt('Quel est votre premier chiffre ?');
let nbr2 = prompt('Quel est votre second chiffre ?');

let resultatDivision = division(nbr1,nbr2);
document.getElementById('p1').innerHTML = 'Lorsque '+nbr1+' est divisé pas '+nbr2+' le résultat est '+nbr1/nbr2+'.';