alert("Tira il dado premendo ok")
let userNumber = Math.floor(Math.random() * 6) + 1;
console.log(userNumber)
alert(`Il tuo numero è ${userNumber} ora premi ok per far tirare il pc`)
let pcNumber = Math.floor(Math.random() * 6) + 1;
console.log(pcNumber)
alert(`Il  numero del pc ${pcNumber} ora premi ok per sapere chi ha vinto`)
if (userNumber > pcNumber) {
    console.log("Complimenti hai vinto!")

} else {
    console.log("Ritenta sarai più fortunato!")
    alert("Ritenta sarai più fortunato!")
}