// page js pour 18-fizzbuzz.html 

for(var i = 1; i <= 100; i++){
   if(i % 15 === 0){ // modulo de 15 qui équivaut à un modulo pour 3 et 5
        document.getElementById('p1').innerHTML += 'FizzBuzz <br>';
    }else if(i % 3 === 0){
        document.getElementById('p1').innerHTML += 'Fizz <br>';
    }else  if(i % 5 === 0){
        document.getElementById('p1').innerHTML += 'Buzz <br>';
    }else{
        document.getElementById('p1').innerHTML += i + '<br>';
    }
} // fin de la boucle for

//autre version avec console.log

for (var nombre = 1; nombre <=100; nombre++) {
    if ((nombre % 3 === 0) && (nombre % 5 === 0)) {// le nombre est divisible par 3 ET 5 
        console.log('FizzBuzzzzz'); 
    } else if (nombre % 3 === 0) {
        console.log('Fizzz');
    } else if (nombre % 5 === 0) {
        console.log('Buzzzz'); }  
    else {
        console.log(nombre);
        } //fin if else
    }//fin for


console.log('seconde version >>>>>');

for (var nombre = 1; nombre <=100; nombre++) {
    if ((nombre % 3 === 0) && (nombre % 5 === 0)) // le nombre est divisible par 3 ET 5 
        console.log('FizzBuzzzzz'); 
    else if (nombre % 3 === 0) 
        console.log('Fizzz');
    else if (nombre % 5 === 0) 
        console.log('Buzzzz');  
    else 
        console.log(nombre);
    }//fin for

    console.log('Version Mike >>>>>');

for (var nombre = 1; nombre <= 100; nombre++) {
    var message = '';//initialisation de la var message
    if (nombre % 3 === 0) { //Si le modulo de 3 est egale a 0, il est divisible par 3
        message +='Fizz';
        }
    if (nombre % 5 === 0){ //Si le modulo de 5 est egale a 0, il est divisible par 5
        message += 'Buzz';
        }
    if (message == ''){
        message = nombre;
        }
    console.log(message);
}//fin de for