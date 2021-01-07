// exo 18 fizzbuzz
// alert('coucou'),

// une boucle For

for (var nombre = 1 ; nombre <= 100; nombre++) {
    if((nombre % 3 === 0) && (nombre % 5 === 0)) { //le nombre est divisible par 3 et 5
        console.log('FizzBuzz');
    } else if (nombre % 3 === 0 ) {
            console.log('Fizz');
    } else if (nombre % 5 === 0) {
            console.log('Buzz');
    } else {
            console.log(nombre);// fin de if
    } 
}//fin de for

// 2eme version

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

// 3eme version
console.log('troisième version >>>>>');

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


    //  4ème version en if dans for
    console.log('quatrième version >>>>>');
    for (var nombre = 1; nombre <= 100; nombre++) {
        var message = '';//initialisation de la var message
        if (nombre % 3 === 0) { //Si le modulo de 3 est egale a 0, il est divisible par 3
            message +='Fizz';
            }
        if (nombre % 5 === 0){ //Si le modulo de 5 est egale a 0, il est divisible par 5
            message += 'Buzz';
            }
        if (message == ''){
            message = nombre; //la variable va concaténer Fizz+Buzz si le nombre est multiple de 3 et 5
            }
        console.log(message);
    }//fin de for

  