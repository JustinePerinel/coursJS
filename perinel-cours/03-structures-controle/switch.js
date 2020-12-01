// page js pour 03-08-switch.html 

let x = 48;

switch(x){ // on va switcher sur la variable
    case 2: // on exécute un des cas possibles ou une des issues
        document.getElementById('p1').innerHTML = 'x contient la valeur 2';
        break; // break est obligatoire, il sort du switch si le cas est vrai
    case 5:
        document.getElementById('p1').innerHTML = 'x contient la valeur 5';
        break;
    case 8:
        document.getElementById('p1').innerHTML = 'x contient la valeur 8';
        break;
    case 13:
        document.getElementById('p1').innerHTML = 'x contient la valeur 13';
        break;
    case 15:
        document.getElementById('p1').innerHTML = 'x contient la valeur 15';
        break;
    case 18:
        document.getElementById('p1').innerHTML = 'x contient la valeur 18';
        break;
    default:
        document.getElementById('p1').innerHTML = 'x ne contient ni 2, ni 5, ni 8, ni 13, ni 15, ni 18.';
}