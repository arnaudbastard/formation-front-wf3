// -- Initialisation de jQuery
$(function() {
    // -- 1. Je récupère la valeur saisie par mon utilisateur
    $('#search').on('change', function() {

        // -- 2. Je récupère la valeur saisie
        let search = $(this).val();
        // console.log($(this));
        // console.log(search);

        // -- 3. Récupérer la liste de contacts depuis le flux JSON

        $.getJSON('https://jsonplaceholder.typicode.com/users', function( contacts ) { 
            //console.log( contacts );

            // -- 4. Parcourir mes contacts
            for( let i = 0 ; i < contacts.length ; i++ ) {

                // -- 5. Je récupère mon contact en cours dans la boucle
                let contact = contacts[i];

                // -- 6. Je souhaite vérifier si la variable "search" correspond à l'une des valeurs des propriétés (username, email, phone, name) de notre objet "contact".
                
                if( (search === contact.username) || (search === contact.name) || (search === contact.email) || (search === contact.phone) ) {


                    $(`
                    <div class="membre">
                        <div class="membre_informations">
                            <p>Nom Complet  : ${contact.name}</p>
                            <p>Username     : ${contact.username}</p>
                            <p>Email        : ${contact.email}</p>
                            <p>Téléphone    : ${contact.phone}</p>
                        </div>
                    </div>
                    `).appendTo( $('.resultat') ); // pas obligé de mettre le $()
                    
                    console.log(contact);

                }

            } //for

        }); // -- $.getJSON()

    }); // -- $.on(change)
});