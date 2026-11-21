// Traccia 03 · La valigia
// La consegna è nel README, alla voce "03 · La valigia".

/*
  STEPS
  1 -chiedo all-utente tramite prompt quanto pesa la valigia
  2 -se la valigia pesa meno o uguale a 23kg il biglietto costa 36€
  3 -se la valigia pesa di piu costa 56€
  4 -restituisco il costo totale all utente 
*/

// # Fase di preparazione


// # Fase di raccolta dati
const peso = Number(prompt("Quanto pesa la valigia?"))

// # Fase di elaborazione
if (peso <= 23) {
  console.log("il biblietto costa 36€")
}
else { console.log("il biglietto costa 56€") }

// # Fase di output

