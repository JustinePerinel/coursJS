// JS pour conclusion

// On va créer une fonction anonyme

// function() {
//     alert('Alerte executée par une fonction anonyme');
// }

// comment appeler ma fonction si elle n'a pas de nom?

var alerte = function() {
    alert('Alerte executée par une fonction anonyme');
}

alerte();

// auto-invocation d'une fonction anonyme
// ce code ne fonctionne pas

// function () {
//     alert('Alerte !!!! Seconde exécution d\'une fonction anonyme');
// }

(function () {
    alert('Alerte !!!! Seconde exécution d\'une fonction anonyme');
})();

// On met la fonction complète entre parenthèse, suivie d'un couple de parenthèse ();

// Les fonctions auto-invoquées (self-invoked functions en anglais) vont être des fonctions qui vont s'appeler elles-mêmes. Pour créer une fonction auto-invoquée à partir d'une fonction, il va tout simplement falloir rajouter un couple de parenthèses autour de la fonction et un second après le code de la fonction.

// (fonction(){bloc de code})();

//  au déclenchement d'un évènement

// function() {
//     alert('Eh ! Tu as bien cliqué sur le paragraphe 1');
// }

let paragraphe1 = document.getElementById('p1');

paragraphe1.addEventListener('click', function() {
    alert('Eh ! Tu as bien cliqué sur le paragraphe 1');
});

let paragraphe2 = document.getElementById('p2');

paragraphe2.addEventListener('click' , function() {
    alert('Bravo, tu as bien cliqué sur le paragraphe 2');
});

// fonction récursive

function decompte(t) {
    if (t > 10) {
        document.getElementById('p3').innerHTML += t + '<br>';
        return decompte(t - 2);
    } else {
        return t;
    }
}//fin de function

decompte(45);