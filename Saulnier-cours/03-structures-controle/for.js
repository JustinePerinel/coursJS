// JS pour FOR

for (let i = 0; i < 10 ; i++) {
    document.getElementById('p1').innerHTML += ' i contient la valeur de ' + i + ' qui est incrémenter à chaque passage de la boucle grâce <code> i++ </code> <br>';
}

// console.log(i);
// un tableau dans le JS
for (let i = 0; i < 18 ; i++) {
    document.getElementById('tr1').innerHTML += ' <tr> <td> i contient la valeur de ' + i + ' qui est incrémenter à chaque passage de la boucle grâce <code> i++ </code> </td> <td> passage n°' + (i + 1 ) + '<//td> </tr>'
}
