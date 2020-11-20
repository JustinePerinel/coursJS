// JS pour V introduction
// let utilisateur = {
//     nom : ['Victor', 'Hugo'],
//     age : 80,
//     email : 'totor@hugo.com',
//     bonjour: function() {
//         alert('Mon nom est ' + this.nom[0] + 'j\'ai ' + this.age + 'ans.';

//     }
// } 

let utilisateur = {

    // Nom, age et email sont des propriétés de l'objet
    //  [] sert à faire des tableaux
    nom : ['Victor', 'Hugo','Marie'], //ici nous avons des propriétés qui sont dans un "array", le décompte commence à 0 pour victor, 1 pour hugo et 2 pour cédric
    age : 20,
    email : 'victor@hugo.com',

// une méthode un peu comme une fonction

    bonjour: function() {
    alert('J\'ai ' + this.age + ' ans et je m\'appelle ' + this.nom[0] + '.');
    }// fin de function

} //fin de let utilisateur

console.info(typeof(utilisateur));

// sert à appeler ou activer la methode fonction
utilisateur.bonjour();

