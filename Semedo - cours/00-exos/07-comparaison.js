var nombre1 = parseInt(prompt('Entrez un nombre')); // on met parsiInt() pour indiquer que l'on attend un number
var nombre2 = parseInt(prompt('Entrez un deuxième nombre'));

// parseInt() convertit la string en number!!

// console.log(nombre1, nombre2);

// if(nombre1 < nombre2){
//     document.getElementById('p1').innerHTML = 'Votre 1er nombre : ' + nombre1 + ' est plus petit que votre second nombre : ' + nombre2 + '.';
// }else if(nombre1 > nombre2){
//     document.getElementById('p1').innerHTML = 'Votre 1er nombre : ' + nombre1 + ' est plus grand que votre second nombre : ' + nombre2 + '.';
// }else{
//     document.getElementById('p1').innerHTML = 'Votre 1er nombre : ' + nombre1 + ' est égal à votre second nombre : ' + nombre2 + '.';
// }

// AVEC VERIFICATION STRING OU NUMBER

if ( (!isNaN(nombre1)) && (!isNaN(nombre2)) ) { // utilisation de isNaN pour "ce n'est pas un nombre" ; !isNaN nous dit "c'est bien un nombre"
        if(nombre1 < nombre2){ // si nombre est inférieur
            document.getElementById('p1').innerHTML = 'Votre 1er nombre : ' + nombre1 + ' est plus petit que votre second nombre : ' + nombre2 + '.';
        }else if(nombre1 > nombre2){ // si il est supérieur
            document.getElementById('p1').innerHTML = 'Votre 1er nombre : ' + nombre1 + ' est plus grand que votre second nombre : ' + nombre2 + '.';
        }else{ // sinon ils sont égaux
            document.getElementById('p1').innerHTML = 'Votre 1er nombre : ' + nombre1 + ' est égal à votre second nombre : ' + nombre2 + '.';
        } // fin if condition comparaison
    }else {
        document.getElementById('p1').innerHTML = 'Il faut saisir des nombres !';
};

// if(nombre1 < nombre2){
//     document.getElementById('p1').innerHTML = 'Votre 1er nombre : ' + nombre1 + ' est plus petit que votre second nombre : ' + nombre2 + '.';
// }else if(nombre1 > nombre2){
//     document.getElementById('p1').innerHTML = 'Votre 1er nombre : ' + nombre1 + ' est plus grand que votre second nombre : ' + nombre2 + '.';
// }else{
//     document.getElementById('p1').innerHTML = 'Votre 1er nombre : ' + nombre1 + ' est égal à votre second nombre : ' + nombre2 + '.';
// }

// if(nombre1 < nombre2){
//     document.getElementById('p1').innerHTML = 'Votre 1er nombre : ' + nombre1 + ' est plus petit que votre second nombre : ' + nombre2 + '.';
// }else if(nombre1 > nombre2){
//     document.getElementById('p1').innerHTML = 'Votre 1er nombre : ' + nombre1 + ' est plus grand que votre second nombre : ' + nombre2 + '.';
// }else if (nombre1 == nombre2){
//     document.getElementById('p1').innerHTML = 'Votre 1er nombre : ' + nombre1 + ' est égal à votre second nombre : ' + nombre2 + '.';
// }else{
//     document.getElementById('p1').innerHTML = 'Il faut saisir des nombres !';
// }