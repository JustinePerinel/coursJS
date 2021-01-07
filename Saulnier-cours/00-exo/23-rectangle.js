// js pour exo rectangle qui change de couleur avec toggle

// pour faire apparaitre et disparaitre le rectangle
    let bouton = document.querySelector('#toggleRectangle');
    let rectangle = document.querySelector('.rectangle');
    
    function cliqueBouton() {
        rectangle.classList.toggle('rectangle');
    }

    bouton.addEventListener('click', cliqueBouton);

// le rectangle devient rouge quand la souris se déplace à l'intérieur et retrouve sa couleur d'origine quand il en sort
    rectangle.addEventListener('mouseover', function(){
        this.style.backgroundColor = "firebrick";
    });

    rectangle.addEventListener('mouseout', function(){
        this.style.backgroundColor = "royalblue";
    });

// changer la couleur du rectangle au double-click
    rectangle.addEventListener('dblclick', function(){
        this.style.backgroundColor = "limegreen";
    });




// 2eme façon (changer dans le html l'id du bouton) par Katia

//     // variables -----------------------
// let bouton = document.querySelector('#toggle-rectangle');
// // console.log(bouton);
// let cacheRectangle = document.querySelector('.cache');
// // console.log(cacheRectangle);
// let rectangle = document.querySelector('.rectangle');
// // console.log(rectangle); 
// // évènements ----------------------------
// bouton.addEventListener('click', cliqueBouton);
// rectangle.addEventListener('mouseover', fVersRectangleRouge);
// rectangle.addEventListener('mouseout', fVersRectangleBleu);
// rectangle.addEventListener('dblclick', fVersRectangleVert);
// // fonctions ------------------
// // fonction pour afficher le rectangle 
// function cliqueBouton(){
//     cacheRectangle.classList.toggle('cache');
// }
// // fonction pour que le rectangle devienne rouge au survol 
// function fVersRectangleRouge(){
//     rectangle.classList.toggle('important','rectangle');
// }
// // fonction pour que le rectangle reprenne sa couleur bleu à la sortie du survol
// function fVersRectangleBleu(){
//     rectangle.classList.toggle('important');
// }
// // fonction pour que le rectangle devienne vert au double-clique
// function fVersRectangleVert(){
//     rectangle.classList.toggle('rectangle','good');
// }



// 3eme version par Justine
// page js pour 23-rectangle.html
// let rectangle = document.querySelector('.rectangle'); // 
// let bouton = document.querySelector('#toggle-rectangle')
// bouton.addEventListener('click', function() {
//     rectangle.classList.toggle('cache');
// }); // balance entre la classe cache et l'affichage normal
// rectangle.addEventListener('dblclick', function(){
//     rectangle.classList.add('good');
//     rectangle.classList.remove('important');
//     // rectangle.classList.toggle('good', 'important'); comment ça fonctionne ??
// });
// rectangle.addEventListener('mouseout', function(){
//     rectangle.classList.remove('good');
// });
// rectangle.addEventListener('mouseover', function(){
//     rectangle.classList.remove('good');
//     rectangle.classList.add('important');
// });
// rectangle.addEventListener('mouseout', function(){
//     rectangle.classList.remove('important');
// });


