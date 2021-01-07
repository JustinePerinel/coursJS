// page js pour 23-rectangle.html

let rectangle = document.querySelector('.rectangle'); // 
let bouton = document.querySelector('#toggle-rectangle')

bouton.addEventListener('click', function() {
    rectangle.classList.toggle('cache');
}); // balance entre la classe cache et l'affichage normal

rectangle.addEventListener('dblclick', function(){
    rectangle.classList.add('good');
    rectangle.classList.remove('important');
    // rectangle.classList.toggle('good', 'important'); comment ça fonctionne ??
});

rectangle.addEventListener('mouseover', function(){
    rectangle.classList.remove('good');
    rectangle.classList.add('important');
});

rectangle.addEventListener('mouseout', function(){
    rectangle.classList.remove('important');
    rectangle.classList.remove('good');
});