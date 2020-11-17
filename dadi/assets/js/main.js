/***********************************************************************************
 * Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
 * Stabilire il vincitore, in base a chi fa il punteggio più alto.
 ***********************************************************************************/

var btnLancio = document.getElementById("btn-lancio");

btnLancio.addEventListener("click", function(){
    var lanci = [0, 0];
    
    for(var i=0; i<2; i++){
        lanci[i] = Math.floor(Math.random() * 6 ) + 1;
    }

    var numeroUtente = document.getElementById("numero-utente");
    var numeroPc = document.getElementById("numero-pc");
    var messaggio = document.getElementById("messaggio");

    numeroUtente.innerHTML = lanci[0];
    numeroPc.innerHTML = lanci[1];

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