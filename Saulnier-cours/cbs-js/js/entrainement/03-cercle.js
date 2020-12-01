// fichier JS pour exo Cercle

// périmètre = 2 * Math.PI * rayon
// aire = rayon * rayon * Math.PI
// console.log(Math.PI)

let rayon = 3
let perimetre = 2 * Math.PI * rayon
// code pour afficher le résultat en arrondie et pas avec sa multitude chiffre après la virgule
perimetre = perimetre *100
perimetre = Math.round(perimetre)
perimetre = perimetre /100

let aire = rayon * rayon * Math.PI
aire = aire *100
aire = Math.round(aire)
aire = aire

console.log('le rayon du cercle est',rayon, 'cm')
console.log('le périmètre du cercle est',perimetre, 'cm')
console.log('l\'air du cercle est',aire, 'cm²')