//la page js pour 01-rectangle.html

let longueur = 7;
let largeur = 9;
console.log('paramètres du rectangle : longueur',longueur,', largeur',largeur);

// Pour calculer l'aire d'un rectangle, il faut multiplier longueur * largeur
let aireRectangle = longueur*largeur;
console.log('L\'aire du rectangle est de', aireRectangle);

// Pour calculer le paramètre d'un rectangle, il faut (longueur*2)+(largeur*2)
let perimetre = (longueur * 2) + (largeur * 2);
// perimetre = (7*2)+(9*2)
// perimetre = 14+18
// perimetre = 32
console.log('Le périmètre du rectangle est de', perimetre);