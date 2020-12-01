// LES BASES DE JAVASCRIPT

// On parle habituellement de JavaScript ou JS.
// Il s'agit d'un langage de script : cf. cours sur les machines
// C'est à dire qu'on peut directement écrire le programme en JS, le programme 
// n'aura pas besoin d'être compilé.

// Histoire du JS:
// - c'est un langage de programmation
// - JS a été inventé en 1995 par Brendan Eich
// - il est standardisé sous le nom d'ECMAScript

// ATTENTION Bien que les 2 langages aient un nom se ressemblant, JAVA n'a 
// ATTENTION rien à voir avec JAVASCRIPT. 

// SYNTAXE 
// Convention d'écriture d'un code informatique concernant l'utilisation d'un certain nombre de symbole, de mot-clé et de règle d'écriture du code

// INSTRUCTION  
// une instruction est une action que doit faire JS
// on parle d'instruction ou d'une commande

// on peut utiliser une balise script dont le texte contenu
// sera interprété comme du JS

// il est plus courant d'utiliser un fichier .js séparé

// balise <script></script>
// On peut écrire du JS dans la balise script
// On peut charger un fichier externe en utilisant avec un attribut qui 
// contient le nom du script src="" à charger

// notre première instruction :
console.log(4);

// CONSOLE
// On utilise console.log() pour écrire des informations qui s'afficheront ds la 
// console.

// La console se trouve dans le navigateur : elle sert à afficher des messages
// en parallèle de la page HTML sans que l'utilisateur ne soit importuné :
// c'est donc un outil pour les développeurs.
// On peut utiliser F12 ou Ctrl i pour ouvrir la console.

// TYPE DE DONNÉES
// En programmation, il existe différents types d'éléments afin de réaliser les 
// opérations souhaitées : par exemple pour le calcul, il existe le type 
// "Number", etc.

// TYPE NOMBRE - Number
// Lorsqu'on écrit un nombre dans la console, il s'affiche en vert

// avec le type Number, il est possible de faire des calculs, sur les nombres :
console.log(2 + 2)

// JS observe le type Number de chaque côté du signe + donc comprend qu'il doit 
// réaliser l'addition classique.

// PRIORIÉTÉS DES OPÉRATIONS
// il existe les mêmes priorités d'opérations qu'en math
console.log(2 + 3 * 4) // la multiplication est prioritaire
console.log((2 + 3) * 4) // on l'outrepasse avec les parenthèses

// TYPE CHAÎNE DE CARACTÈRE - String
// Une simple lettre est appellée un caractère en programmation.
// Un ensemble de caractères s'appelle une chaîne. 
// Il faut utiliser l'apostrophe au début et à la fin pour que JS comprenne où commence et où finit la chaîne.
console.log('chaîne')

// une chaîne s'affiche en NOIR dans la console de Firefox

// il est possible d'utiliser les guillemets, touche 3 aussi dans l'ancien JS
// JS ne fera aucune différence cependant les guillemets, c'est du "vieux JS".
console.log("chaine de caractère en vieux JS")

// AFFICHAGE D'APOSTROPHE 
// Mais comment afficher une apostrophe ? 
// Par exemple si on veut écrire dans la console : C'est bien JS.
console.log('C\'est bien JS')

// Il suffit d'enveler à sa fonction de déclaration de début/fin de chaîne;
// le navigateur va alors afficher le symbole apostrophe.

// Pour cela, on utilise la barre oblique ou 'back slash' (touches : AltGr 8)
// On dit que l'apostrophe a été échappée.
console.log('c\'est une chaîne qui contient de l\'apostrophe')

// Pour écrire une apostrophe dans la chaîne de manière plus élégante, 
// on peut alors utiliser les guillemets qui sont tolérés dans ce cas
console.log("c'est une chaîne qui contient de l'apostrophe")

// Il est possible de créer une chaîne avec un seul caractère ou plusieurs; 
console.log('d')

// Il est même possible de ne rien mettre dans la chaîne : on parle de chaine 
// vide.
console.log('')
console.log() // sans paramètre, il va y avoir simplement un saut de ligne

// Opérations de base
// CALCULS
console.log(0 + 1) // addition
console.log(5 - 3) // soustraction
console.log(2 * 1.5) // multiplication
console.log(20 / 5) // division


// CONCATÉNATION
console.log('concat' + 'énation')

// CONVERSION OU CAST
console.log('chaine' + 1)
console.log('chaine' + '1')

