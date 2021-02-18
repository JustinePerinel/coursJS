//page js pour la page 24-comme-twitter.html

let textarea = document.querySelector('#tweetContenu');
textarea.addEventListener('keyup', compte);
// on pose un écouteur d'événements avec keyup sur le textarea
console.log(textarea);

let compteur = document.querySelector('#compteur');
console.log(compteur);

// la fonction va calculer la longueur de la chaîne de caractères contenue dans le textarea 
function compte() {
    var nbrCaracteres = 140 - textarea.value.length;
    compteur.innerHTML = 'Il reste ' + nbrCaracteres + ' caractères';

    if (nbrCaracteres < 0){
        console.log(nbrCaracteres);
        compteur.classList.remove('bg-warning');
        compteur.classList.add('bg-danger', 'text-white');
        var nbrPositif = Math.abs(nbrCaracteres);
        compteur.textContent = 'Trop de caractères ! Vous devez retirer ' + nbrPositif + ' caractères.';
    } else if (nbrCaracteres >= 0){
        compteur.classList.remove('bg-danger', 'text-white');
        compteur.classList.add('bg-warning');
    } else {
        // sinon rien
    }
} // fin de la fonction



compte();