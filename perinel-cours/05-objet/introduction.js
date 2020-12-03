// page js pour pour 05-01-introduction.html

let utilisateur = {
    // nom, âge et email sont des propriétés de l'objet utilisateur 
    nom : ['Victor', 'Marie', 'Hugo'],
    age : 80,
    email : 'totor@hugo.com',
    bonjour: function(){
        alert('Mon prénom est ' + this.nom[0] + ', mon nom de famille est '+ this.nom[2] + ' et j\'ai '+ this.age + ' ans.')}
} 
utilisateur.bonjour();