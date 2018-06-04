/* -------------LE DOM --------------*/

/* Le DOM est une interface de dévelopeement en JS pour HTML. Grâce au DOM, je vais être en mesure d'accéder ou de modifier à mon HTML. L'objet "document" : c'est le point d'entrée vers mon contenu HTML.

Chaque page chargée dans mon navigateur a un objet "document".*/

// Comment puis-je faire pour récupérer les différentes informations de mon HTML ?


/* document.getElementById() est une fonction qui va permettre de récupérer un élément HTML à partir de son identifiant unique : ID. */

var bonjour = document.getElementById('Bonjour');
console.log(bonjour);

/* document.getElementsByClassName() est une fonction qui va permettre de récupérer un ou plusieurs éléments (une liste) HTML à partir de leur classe. */

var contenu = document.getElementsByClassName('contenu');
console.log(contenu);

// /!\  Me renvoi un tableau JS avec mes éléments HTML (collection HTML).

/* document.getElementsByTagName() est une fonction qui va permettre de récupérer un ou plusieurs éléments (une liste) HTML à partir de leur * nom de balise *  */

var span = document.getElementsByTagName('span');
console.log(span);

