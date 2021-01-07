// programme fizzbuzz

// for( var i = 1; i < 101; i++){ 
//     if((i % 3 === 0) && (i % 5 !== 0)){ // si i est divisible par 3 et non par 5
//        console.log(i.innerHTML = "fizz"); // on remplace le contenu de i par la string "fizz"
//     }else if( (i % 5 === 0) && (i % 3 !== 0)){ // si i est divisible par 5 et non par 3
//         console.log(i.innerHTML = 'buzz') // on remplace le contenu de i par la string "buzz"
//     }else if((i % 3 === 0) && (i % 5 === 0)){ // si i est divisible par 3 et par 5
//         console.log(i.innerHTML = 'Fizzbuzz'); // on remplace le contenu de i par la string "fizzbuzz"
//     }else{ // sinon
//         console.log(i); // on affiche la valeur initiale de i
//     }
// }// fin de la boucle

// méthode Patrick

for( var nombre = 1; nombre <=100; nombre++){
    if((nombre % 3 === 0) && (nombre % 5 === 0)){ // le nombre est divisible par 3 et 5
        console.log('Fizzbuzz');
    }else if(nombre % 3 === 0){
        console.log('Fizz');
    }else if(nombre % 5 === 0){
        console.log('Buzz');
    }else{
        console.log(nombre);
    }
} 

// // Autre méthode Patrick

// for (var nombre = 1; nombre <=100; nombre++) {
//     if ((nombre % 3 === 0) && (nombre % 5 === 0)) // le nombre est divisible par 3 ET 5 
//         console.log('FizzBuzzzzz'); 
//     else if (nombre % 3 === 0) 
//         console.log('Fizzz');
//     else if (nombre % 5 === 0) 
//         console.log('Buzzzz');  
//     else 
//         console.log(nombre);
//     }//fin for

// Méthode Justine

for(var i = 1; i <= 100; i++){
    if(i % 15 === 0){ // modulo de 15 qui équivaut à un modulo pour 3 et 5
         document.getElementById('p1').innerHTML += 'FizzBuzz <br>';
    }else if(i % 3 === 0){
         document.getElementById('p1').innerHTML += 'FIzz <br>';
     }else  if(i % 5 === 0){
         document.getElementById('p1').innerHTML += 'Buzz <br>';
     }else{
         document.getElementById('p1').innerHTML += i + '<br>';
     }
 } // fin de la boucle for

 // méthode Mike

//  for (var nombre = 1; nombre <= 100; nombre++) {
//     var message = '';//initialisation de la var message
//     if (nombre % 3 === 0) { //Si le modulo de 3 est egale a 0, il est divisible par 3
//         message +='Fizz';
//         }
//     if (nombre % 5 === 0){ //Si le modulo de 5 est egale a 0, il est divisible par 5
//         message += 'Buzz';
//         }
//     if (message == ''){
//         message = nombre;
//         }
//     console.log(message);
// }//fin de for