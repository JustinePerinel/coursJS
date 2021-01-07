// page pour 98 entrainement personnel js

// console.log('Coucou!');

// créer les variables constantes
const btn = document.querySelector('#btn');
const img = document.getElementById('img');

// () => {...} , est une fonction anonyme fléchée, nouvelle syntaxe plus rapide, remplace function(){...}
// fonction anonyme pour faire apparaître l'image
btn.addEventListener('click', () => {
    img.classList.toggle('show');
})

// *******************************************************************************************************
const mouseEvent = document.querySelector('.mouseEvent');
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');

// e pour event les deux sont compris par js
// x et y sont des informations présente dans e, faire console log de e si besoin
mouseEvent.addEventListener('mousemove', (e) => {
    horizontal.innerHTML = e.x;
    vertical.innerHTML = e.y;
    mouseEvent.style.left = e.x / window.innerWidth *100 + "%";
    mouseEvent.style.top = e.y / window.innerHeight *100 + "%";

    // si la largeur est supérieure à 500px l'écran devient flou et revient à la normale une fois inférieure à 500px
    if (e.x > 500) {
        document.body.style.filter="blur(3px)";
    } else {
        document.body.style.filter="none";
    }
})

// ******************************************************************************************************

document.getElementById('input').addEventListener('input', (e) => {
    vertical.innerHTML = e.target.value;
})

// ******************************************************************************************************

const theme = document.querySelectorAll('.theme');
const dark = document.querySelector('.dark');
const salmon = document.querySelector('.salmon');
const yellow = document.querySelector('.yellow');

theme.forEach((item) => {
    item.addEventListener('click', (e) => {
        console.log(e.target.id);
        document.body.classList.remove("darkTheme", "salmonTheme", "yellowTheme");
        switch(e.target.id) {
            case "dark" :
                document.body.classList.add("darkTheme");
                break;
            case "salmon" :
                document.body.classList.add("salmonTheme");
                break;
            case "yellow" :
                document.body.classList.add("yellowTheme");
                break;
            default :
                null;

        }
    })
})