//Mail;
// Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo,
// utilizzando un ciclo for.
// Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
// Si può fare? Certo che si basta ragionare un po’.
//  Nota: Non è necessario provvedere alla validazione delle email

// const listmail = [
//   "federica@mail.it",
//   "andrea@mail.it",
//   "francesco@mail.it",
//   "luca@mail.it",
//   "miamail@mail.it",
// ];
// console.log(listmail);
// let checkmail = false;

// const usermail = prompt("scrivi la tua mail", "miamail@mail.it");
// for (let i = 0; i <= listmail.length; i++) {
//   listmail[i] === "miamail@mail.it";
//   checkmail = true;
// }

// console.log(checkmail);

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?

// const random = [];

let winner1 = false;
let winner2 = false;

const dadoone = Math.round(Math.random() * 5) + 1;
const dadotwo = Math.round(Math.random() * 5) + 1;

if (dadoone < dadotwo) {
  winner2 = true;
  winner1 = false;
} else if (dadoone > dadotwo) {
  winner2 = false;
  winner1 = true;
}
console.log("dadoone", dadoone);
console.log("dadotwo", dadotwo);

console.log("dadoone", winner1);
console.log("dadotwo", winner2);
