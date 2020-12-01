// Page js pour 04-conversion.html
//JUSTINE PÉRINEL

var temp1 = prompt('Choisissez une température dont vous voulez l\'équivalent en Celsius et en Fahrenheit')

var tempR1 = (temp1 * 1.8) + 32 ;
var tempR2 = (temp1-32) * 5/9;

document.getElementById('p1').innerHTML = '1 degré Celsius = ' + ((1*5/9)+32) + ' Fahrenheit.'

document.getElementById('p2').innerHTML = 'Vous avez choisi : '+ temp1 + ',°C ce qui équivaut à '+ tempR1 + '°F.';

document.getElementById('p3').innerHTML = '1 degré Fahrenheit = ' + ((1-32)*5/9) + ' Celsius.'

document.getElementById('p4').innerHTML = 'Vous avez choisi : '+ temp1 + ',°F ce qui équivaut à '+ tempR2 + '°C.';