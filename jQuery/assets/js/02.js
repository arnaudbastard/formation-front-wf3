/* ----- LES SELECTEURS jQUERY ------ */

// Format : $('selecteur');
// En jQuery, tous les sélecteurs CSS sont disponibles ...

$(function() {
    // DOM READY !
    l = e => console.log(e);

    // Pour sélectionner toutes les balises span (par exemple) :
    l( document.getElementsByTagName('span') ); // EN JS
    l($('span') );                             // EN JQ

    // Je veux sélectionner mon menu grâce à son ID :
    l( document.getElementById('menu') ); // EN JS
    l($('#menu') );                       // EN JQ

    // Je veux sélectionner une classe :
    l( document.getElementsByClassName('MaClasse') ); // EN JS
    l( $('.MaClasse') );                               // EN JQ

    // Sélectionner un attribut :
    l( $('[href="https://www.google.fr"]') );



});