console.log(1) // nombre
console.log('1') // chaîne

// On utilise le terme ARGUMENTS car console.log est une FONCTION
console.log(4, 9, 7) // plusieurs arguments de type Number
console.log('plusieurs arguments dans console.log()', 0, 'a', 7)

// EXEMPLES DE CONCATÉNATION
console.log('concaténation1', 'a' + 'b' )       // RÉSULTATS = 'ab'
console.log('concaténation2', '1' + 'b' )       // RÉSULTATS = '1b'
console.log('concaténation3', 1 + 'b' )         // RÉSULTATS = '1b'
console.log('concaténation4', '1' + '2' )       // RÉSULTATS = '12'
console.log('concaténation5', '1' + 1 )         // RÉSULTATS = '11'
console.log('concaténation6', 1 + '1' )         // RÉSULTATS = '11'
console.log('concaténation7', 1 + 1 )           // RÉSULTATS = 2
console.log('concaténation8', 1 + 1 + '' )      // RÉSULTATS = '2'
console.log('concaténation9', 1 + (1 + 'b'))    // RÉSULTATS = '11b' 1+'1b'
console.log('concaténation10', '' + 1 + 1 )     // RÉSULTATS = '11'


// VARIABLE
// une variable est un outil de programmation qui va avoir un nom et un contenu

let bidule // variable s'appelant bidule mais qui n'a pas encore de contenu
// créer une variable en programmation se dira "déclaration"

// DÉCLARATION
// Pour que JS comprenne qu'on utilisera une variable dans la suite du programme,
// on va utiliser le mot-clé let suivi du nom de la variable
// créer une variable en programmation se dira "déclaration"
// variable déclarée sans contenu


// NOMMAGE

// le nom de la variable doit respecter des conventions;
// ces conventions s'appellent syntaxe
// Les noms de variable peuvent contenir des majuscules, des chiffres, des 
// caractères accentués

// une variable ne peut PAS commencer par un chiffre
// let 10MentionWeb // ERREUR, interdit 

// CONVENTION 

// on utilise la convention dite "chameau" ou camelCase : première lettre en 
// en minuscule, une capitale sur chaque nouveau mot.
let dixMentionWeb

// Il existe une autre façon de nommer les variables non utilisées en JS qui
//est snake case : les mots sont séparés pas des tirets du 8
let du_pain 

// NOM DE VARIABLES NON DISPONIBLES
// on ne peut utiliser les noms suivants :
// abstract   arguments    await*        boolean
// break      byte         case          catch
// char       class*       const         continue
// debugger   default      delete        do
// double     else         enum*         eval
// export*    extends*     false         final
// finally    float        for           function
// goto       if           implements    import*
// in         instanceof   int           interface
// let*       long         native        new
// null       package      private       protected
// public     return       short         static
// super*     switch       synchronized  this
// throw      throws       transient     true
// try        typeof       var           void
// volatile   while        with          yield


// ASSIGNATION
// Pour donner une valeur on utilise le signe =
dixMentionWeb = 10;

// CONSULTATION OU AFFICHAGE
console.log('affichage de la variable dixMentionWeb', dixMentionWeb);

// Il est possible de déclarer et assigner en même temps une valeur  
let nbDeVie = 5;
let prenom = 'Justine';

// Pour consulter la valeur de la variable il suffit d'écrire son nom dans console.log()
// Il est possible de faire des calculs avec des variables
let ennemi = 12
console.log(ennemi)
console.log('addition avec une variable', ennemi + 2)

// INCRÉMENTATION avec le nom de la variable 
ennemi = ennemi + 2
console.log('incrémentation de 2 de ennemi', ennemi)

//Raccourci pour incrémentation (++)
console.log('nbDeVie avant incrémentation', nbDeVie)
nbDeVie++ // nbDeVie = nbDeVie + 1
// Incrémentation avec nomDeLaVariable++ = +1 TOUJOURS 
console.log(nbDeVie);

// DÉCRÉMENTATION
//Raccourci pour décrémentation (--)
let force = 1;
console.log('Avant décrémentation = ', force);
force--;
console.log('Après décrémentation = ', force);

// Raccourci pour incrémentation avec valeur
let point = 50;
console.log('Avant incrémentation = ', point);
point += 25;
console.log('Après incrémentation = ', point);

// Raccourci pour décrémentation avec valeur
let score = 350;
console.log('Avant incrémentation = ', score);
score -= 7;
console.log('Après incrémentation = ', score);

