// nouvel objet pour la page objet litteal
// victor est une variable qui contient un objet
let victor = {
    // nom, age et email sont des propriétés 
    nom : ['Victor', 'Hugo'],
    age : 2,
    email : 'totor@hugo.fr',

    // bonjour est une méthode de l'objet victor
    bonjour: function(){
        alert('Bonjour, je suis '+ this.nom[0] + ' et j\'ai '+ this.age + ' ans.');
    }
}

//toujours appeler le nom de l'objet suivi du nom de la fonction 
// victor.bonjour();

// console.log(typeof victor);

//on accède aux propriétés nom et âge qui contiennent des valeurs 
document.getElementById('p1').innerHTML = 'Nom = ' + victor.nom;
document.getElementById('p2').innerHTML = 'Âge = ' + victor.age + ' ans.';

// on modifie la valeur de âge 
victor.age = 80;
document.getElementById('p3').innerHTML = 'Nouvel âge = ' + victor.age + ' ans.';

// victor.bonjour();

// on rajoute une valeur et une propirété associée 
victor.metier = 'écrivain, dramaturge et poète'

// ici on créé une nouvelle méthode : bonjour2
victor.bonjour2 = function(){
    alert('Bonjour, je suis '+this.nom+' et je suis un '+this.metier+'.')
}
victor.bonjour2();

document.getElementById('p4').innerHTML = 'Bonjour, je suis ' + victor.nom[0] + ' ' + victor.nom[1] + ' et j\'ai ' + victor.age + ' ans. Je suis ' + victor.metier + ' et vous pouvez me joindre sur mon email : ' + victor.email + ' ! Bonne journée.';
