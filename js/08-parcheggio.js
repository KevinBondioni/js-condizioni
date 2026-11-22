// Traccia 08 · Il parcheggio
// La consegna è nel README, alla voce "08 · Il parcheggio".

/*
  STEPS
  1 -richiedere all'utente le ore di sosta effettuate
  2 -controllare che sia stato inserito un numero valido, altrimenti aletr con "Scrivi il numero di ore"
  3 -fino a 2 ore compreso costo 5€
  4 -da 3 a 5 10€
  5 -oltre le 5 ore 15€  
*/

// # Fase di preparazione
const sostaBreve = 2
const sostaMedia = 5

// # Fase di raccolta dati
const oreDiSosta = Number(prompt("Quante ore di sosta sono state effettuate?"))

// # Fase di elaborazione edi output
if (isNaN(oreDiSosta) || oreDiSosta < 1) {
  alert("Scrivi il numero di ore")
}

else if (oreDiSosta <= sostaBreve) {
  alert("Da pagare: 5€")
}
else if (oreDiSosta <= sostaMedia) {
  alert("Da pagare: 10€")
}
else {
  alert("Da pagare: 15€")
}


