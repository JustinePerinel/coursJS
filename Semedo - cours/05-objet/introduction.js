// JS pour l'introduction aux objets

// alert('coucou');

// ici, une variable-objet, tout simplement un objet
let utilisateur = {
    
        // nom, age et email sont des propriétés de l'objet utilisateur
    nom : ['Victor', 'Marie', 'Hugo'], // ici, nous avons des propriétés qui sont dans un tableau "array"
    age : 2,
    email : 'totos@hugo.com',
    adresse: 'à Paris dans son avenue',

    // une méthode un peu comme une fonction

    bonjour: function(){
        alert('J\'ai ' + this.age + ' ans et mon nom est ' + this.nom[0] + ' ' + this.nom[1] + ' ' + this.nom[2] + '.'); // ici, on pointe le numéro 0 de l'array parce qu'ici le tableau commence par 0 et non par 1
    }

}
console.log(typeof utilisateur); // on dira que c'est un objet

utilisateur.bonjour();

