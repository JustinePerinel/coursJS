// page js pour la page 03-07-ternaire.html

let x= 15; y = -20; 

/* 
MÉTHODE TERNAIRE
 */

document.getElementById('p1').innerHTML =
x >= 10 ? 'x ('+x+') est supérieur ou égal à 10' : 'x ('+x+') est strictement inférieur à 10';

/* 
MÉTHODE 'if... else...' A UTILISER !
 */

if(x >= 10){ // ? = if | : = else
    document.getElementById('p2').innerHTML = 'x ('+x+') est supérieur à 10';
}else{
    document.getElementById('p2').innerHTML = 'x ('+x+') est inférieur à 10';
}

/* 
MÉTHODE 'if... else...' A UTILISER !
 */


if(y > 10){ // ? = if | : = else
    document.getElementById('p3').innerHTML = 'y ('+y+') est supérieur ou égal à 10';
}else{
    document.getElementById('p3').innerHTML = 'y ('+y+') est inférieur à 10';
}

/* 
MÉTHODE TERNAIRE
*/

document.getElementById('p4').innerHTML = 
y > 10 ? '<code>y ('+y+') est supérieur à 10</code>' : 'y ('+y+') est inférieur à 10';
