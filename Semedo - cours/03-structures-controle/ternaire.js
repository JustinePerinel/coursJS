// page sur les ternaires

let x = 10;
let y = -20;

// écriture en ternaire
document.getElementById('p1').innerHTML =
x >= 10 ? 'x supérieur ou égal à 10' : 'x strictement inférieur à 10';

// écriture en if...else

if(x >= 10){
    document.getElementById('p2').innerHTML = 'x supérieur ou égal à 10';
}else {
    document.getElementById('p2').innerHTML = 'x strictement inférieur à 10';
}

// y avec if...else
if(y>10){
    document.getElementById('p3').innerHTML = 'y est supérieur à 10';
}else {
    document.getElementById('p3').innerHTML = 'y est inférieur à 10';
}
 //écriture en ternaire
document.getElementById('p4').innerHTML =
y > 10 ? 'y est supérieur à 10' : 'y est strictement inférieur à 10';

