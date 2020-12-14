//Gestion de la souris

// variables -----------------------

let bouton = document.querySelector('#toggle-rectangle');
// console.log(bouton);
let cacheRectangle = document.querySelector('.cache');
// console.log(cacheRectangle);
let rectangle = document.querySelector('.rectangle');
// console.log(rectangle); 

// évènements ----------------------------
bouton.addEventListener('click', cliqueBouton);
rectangle.addEventListener('mouseover', fVersRectangleRouge);
rectangle.addEventListener('mouseout', fVersRectangleBleu);
rectangle.addEventListener('dblclick', fVersRectangleVert);

// fonctions ------------------

// fonction pour afficher le rectangle 
function cliqueBouton(){
    cacheRectangle.classList.toggle('cache');
}

// fonction pour que le rectangle devienne rouge au survol 
function fVersRectangleRouge(){
    rectangle.classList.toggle('important');
}

// fonction pour que le rectangle reprenne sa couleur bleu à la sortie du survol
function fVersRectangleBleu(){
    rectangle.classList.toggle('important');
}

// fonction pour que le rectangle devienne vert au double-clique
function fVersRectangleVert(){
    rectangle.classList.toggle('good');
}



