// js pour la page 12-touner-manege.html
// alert('coucou');

//1 - avec while
var w1 = 0;
while(w1 < 10){ 
    w1++;
    document.getElementById('p1').innerHTML += 'While : C\'est le tour de manège n°'+w1+'.<br>';
} 

// 2 - avec while et prompt

var w2 = 0;
var tour1 = Number(prompt('Combien de tours de manège voulez-vous ?'));

while(w2 < tour1){ 
    w2++;
    document.getElementById('p2').innerHTML += 'While avec prompt : C\'est le tour de manège n°' + w2 + '.<br>';
} 

// 3 - avec for

for(var f1 = 1; f1 <= 10; f1++){
    document.getElementById('p3').innerHTML += 'For : C\'est le tour de manège n°' + f1 + '.<br>';
}

// 4 - avec for et prompt

var tour2 = Number(prompt('Et ici, combien de tours ?'));

for(var f2 = 1; f2 <= tour2; f2++){
    document.getElementById('p4').innerHTML += 'For avec prompt : C\'est le tour de manège n°' + f2 + '.<br>';
}

