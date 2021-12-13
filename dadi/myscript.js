
let nomeGiocatore = "";
let dadoCPU;
let dadoGiocatore;
let messaggioEsito = "";

let sezioneCPU = document.getElementById("cpu");
let sezioneGiocatore = document.getElementById("player");

const button = document.getElementById("throw");


window.addEventListener('load', function() {
    nomeGiocatore = capitalize(prompt("Il tuo nome: "));

    if (nomeGiocatore != null) {
        alert("È il turno della CPU: ");
        dadoCPU = lancioDado();
        sezioneCPU.getElementsByClassName("score")[0].innerHTML = dadoCPU;
        
        const messaggio = "La cpu ha totalizzato: "+ dadoCPU;
        sezioneCPU.append(messaggio);
        alert("È il tuo turno, " + nomeGiocatore + "!");
    }
});


button.addEventListener("click", function(){
    dadoGiocatore = lancioDado();
    
    sezioneGiocatore.getElementsByClassName("score")[0].innerHTML = dadoGiocatore;

    messaggioEsito = `Hai totalizzato: ${dadoGiocatore}. \n `
    
    if (dadoCPU > dadoGiocatore){
        
        messaggioEsito += "Hai perso :("
    }
    else if (dadoGiocatore > dadoCPU){
        
        messaggioEsito += nomeGiocatore + " Hai vinto!"
    }
    else {
        messaggioEsito += "Pareggio";
    }

    let messageBox = sezioneGiocatore.getElementsByClassName("message")[0];
    messageBox.innerHTML = messaggioEsito;
    
});

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}


function lancioDado(){

    return getRndInteger(1, 6);
}

function capitalize(sentence){

    return sentence && sentence[0].toUpperCase() + sentence.slice(1);
}