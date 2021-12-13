const submitBtn = document.getElementById("submit");
let verifyMessage = document.getElementById("check-message");
let userMail = "";
const input = document.getElementsByTagName("input")[0];

const registeredMails = [
    "simoneantonelli@boolean.it",
    "fra.abritta@gmail.com",
    "barbisara02@gmail.com",
    "99gian.bene@gmail.com",
    "lorenzo.bernardini88@gmail.com",
    "hamzabouzid10@gmail.com",
    "brunco.michael@gmail.com",
    "brunosimonelavoro@gmail.com",
    "alessandrocappelli0507@gmail.com",
    "daniele.ficuciello@gmail.com",
    "nadia.fiorio85@gmail.com",
    "guarnieriangelo91ag@gmail.com",
    "lorenzoguerrini8@gmail.com",
    "yan.vi193@gmail.com",
    "gorlandelli64@gmail.com",
    "antomarc97@gmail.com",
    "martignoni.stefano.ms@gmail.com",
    "davide.masadm@gmail.com",
    "simonesimomassaro@gmail.com",
    "salvatore.milone2000@gmail.com",
    "davidemontagna92@gmail.com",
    "antonymorgante1@gmail.com",
    "mauriziomosi8@gmail.com",
    "osna.brera@gmail.com",
    "marcellopettenuzzo2@gmail.com",
    "pompeimatteojobs@gmail.com",
    "salvalaggiomatteo93@gmail.com",
    "m.sannicola@studenti.uniba.it",
    "ghadora@gmail.com",
    "sirghiestefan@gmail.com",
    "milanmilance2000.ms@gmail.com",
    "alessio.1997.18.01@gmail.com",
    "alessiotomei22@gmail.com",
    "websonixsweyd@gmail.com",
    "vincenzovitellolavoro@gmail.com",
];

input.addEventListener('focusin', function(e){
    this.classList.remove('error');
    verifyMessage.textContent = "";
})

submitBtn.addEventListener('click', function(e){
    e.preventDefault(); /* disabilita l'evento submit di default del form */

    userMail = document.getElementById("usermail").value.trim();
    console.log(userMail);
    
    if (userMail != ""){
        let pos = checkRegisteredMails(userMail);
        console.log(pos);
        verifyMessage.innerHTML = printVerifyMessage(pos);
    }
    else {

        input.classList.add("error");
        verifyMessage.innerHTML = "Hai inserito una email vuota";
    }
});


function checkRegisteredMails(userMail){
    
    let pos = -1;

    for (i = 0; i < registeredMails.length; i++){

        if (userMail == registeredMails[i]){
            pos = i;
            break;
        }
    }
    return pos;
}

function printVerifyMessage(pos){

    let icon = "";

    if (pos == -1){
        icon = "<i class='crossmark'></i>";
        return icon + " <span class='invalid'>L'email da te fornita non è stata trovata.</span>";
    }
    else {
        icon = "<i class='checkmark'></i>";
        return `${icon} <span class='success'>Email trovata! Sei stato il  ${parseInt(pos+1)}° utente ad iscriversi </span>`;
    }
}