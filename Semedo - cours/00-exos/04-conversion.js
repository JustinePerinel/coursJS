// .js de Katia

var celsius = prompt('Combien de degrés celsius fait-il ?');
var fahrenheit = celsius * 1.8 + 32;


// console.log(celsius, fahrenheit);

document.getElementById('p1').innerHTML = 'Il fait ' + celsius + ' °C <br> (Celsius), <br> soit ' + fahrenheit + '°F <br>(Fahrenheit).';

// Résultat programme de conversion

document.getElementById('f1').innerHTML = '1 degré Celsius = ' + (1*1.8 + 32) + ' Fahrenheit.';

document.getElementById('f2').innerHTML = celsius + ' degrés Celsius = ' + fahrenheit + ' Fahrenheit.';

document.getElementById('c1').innerHTML = '1 degré Fahrenheit = ' + 
((1-32) * 5/9) + ' Celsius.';

document.getElementById('c2').innerHTML = fahrenheit + ' degrés Fahrenheit = ' + ((fahrenheit-32)*5/9) + ' Celsius.';
