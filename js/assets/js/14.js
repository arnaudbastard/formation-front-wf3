/* ------ LES EVENEMENTS ------- */

/* Les évènements von me permettre de déclancher une fonction, c'est à dire une série d'instructions suite à une action de mon utilisateur ...
Objectif : être en mesure de capturer des évènements afin d'exécuter une fonction.

Les évènements : MOUSE (souris)
    click : au clic sur un élément
    mouseenter : la souris passe au dessus de la zone d'un élément
    mouseleave : la souris sors de cette zone

Les évènements : KEYBOARD (clavier)
    keyup : une touche du clavier a été relâchée
    keydown : une touche est enfoncée

Les évènements : WIDOWS (fenêtre)
    scroll : défilement de la fenêtre
    resize : redimentionnemnt de la fenêtre

Les évènemnts : FORM (Formulaire)
    change : pour les éléments <input>, <select> et <textarea>
    submit : à l'envoi (soumission) du formulaire 
    input : pour capter la saisie d'un utilisateur sur un champ <input>
*/

/* LES ECOUTEURS D'EVENEMENTS
Pour attacher un évènemnt à un élément, ou autrement dit, pour déclarer un écouteur d'évènement qui se chargera de déclancher une fonctino, je vais utiliser la syntaxe suivante : */

var p = document.getElementById('MonParagraphe');

// Je souhaite que mon paragraphe soit rouge au clic de la souris

function changerLaCouleurEnRouge() {
    p.style.color = "red";
}

p.addEventListener('click', changerLaCouleurEnRouge);


/* EXERCICE PRATIQUE */

/* A l'aide de javascript, créez un champ "input" type text avec un ID unique. Affichez ensuite dans une alerte la saisie de l'utilisateur. */

// Création de notre champ input 
var input = document.createElement('input');

// Attribution d'un Attribut
input.setAttribute('type','text');
input.setAttribute('placeholder', 'Saisissez un contenu ...');
input.id = "MonID";

// Ajout dans la page
document.body.appendChild(input);
function voirLaSaisieDeMonInput() {
    alert(input.value);
}

input.addEventListener('change', voirLaSaisieDeMonInput);
