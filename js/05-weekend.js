// Traccia 05 · Che giorno è?
// La consegna è nel README, alla voce "05 · Che giorno è?".

/*
  STEPS
  1 -chiedo all'utente che giorno è
  2 -se sono giorni feriali il programma risponde con l'aletr Buon lavoro
  3 -se sono Sabato o Domenica il programma risponde con l'alert Buon Weekend 
  4 -
*/

// # Fase di raccolta dati
let giornoAttuale = prompt("Che giorno è oggi?")

// # Fase di elaborazione e di output
if (giornoAttuale == "sabato" || giornoAttuale == "domenica") {
  alert("Buon Weekend!")
}
else {
  alert("Buon Lavoro!")
}

// essendo js case sensitive Sabato finisce nell'else in quanto divesro da sabato con la s minuscola 

