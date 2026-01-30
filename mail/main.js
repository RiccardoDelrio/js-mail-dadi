/*
Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

const list = ["mario@gmail.com", "luca@gmail.com", "luigi@gmail.com", "marco@gmail.com"];

// Chiedi all’utente la sua email
const userEmail = prompt("Inserisci la tua email per controllare se puoi accedere:");
let isAuthorized = false;

// Controlla che sia nella lista di chi può accedere
for (let i = 0; i < list.length; i++) {
    if (userEmail === list[i]) {
        isAuthorized = true;
    }
}

if (isAuthorized) {
    console.log("Accesso consentito: la tua mail è presente.");
    alert("Accesso consentito: la tua mail è presente.");
} else {
    console.log("Accesso negato: la tua mail non è presente.");
    alert("Accesso negato: la tua mail non è presente.");
}