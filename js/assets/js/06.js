/* LES FONCTIONS */

/* Déclarer une fonction 
N.B. : cette fonction ne retourne aucune valeur et ne prend pas de paramètres */

function Bonjour() {

    // Lors de l'appel de cette fonction, les instructions ci-dessous seront exécutées
    alert('Bonjour !');
}


// Je vais appeler ma fonction "Bonjour" et déclancher ses instructions.
Bonjour();

/* function NomDeMaFonction(Argument 1, Argument 2, Argument n) {
    Les instructions ...
}
*/

// Déclarer une fonction qui prend un argument (c'est à dire un paramètre)

function ditBonjour(Prenom, Nom) {
    document.write("<p>Bonjour <strong>" + Prenom + " " + Nom + "</strong> ! </p>")
}

// Appeler / Utiliser une fonction avec des arguments
ditBonjour("Hugo", "LIEGEARD");

/* Exercice : créer une fonction permettant d'effectuer l'addition de deux nombres (nb1 et nb2) passsés en paramètre.*/
function addition(nb1, nb2) {
    return nb1 + nb2;
}

document.write("<p>" + addition(10, 5) + "</p>");