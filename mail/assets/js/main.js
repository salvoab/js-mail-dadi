/*************************************************************
 * Chiedi all’utente la sua email,
 * controlla che sia nella lista di chi può accedere,
 * stampa un messaggio appropriato sull’esito del controllo.
 *************************************************************/

var btnVerifica = document.getElementById("btn-verifica");
var utentiRegistrati = ["pippo@mail.com", "paperino@mail.com","pluto@mail.com"];

btnVerifica.addEventListener("click", function(){
    var message;
    var paragrafoMessaggio = document.getElementById("messaggio");
    var userMailInput = document.getElementById("user-mail");
    var userMail = userMailInput.value;
    var userTrovato = false;

    for(var i=0; i<utentiRegistrati.length; i++){
        if(userMail == utentiRegistrati[i]){
            userTrovato=true;
            break;
        }
    }

    if(userTrovato){
        paragrafoMessaggio.innerHTML = "Benvenuto utente " + userMail + " Sei un utente registrato";
    } else{
        paragrafoMessaggio.innerHTML = "Spiacente utente " + userMail + " Non sei un utente registrato";
    }

});