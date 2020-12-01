// LES BASES DE JAVASCRIPT
// On parle habituellement de JavaScript ou JS.
// Il s'agit du langage script : cf. cours sur les machines
// C'est à dire qu'on peut directement écrire le programme en JS, le programme n'aura pas besoin d'être compilé.
// Histoire du JS:
//  - c'est un langage de programmation
//  - JS a été inventé en 1995 par Brendan Eich
//  - Il est standardisé sous le nom d'ECMAScript

// ATTENTION Bien que les 2 langages aient un nom ressemblant, JAVA est différent de JAVASCRIPT

// SYNTAXE
// JS va utiliser un certains nombre de symbole et de mot clé et de règle d'écriture du code,  ces conventions s'apellent syntaxe du langage

// INSTRUCTION
// Une instruction est une action que doit faire JS
// On parle d'inctruction ou d'une commande
// on peut utiliser une balise <script></script> dont le texte/contenu sera interprété comme du JS
// Il est plus courant d'utiliser un fichier .js séparé
// balise <script>
// On peut écrire du JS dans la balise <script>
// On peut charger un fichier en externe en utilisant avec un attribut qui
// contient le nom du <script src=""> à charger
// Notre première instruction :

// CONSOLE
// On utilise console.log() pour écrire des informations qui s'afficheront dans la console du navigateur
// la console se trouve dans le navigateur, elle sert à afficher des messages en parallèle de la page HTML sans que l'utilisateur ne soit importuné : 
// c'est donc un outil pour les développeurs
// On peut utiliser F12 ou Ctrl i pour ouvrir la console.

// TYPE DE DONNÉES
// En programmation, il existe différents types d'éléments afin de réaliser les 
// opérations souhaitées : par exemple pour le calcul, il existe le type 
// "Number", etc.

// TYPE NOMBRE - Number
// Lorsqu'on écrit un nombre dans la console, il s'affiche en vert
console.log(4);
// avec le type Number, il est possible de faire des calculs, sur les nombres :
console.log(2 + 2);
// JS observe le type Number de chaque côté du signe + donc comprend qu'il doit 
// réaliser l'addition classique.
// Opérations de base
// CALCULS
console.log(0 + 1) // addition
console.log(5 - 3) // soustraction
console.log(2 * 1.5) // multiplication
console.log(20 / 5) // division

// PRIORITÉS DES OPÉRATIONS
// il existe les mêmes priorités d'opérations qu'en math
console.log(2 + 3 * 4); // la multiplication est prioritaire
console.log((2 + 3) * 4); // on l'outrepasse avec les parenthèses

// TYPE CHAÎNE DE CARACTÈRE - String
// Une simple lettre est appellée un caractère en programmation.
// Un ensemble de caractères s'appelle une chaîne. 
// Il faut utiliser l'apostrophe au début et à la fin pour que JS comprenne où 
// commence et où finit la chaîne.
console.log('chaîne');
// une chaîne s'affiche en NOIR dans la console de Firefox
// il est possible d'utiliser les guillemets, touche 3 aussi dans l'ancien JS
// JS ne fera aucune différence cependant les guillemets, c'est du "vieux JS".
console.log("chaine de caractère en vieux JS");

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

// CONCATÉNATION
console.log('concat' + 'énation')

// CONVERSION OU CAST
console.log('chaine' + 1)
console.log('chaine' + '1')
console.log(1) // nombre
console.log('1') // chaîne

// ARGUMENTS
console.log(4, 9, 7) // plusieurs arguments de type Number
console.log('plusieurs arguments dans console.log()', 0 , 'a' , 7) // plusieurs arguments de type Number

// EXEMPLES DE CONCATENAION
console.log('contaténation1', 'a' + 'b') //'ab'
console.log('contaténation2', '1' + 'b')// '1b'
console.log('contaténation3', 1 + 'b') // '1b'
console.log('contaténation4', '1' + '2')// '12'
console.log('contaténation5', '1' + 1) // '11'
console.log('contaténation6', 1 + '1') // '11'
console.log('contaténation7', 1 + 1) // 2
console.log('contaténation8', 1 + 1 + '') // '2'
console.log('contaténation9', 1 + (1 +'b')) // '11b'
console.log('contaténation10', '' + 1 + 1) // '11'

//VARIBALE
// Une variable est un outil de programmation qui va avoir un nom et un contenu
// let bidule //variable s'appelant bidule mais n'a pas encore de contenu

//DECLARATION
// Pour que JS comprenne qu'on souhaite utiliser une varibale dans la suite du programme, on va se servir du mot-clé let suivi du nom de la varibale.
//créez une varibale en programmation se dira "déclaration"
// let bidule // varibale déclarée sans contenu

// NOMMAGE
// Le nom retenu pour la variable doit respecter des conventions s'appellent syntaxe
// Les noms des variables peuvent contenir des majuscules, des chiffres, des caractères accentués

// Une variable ne peut commencer par un chiffre
// let 10MentionWeb (ERROR)

// CONVENTION
// On utilise la convetion dites "chameau" ou "camelCase", première lettre en minuscule, une capitale sur chaque nouveau mot.
// let dixMentionWeb

// Il existe une autre façon de nommer les variables non-utilisées en JS qui est "snake case" : les mots seraient séparés par des tirets du 8 _

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

// MOT-CLé
// Un mot-cé est un mot "compris" ou ayant un sens en JS : let

// CONSULTATION OU AFFICHAGE
// console.log('affichage de la variable dixMentionWeb', dixMentionWeb)

// ASSIGNATION
// Pour donner une valeur on utilise le signe =
dixMentionWeb = 10
console.log('affichage de la variable dixMentionWeb après assignation', dixMentionWeb)

// Il est possible de déclarer et assigner en même temps
let nbDeVie = 5

// Pour consulter la valeur de la variable il suffit d'écrire son nom dans console.log()
// Il est possible de faire des calculs avec des variables
let ennemi = 12

console.log('addition de variable', ennemi + 2)
console.log('consultation de ennemi', ennemi)

//INCRÉMENTATION

ennemi = ennemi + 2

//RACCOURCI POUR INCREMENTATION
ennemi = ennemi + 2
console.log('incrémentation de 2 de ennemi', ennemi)

console.log('nbDeVie avant incrémentation', nbDeVie)
nbDeVie++ // nbDeVie = nbDeVie + 1
console.log('nbDeVie après incrémentation', nbDeVie)

// RACCOURCI POUR DÉCRÉMENTATION
let force = 1
console.log('consultation de force avant décrémentation', force)
force-- // force = force - 1
console.log('consultation de force avant décrémentation', force)

// RACCOURCI POUR INCRÉMENTATION ou DÉCRÉMENTATION AVEC VALEUR
let point = 50
console.log('consultation de point avant incrémentation/valeur 25', point)
point += 25
console.log('consultation de point après incrémentation/valeur 25', point)

let score = 350
console.log('consultation de point avant décrémentation/valeur 7', score)
score -= 7
console.log('consultation de point après décrémentation/valeur 7', score)

// POINT VIRGULE
// point virgule permet de clore l'instruction en cours pour commencer une autre
// let a; 
// a = 1; 
// a++; 
// console.log('incrémentation sur la même ligne', a);

// BOOLÉEN
// En programmation informatique, un booléen est un type de variable à deux états 
// (généralement notés vrai et faux), destiné à représenter les 2 valeurs : 
// active ou inactive dans nos programmes
// en JS : Boolean

// le nom est tiré de George Boole (1815-1864)