const numberFourth = prompt("dammi un numero di 4 cifre");
let somma = 0;
// if (numberFourth > 999 && !isNaN(numberFourth)) {
// }
for (let i = 0; i < numberFourth.length; i++) {
  const currentnumber = parseInt(numberFourth[i]);
  somma += currentnumber;

  console.log(currentnumber);
  console.log(somma);
}

Mail;
// Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for. Non è consentito usare nessun metodo proprio degli array (come includes, per esempio). Si può fare? Certo che si basta ragionare un po’. Nota: Non è necessario provvedere alla validazione delle email
