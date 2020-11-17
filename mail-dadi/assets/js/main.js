/***********************************************************************************
 * Unisce i due escercizi precedenti.
 * Verifica che un utente sia registrato
 * e se lo è fa partire il gioco dei dadi
 ***********************************************************************************/

var btnVerifica = document.getElementById("btn-verifica");
var utentiRegistrati = ["pippo@mail.com", "paperino@mail.com","pluto@mail.com"];

btnVerifica.addEventListener("click", function(){
    var sectionGioco = document.getElementById("gioco-dadi");
    var paragrafoMessaggio = document.getElementById("messaggio-verifica");
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
        paragrafoMessaggio.innerHTML = "Benvenuto utente " + userMail + " Puoi giocare a dadi";
        sectionGioco.classList.replace("nascondi", "mostra");
    } else{
        paragrafoMessaggio.innerHTML = "Spiacente utente " + userMail + " Non puoi giocare a dadi";
        sectionGioco.classList.replace("mostra", "nascondi");
    }

});

var btnLancio = document.getElementById("btn-lancio");

btnLancio.addEventListener("click", function(){
    var lanci = [0, 0];
    var facceDado = ["game_dice_one.svg", "game_dice_two.svg", "game_dice_three.svg", "game_dice_four.svg", "game_dice_five.svg", "game_dice_six.svg"];
    
    for(var i=0; i<2; i++){
        lanci[i] = Math.floor(Math.random() * 6 ) + 1;
    }

    var numeroUtente = document.getElementById("numero-utente");
    var numeroPc = document.getElementById("numero-pc");
    var messaggio = document.getElementById("messaggio-gioco");

    numeroUtente.src = "./assets/img/" + facceDado[lanci[0] - 1];
    numeroPc.src = "./assets/img/" + facceDado[lanci[1] - 1];
    console.log("Utente: " + lanci[0]);
    console.log("PC: " + lanci[1]);

    if(lanci[0] == lanci[1]){
        messaggio.innerHTML = "Pareggio"
    } else if(lanci[0] > lanci[1]){
        messaggio.innerHTML = "Hai vinto!";
    } else {
        messaggio.innerHTML = "Hai perso!";
    }

    var sectionRisultati = document.getElementById("risultati");
    sectionRisultati.classList.replace("nascondi", "mostra");
});