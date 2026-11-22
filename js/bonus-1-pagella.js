// Bonus 1 · La pagella
// La consegna è nel README, alla voce "Bonus 1 · La pagella".

/*
  STEPS
  1 -richiedo il voto numerico
  2- se il voto inserito non e numerico allert "Voto non valido"
  3 -verifico a quale livello corrisponde 
  4 -mostro all utrente il livello in un allert 

*/

// # Fase di preparazione
const insufficiente = 5
const sufficiente = 7
const buono = 9

// # Fase di raccolta dati

const voto = prompt("Inserisci il voto numerico ottenuto ")

// # Fase di elaborazione e fase di output

if (isNaN(voto) || voto <= 0 || voto > 10) {
  alert("Voto non valido")
}
else if (voto <= insufficiente) {
  alert("Insufficiente")
}
else if (voto <= sufficiente) {
  alert("Sufficiente")
}
else if (voto <= buono) {
  alert("Buono")
}
else {
  alert("Ottimo")
}
