/* ----- LA DISPONIBILITE DU DOM ------ */

/* A partir du moment où où mon DOM, c'est à dire l'ensemble de l'arborescence de ma page HTML est complètement chargé, je peux commencer à utiliser jQuery.

Je vais mettre l'ensemble de mon code dans une fonction, cette fonction sera appelée AUTOMATIQUEMENT par jQuery lorsque le DOM sera entièrement défini.

4 façons de faire : */

// 1) --------------------
jQuery(document).ready(function() {
    // Ici le DOM est entièrement chargé, je peux procéder à mon code JS !
    //...
    //...
    //...
    //...

});

// 2) -------------------- Note /!\ : à partir du moment où on voit le symbole $, il s'agit systématiquement de jQuery
$(document).ready(function() {
    // Ici le DOM est entièrement chargé, je peux procéder à mon code JS !
});

// 3) --------------------
$(function() {
    // Ici le DOM est entièrement chargé, je peux procéder à mon code JS !
});

// 4) --------------------
$(()=> {
    //alert('Bienvenue dans ce cours jQuery !');
    // En JS :
    document.getElementById('TexteEnJquery').innerHTML = "<strong>Mon texte en JS</strong>";

    // En jQuery :
    $('#TexteEnJquery').html('Mon Texte en jQuery');

});