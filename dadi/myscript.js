
let nomeGiocatore = "Giocatore";
let dadoCPU;
let dadoGiocatore;
let messaggioEsito = "";

let sezioneCPU = document.getElementById("cpu");
let sezioneGiocatore = document.getElementById("player");
let sezioneRisultati = document.getElementById("result");

const button = document.getElementById("throw");


window.addEventListener('load', function() {

    
    const temp = capitalize(prompt("Il tuo nome: ").trim());
    
    if (temp != null && temp != "") {
        nomeGiocatore = temp;
        sezioneGiocatore.getElementsByTagName("h2")[0].innerHTML = nomeGiocatore;
        alert("È il turno della CPU: ");
        sezioneCPU.classList.add('active');
        sezioneCPU.getElementsByClassName("die")[0].classList.toggle("animate");
        dadoCPU = lancioDado();
        sezioneCPU.getElementsByClassName("score")[0].innerHTML = dadoCPU;
        
        alert("È il tuo turno, " + nomeGiocatore + "!");
        sezioneCPU.classList.remove('active');
        sezioneGiocatore.classList.add('active');
    }
});


button.addEventListener("click", function(){


    sezioneGiocatore.getElementsByClassName("die")[0].classList.toggle("animate");
    dadoGiocatore = lancioDado();
    
    sezioneGiocatore.getElementsByClassName("score")[0].innerHTML = dadoGiocatore;
    sezioneGiocatore.getElementsByClassName("score")[0].classList = ("score active");

    messaggioEsito = `Hai totalizzato: ${dadoGiocatore}. <br> `
    
    if (dadoCPU > dadoGiocatore){
        
        messaggioEsito += "Hai perso :("
    }
    else if (dadoGiocatore > dadoCPU){
        
        messaggioEsito +=  "Hai vinto!";
    }
    else {
        messaggioEsito += "Pareggio";
    }

    let messageBox = sezioneRisultati.getElementsByClassName("message")[0];
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