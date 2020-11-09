// JS pour Switch

let x = 20;

switch( x ) {
    case 2:
        document.getElementById('p1').innerHTML = 'x contient la valeur 2';
        break; // le breack est la consigne pour sortir du switch
    case 5:
        document.getElementById('p1').innerHTML = 'x contient la valeur de 5';
        break;
    case 10:
        document.getElementById('p1').innerHTML = 'x contient la valeur de 10';
        break;
    case 15:
        document.getElementById('p1').innerHTML = 'x contient la valeur de 15';
        break;
    case 20:
        document.getElementById('p1').innerHTML = 'x contient la valeur de 20';
        break;
    default:
        document.getElementById('p1').innerHTML = 'x ne contient pas la valeur 2 , ni 5, ni 10, ni 15 et ni 20';
}


