/*
 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.

    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créez au minimum 5 étudiants ****

II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) 
de sa moyenne à chaque matière, puis sa moyenne générale. 
*/

// -- Les Flemards.js
function l(e) {
    console.log(e);
}
function w(e) {
    document.write(e);
}

var PremierTrimestre = [
    {
        prenom: "Julien",
        nom: "Calcerrada",
        matieres: {
            francais: 15,
            maths: 7,
            philosophie: 12,
            anglais: 13,
            latin: 5
        }
    },
    {
        prenom: "Demmy",
        nom: "Ondée",
        matieres: {
            francais: 13,
            maths: 18,
            philosophie: 10,
            ses: 15,
            sport: 17
        }
    },
    {
        prenom: "Sylvain",
        nom: "Ngo",
        matieres: {
            francais: 5,
            maths: 17,
            philosophie: 4,
            espagnol: 13,
            electrotechnique: 15,
            histgeo: 6
        }
    },
    {
        prenom: "Louis",
        nom: "II",
        matieres: {
            francais: 13,
            maths: 14,
            philosophie: 11,
            espagnol: 6,
            anglais: 8
        }
    },
    {
        prenom: "Nicolas",
        nom: "Staudre",
        matieres: {
            francais: 12,
            maths: 10,
            philosophie: 7,
            anglais: 14,
            allemand: 10
        }
    }
];

console.log(PremierTrimestre);

// -- Je souhaite afficher la liste de mes étudiants.

// -- Créer une boucle pour parcourir mes étudiants.
w('<ol>');
    for( let i = 0 ; i < PremierTrimestre.length ; i++ ) {

        let Etudiant = PremierTrimestre[i];
        l(Etudiant);

        var NombreDeMatieres = 0, SommesDesNotes = 0;

            w('<li>');
                w(Etudiant.prenom + ' ' + Etudiant.nom);
                w('<ul>');
                    for( let matiere in Etudiant.matieres ) {
                        l(matiere);

                        NombreDeMatieres++;
                        SommesDesNotes += Etudiant.matieres[matiere];

                        w('<li>');
                            w(matiere + ' : ' + Etudiant.matieres[matiere]);
                        w('</li>');
                    } // -- Fin de la boucle matière

                    w('<li>');
                        w('<strong>Moyenne Générale : </strong>' + 
                            ( SommesDesNotes / NombreDeMatieres ).toFixed(2) );
                    w('</li>');

                w('</ul>');
            w('</li><br>');

        l('---');  
    } // -- Fin de la boucle Etudiant
w('</ol>');
    