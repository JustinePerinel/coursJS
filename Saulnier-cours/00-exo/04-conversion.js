// pages JS de l'exo 04 - Conversion 
// Fait par Audrey Saulnier
var cel = prompt ('Rentrez une température en Celsius : ');
var far = cel * 9/5 + 32;
console.log(cel + ' Celius = ' + far + ' Fahrenheit.');
document.getElementById('l1').innerHTML = cel + ' degré(s) Celsius = ' + far + ' degré(s) Fahrenheit ';

cel = prompt ('Rentrez une température en Celsius : ');
far = cel * 9/5 + 32;
console.log(cel + ' Celius = ' + far + ' Fahrenheit.');
document.getElementById('l2').innerHTML = cel + ' degré(s) Celsius = ' + far + ' degré(s) Fahrenheit ';

far = prompt ('Rentrez une température en Fahrenheit : ');
cel = (far -  32 ) * 5/9;
console.log( far + ' Farheinheit = ' + cel + ' Celsius.');
document.getElementById('l3').innerHTML = far + ' degré(s) Fahrenheit = ' + cel + ' degré(s) Celsius ';

far = prompt ('Rentrez une température en Fahrenheit : ');
cel = (far -  32 ) * 5/9;
console.log(far + ' Farheinheit = ' + cel + ' Celsius.');
document.getElementById('l4').innerHTML = far + ' degré(s) Fahrenheit = ' + cel + ' degré(s) Celsius ';