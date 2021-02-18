// page js pour 02-valeurs.html 

var a = 2;
document.getElementById('td1').innerHTML = 'a = '+a;

a = a - 1;
console.log('a-1 = ', a)
document.getElementById('td2').innerHTML = '2 - 1 = '+a;

a++; //incrémente -> augmente de 1
console.log('a++ = ', a)
document.getElementById('td3').innerHTML = '1 + 1 = '+a;
// à partir d'ici a =2

var b = 8;
document.getElementById('td4').innerHTML = 'b = '+b;

b += 2;
console.log('b+=2 = ', b)
document.getElementById('td5').innerHTML = '8 + 2 = '+b;
//à partir de là b = 10

var c = a + b * b;
console.log('a+b*b = ', c)
document.getElementById('td6').innerHTML = '(10 x 10 ) = 100 + 2 = '+c;

var d = a * b + b;
console.log('a*b+b = ', d)
document.getElementById('td7').innerHTML = '( 2 x 10 ) = 20 + 10 = '+d;

var e = a * (b+b);
console.log('a*(b+b) = ', e)
document.getElementById('td8').innerHTML = '( 10 + 10 ) = 20 x 2 = '+e;

var f = a * b / a;
console.log('a*b/a = ', f)
document.getElementById('td9').innerHTML = '2 x 10 = 20 / 2 = '+f;

var g = b / a * a;
console.log('b/a*a = ', g)
document.getElementById('td10').innerHTML = '10 / 2 = 5 * 2 = '+g;