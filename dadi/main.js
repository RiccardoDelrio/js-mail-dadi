alert("Tira il dado premendo OK");

let userNumber = Math.floor(Math.random() * 6) + 1;
// console.log(`Utente: ${userNumber}`);
alert(`Il tuo numero è ${userNumber}. Ora premi OK per far tirare il PC.`);

let pcNumber = Math.floor(Math.random() * 6) + 1;
// console.log(`PC: ${pcNumber}`);
alert(`Il numero del PC è ${pcNumber}. Ora premi OK per sapere chi ha vinto.`);

if (userNumber > pcNumber) {
    console.log("Complimenti, hai vinto!");
    alert("Complimenti, hai vinto!");
} else if (userNumber === pcNumber) {
    console.log("Pareggio");
    alert("Pareggio!");
} else {
    console.log("Ritenta, sarai più fortunato!");
    alert("Ritenta, sarai più fortunato!");
}