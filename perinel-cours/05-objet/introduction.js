// page js pour pour 05-01-introduction.html

let utilisateur = {
    // nom, âge et email sont des propriétés de l'objet utilisateur 
    nom : ['Victor Hugo'],
    age : 80,
    email : 'totor@hugo.com',
    bonjour: function(){
        alert('Mon nom est ' + this.nom[0] + ', j\'ai '+ this.age + 'ans.')}
} 
utilisateur.bonjour();