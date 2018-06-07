/* ----- LE CHAINAGE DE METHODES AVEC jQUERY ------ */

$(function() {
    console.log( $('div') );

    // Je souhaite cacher toutes les div de ma page HTML 
//    $('div').hide('fast', function() {
//        alert('Fin du hide');

        /* Une fois que la méthode hide() est terminée, mon alerte peut s'exécuter !
        N.B. : la fonction s'exécutera pour l'ensemble des éléments du sélecteur (ici les div) */

//        $('div').css('background','yellow');
//        $('div').css('color','red');
//        $('div').show('slow');

//    });
//    $('p').hide(1000).css('color','blue').css('font-size','20px').delay(2000).show(500);
    $('p').hide(1000).css({'color' : 'green','font-size' : '20px'}).delay(2000).show(500);

});