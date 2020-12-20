let textearea = document.querySelector('#tweetContenu');
let compteur = document.querySelector('#compteur');
console.log(textearea, compteur);

// la fonction va calculer la longueur de la chaîne de caractères contenu dans le textearea
function compte(){
    let nbrCaracteres = 140 - textearea.value.length;
    compteur.innerHTML = 'Il reste ' + nbrCaracteres + ' caractères';

    if(nbrCaracteres < 0){
        // console.log(compte);
        compteur.classList.remove("bg_warning");
        compteur.classList.add("bg-danger", "text-white");
        var nbrPositif = Math.abs(nbrCaracteres);
        compteur.textContent = 'Trop de caractères ! Vous devez en retirer ' + nbrPositif;
    }else if(nbrCaracteres > 0){
        compteur.classList.remove('bg-danger', 'text-white');
        compteur.classList.add('bg-warning');
    }else{
        //sinon rien
    }

}//fin fonction 

// fonction Audrey -------------------------------------
// function compte() {
//     let compte = 140 - textarea.value.length;
//     afficheTotal.innerHTML = 'Il vous reste ' + compte + ' caractères';
//     let decompte = textarea.value.length - 140 ;
//     if (compte < 0) {
//         console.log(compte);
//         afficheTotal.classList.remove("bg-warning");
//         afficheTotal.classList.add("bg-danger", "text-white");
//         afficheTotal.textContent = 'vous avez ' + decompte + ' caractère(s) à enlever !';
//     } else if (compte>=0) {
//         afficheTotal.classList.remove("bg-danger");
//         afficheTotal.classList.add("bg-warning");
//     } //else {
//     //     afficheTotal.textContent = 'vous avez ' + decompte + ' caractère(s) à enlever !';
//     // }
// }//fin de function

// On pose un écouteur d'événement avec keyup sur le textearea
textearea.addEventListener('keyup', compte);

// on appelle la fonction
compte();