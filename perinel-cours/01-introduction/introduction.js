//Mon premier fichier .js - jperinel
//ce fichier est lié à la page 01-04-introduction.html

//un commentaire monoligne

/* un commentaire
multiligne */


let bonjour = document.getElementById('b1')
let ajouter = document.getElementById('b2')

bonjour.addEventListener('click', popup);
ajouter.addEventListener('click', ajout);

function popup(){
    alert('Bonjour je suis une fenêtre d\'alerte');
}

function ajout(){
    let para = document.createElement('p');
    para.textContent = 'Un nouveau paragraphe, j\'ai faim !';
    document.body.appendChild(para);
}