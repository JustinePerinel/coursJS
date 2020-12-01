// JS pour Objets littéral
// nouvel objet
// victor est un objet
let victor = {
    nom : ['Victor','Hugo','Marie'],
    age : 2,
    email : 'victor@hugo.com',

    bonjour : function() {
        alert('Bonjour je suis ' + this.nom[0] + ' ' + this.nom[1] + ' et j\'ai ' + this.age + ' ans.');
    }
}

// appeler la fonction qui use de méthode et d'objet
// victor.bonjour();

console.log(typeof victor); //résultat = object
// on accède aux propriétés nom et age qui contiennent des valeurs
document.getElementById('p1').innerHTML = 'Nom ' + victor.nom;
document.getElementById('p2').innerHTML = 'Age ' + victor.age + ' ans';

// on modifie la valeur de age
victor.age = 80;

document.getElementById('p3').innerHTML = 'Nouvel âge : ' + victor.age + ' ans.';

victor.bonjour();

// On rajoute une propriété et une valeur assodicée et
victor.metier = 'écrivain, dramaturge et poète';

// On crée une nouvelle méthode 
victor.bonjour2 = function() {
    alert('Bonjour j\'ai maintenant ' + this.age + ' ans, je suis ' + this.metier + ' célèbre dans le monde entier.');
}

victor.bonjour2();

document.getElementById('p4').innerHTML = 'Bonjour je suis ' + victor.nom[0] + ' ' + victor.nom[2] + '.';
