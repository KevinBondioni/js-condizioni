// Traccia 02 · Il conto alla romana
// La consegna è nel README, alla voce "02 · Il conto alla romana".

/*
  STEPS
  1 -richiedo le informazioni all'utente, totale conto e numero di persone 
  2 -sommo la mancia al totale
  3 -divido il totale per il numero di persone 
  4 -mostro la quota con un alert con due decimali 
*/

// # Fase di preparazione
let mancia = 10

// # Fase di raccolta dati
let conto = Number(prompt("A quanto ammonta il totale?"))
let persone = Number(prompt("in quanti siete?"))

// # Fase di elaborazione

let totale = conto + mancia
let quota = totale / persone

// # Fase di output

alert(`Aggiungendo al totale 10€ di mancia, ogni persona deve pagare ${quota.toFixed(2)}€`)
