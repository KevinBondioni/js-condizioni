// Traccia 04 · Testa o croce
// La consegna è nel README, alla voce "04 · Testa o croce".

/*
  STEPS
  1 -chiedo all utente se testa o croce 
  2 -Definisco il valore della moneta con math.random se minore di 0.5 testa uguale o maggiore croce
  3 -mostro il risultato numerico in console ed l'esito del lancio in un alert 
  3 -confronto la scelta dell utente con il valore dlla moneta
  4 -se combacia aggiungo all alert hai vinto altrimenti hai perso e
*/

// # Fase di preparazione

let esitoLancio

// # Fase di raccolta dati
sceltaUtente = prompt("testa o croce?")

let valoreMoneta = Math.random()

// # Fase di elaborazione

if (valoreMoneta < 0.5) {
  esitoLancio = "testa"
}
else {
  esitoLancio = "croce"
};

// # Fase di output

console.log(valoreMoneta)

if (esitoLancio == sceltaUtente) {
  alert(`la moneta è ${esitoLancio}. Hai Vinto!!`)
}
else {
  alert(`la moneta è ${esitoLancio}. Hai perso!!`)
}

