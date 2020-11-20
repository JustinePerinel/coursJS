// JS pour l'exo comparaison
// sans le parseInt cela  ne fonctionne pas bien, les grands nombres sont prit comme chaine de caractere
// parseInt convertit la string en number, cela indique que ça sera forcement des nombre dans ce cas
var nombre1 = parseInt (prompt('1er nombre'));
console.log(nombre1);

var nombre2 = parseInt (prompt('2ème nombre'));
console.log(nombre2);

// if(nombre1 < nombre2) {
//     document.getElementById('p1').innerHTML = 'Votre premier nombre : ' + nombre1 + ' est plus petit que votre 2nd nombre : ' + nombre2;
// } else if (nombre1 > nombre2) {
//     document.getElementById('p1').innerHTML = 'Votre premier nombre : ' + nombre1 + ' est plus grand que votre 2nd nombre : ' + nombre2;
// } else  if ( nombre1 == nombre2) {
//     document.getElementById('p1').innerHTML = 'Votre premier nombre : ' + nombre1 + ' est égale à votre 2nd nombre : ' + nombre2;
// } else {
//     alert('Vous n\'avez pas entré un nombre');
// }

// avec un isNaN

if ( (!isNaN(nombre1)) && (!isNaN(nombre2)) ) {// utilisation de isNaN ; isNaN nous "ce n'est pas un nombre" ; !isNaN nous dit "c'est bien un nombre"
            if (nombre1 < nombre2) {// si nombre1 est inférieur
                document.getElementById('p1').innerHTML = 'Votre 1er nombre : ' + nombre1 + ' est plus petit que votre 2nd : ' + nb2;
            } else if (nombre1 > nombre2) { // si il est supérieur
                document.getElementById('p1').innerHTML = 'Votre 1er nombre : ' + nombre1 + ' est plus grand que votre 2nd : ' + nombre2;
            } else {// sinon ils sont égaux
                document.getElementById('p1').innerHTML = 'Votre 1er nombre : ' + nombre1 + ' est égal à votre 2nd : ' + nombre2;
            }// fin if condition comparaison
        } else {
            document.getElementById('p1').innerHTML = 'Vous n\'avez pas saisi de nombre(s)';
    };