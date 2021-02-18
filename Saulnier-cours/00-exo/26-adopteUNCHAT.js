// page js pour adopterUNCHAT

// déclaration de mes variables et constantes
const button = document.getElementById('button');
console.log(button);

var formulaire = document.getElementById('formulaire');
console.log(formulaire);

var texte = document.getElementById('texte');

var message = document.getElementById('message');

var boite = document.getElementById('boite');


// pour faire fonctionner le bouton envoyer
button.addEventListener('click', function(){
    formulaire.innerHTML = 'Votre demande a bien été envoyée ! <br>Nous vous répondrons dans les meilleurs délais.';
    formulaire.classList.add('alert','alert-success');
});

// button.addEventListener('click', ()=>{
//     if(texte ==! '') {
//         formulaire.classList.add('hidden');
//         message.classList.remove('visible');
//     } else {
//         alert('veuillez remplir ce champs');
//     }})

// function masquer_div(formulaire){
//   if (document.getElementById(boite).style.display == 'none')
//   {
//        document.getElementById(boite).style.display = 'block';
//   }
//   else
//   {
//        document.getElementById(id).style.display = 'none';
//   }
// }


    





// let togg1 = document.getElementById("togg1");
// let togg2 = document.getElementById("togg2");
// let d1 = document.getElementById("d1");
// let d2 = document.getElementById("d2");

// togg1.addEventListener("click", () => {
//   if(getComputedStyle(d1).display != "none"){
//     d1.style.display = "none";
//   } else {
//     d1.style.display = "block";
//   }
// })

    

// tete de chat qui change de couleur au survol
document.querySelector('#tete2chat').addEventListener('mouseover', function(){
    this.style.background = "#061339";
});

document.querySelector('#tete2chat').addEventListener('mouseout', function(){
    this.style.background = "#7885A5";
});
