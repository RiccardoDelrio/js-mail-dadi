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
const userEmail = String(prompt("inserisci qua la tua email per controllare se puoi accedere"))

control = list.includes(userEmail);
console.log(control)
if (control === true) {
    console.log("la tua mail è presente nella lista ");
} else {
    console.log("la tua mail non è presente nella lista");

}
//Chiedi all’utente la sua email


//controlla che sia nella lista di chi può accedere


//stampa un messaggio appropriato sull’esito del controllo
