/*
Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Lo svolgimento va fatto usando un ciclo for è non usando metodi degli array (come includes, per esempio) . Si puó fare??
eh si!  Basta ragionare un po’.
Bonus:
Dopo aver svolto l'esercizio con il for  fai una cartella bonus e svolgilo anche anche usando un metodo delle array tipo includes */

//Crea una lista di email di invitati ad una festa.

const list = ["mario@gmail.com", "luca@gmail.com", "luigi@gmail.com", "marco@gmail.com"]
console.log(list);
//Chiedi all’utente la sua email
const userEmail = String(prompt("inserisci qua la tua email per controllare se puoi accedere"))
let control = false
//controlla che sia nella lista di chi può accedere
for (let i = 0; i < list.length; i++) {
    if (userEmail === list[i]) {
        control = true //stampa un messaggio appropriato sull’esito del controllo
    }
}
if (control == true) {
    console.log("La tua mail è presente")
} else {
    //stampa un messaggio appropriato sull’esito del controllo
    console.log("la tua mail non è presente");
}