/* ETAPE 1 */

var membres = [
    {
        pseudo : "Hugo",
        age : 26,
        coordonnees : {
            email : "wf3@hl-media.fr",
            mdp : "wf3",
        }
    },
    {
        pseudo : "Rodrigue",
        age : 56,
        coordonnees : {
            email : "rodrigue@hl-media.fr",
            mdp : "roro",
        }
    },
    {
        pseudo : "James",
        age : 78,
        coordonnees : {
            email : "james@hl-media.fr",
            mdp : "james8862",
        }
    },
    {
        pseudo : "Emilio",
        age : 18,
        coordonnees : {
            email : "milio@hl-media.fr",
            mdp : "milioDu62",
        }

    }
]

var pseudo = document.getElementsByTagName(pseudo); 

for (let i = 0 ; i < membres.length ; i++) {
    let unmembre = membres[i];
    console.log(unmembre);
    
    if(pseudo === membres[i].pseudo){
        input = true;
        alert(".pseudorerror")
    }
    

}

    var pseudoerror = document.getElementsByClassName('pseudoError');
    pseudoerror.membres.style.display = "block";
    var submit = document.getElementsById('submit');
    submit.style.disabled = "true";
