
// page JS pour l'exo 24 comme twitter

let textarea = document.querySelector('#tweetContenu');
console.log(textarea);

let afficheTotal = document.querySelector('#compteur');
console.log(afficheTotal);

// la fonction va calculer la longueur de la chaine de caractères contenu dans le textarea
function compte() {
    let compte = 140 - textarea.value.length;
    afficheTotal.innerHTML = 'Il vous reste ' + compte + ' caractère(s)';
    let decompte = textarea.value.length - 140 ;
    // un if pour stopper le décompte à zero
    if (compte < 0) {
        console.log(compte);
        afficheTotal.classList.remove("bg-warning");
        afficheTotal.classList.add("bg-danger", "text-white");
        // textContent sert à changer la chaine de caractère du HTML
        afficheTotal.textContent = 'vous avez ' + decompte + ' caractère(s) à enlever !';
    } else if (compte>=0) {
        afficheTotal.classList.remove("bg-danger");
        afficheTotal.classList.add("bg-warning");
    } 

}//fin de function

// permet le décompte en temps réel
textarea.addEventListener('keyup', compte);

// appel de la fonction
compte();