// page js pour 20-pierre.html

var choixOrdi = Math.random(); // on demande à générer un nombre aléatoire entre 0 et 1
console.log(choixOrdi);

if (choixOrdi <= 0.34) {
	choixOrdi = 'pierre'; // si le choix est inférieur ou égal à 0.34 = le choix de l'ordi sera pierre
} else if (choixOrdi <= 0.67) {
	choixOrdi = 'feuille';// si le choix est inférieur ou égal à 0.67 = le choix de l'ordi sera feuille
} else {
	choixOrdi = 'ciseaux';// sinon ce sera ciseaux
}
console.log(choixOrdi); 


for(i = 0; i < 1; i++){
    var choixUser = String(prompt("Choisissez-vous pierre, feuille, ou ciseaux ?").toLowerCase()); 
    console.log(choixUser);

    if(choixUser !== 'pierre' && choixUser !== 'feuille' && choixUser !== 'ciseaux'){ 
    alert('Vous devez saisir pierre, feuille ou ciseaux !');
    i--; 

    } else {

        if (choixOrdi == choixUser) { // si égalité exécute ce code
            document.getElementById('p1').innerHTML = 'Le choix de l\'ordi est ' + choixOrdi + ' et le votre est ' + choixUser + ' : égalité !';

        } else if (choixUser == 'pierre'){
            
            if (choixOrdi == 'ciseaux'){
                document.getElementById('p1').innerHTML = 'Le choix de l\'ordi est ' + choixOrdi + ' et le votre est pierre : les ciseaux sont écrasés par la pierre, victoire !';

            } else {
                document.getElementById('p1').innerHTML = 'Le choix de l\'ordi est ' + choixOrdi + ' et le votre est pierre : la feuille enveloppe la pierre, dommage !';
            }

        } else if (choixUser == 'feuille'){

            if (choixOrdi == 'ciseaux'){
                document.getElementById('p1').innerHTML = 'Le choix de l\'ordi est ' + choixOrdi + ' et le votre est feuille : la feuille est découpée par la paire de ciseau, dommage !';

            } else {
                document.getElementById('p1').innerHTML = 'Le choix de l\'ordi est ' + choixOrdi + ' et le votre est feuille : la feuille enveloppe la pierre, victoire !';
            }

        } else {
            if (choixOrdi == 'feuille'){
                document.getElementById('p1').innerHTML = 'Le choix de l\'ordi est ' + choixOrdi + ' et le votre est ciseaux : la feuille est découpée par la paire de ciseau, victoire !'

            } else {
                document.getElementById('p1').innerHTML = 'Le choix de l\'ordi est ' + choixOrdi + ' et le votre est ciseaux : la pierre écrase la paire de ciseau, dommage !'
            } // fin if else intérieur
        } // fin if else intermédiaire 
    } //fin if else principal
} // fin boucle for