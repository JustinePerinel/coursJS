//page js pour 17-triangle.html

console.log('le triangle avec une boucle for');

let diese = '';
for (i = 1; i < 8; i++){
    diese += '#';
   document.getElementById('p1').innerHTML += diese + '<br>';
}

for (i = 0; i <= 7; i++){
    console.log('#'.repeat(i)) 
    // repeat() construit et renvoie une nouvelle chaine de caractères qui contient le nombre de copie demandée, concaténées les unes aux autres.
}

console.log('')
console.log('le triangle avec une boucle while');

let diese2 = '';
let j = 1;
while(j < 8){
    j++
    // diese2 += '#'
    diese2 = diese2 + '#, '
    console.log(diese2)
}