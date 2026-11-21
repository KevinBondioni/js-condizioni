// Traccia 07 · Le montagne russe
// La consegna è nel README, alla voce "07 · Le montagne russe".

/*
  STEPS
  1 -chiedere altezza
  2 -chiedere età
  3- se uno dei due non è un numero alert con messaggio "Dati non validi, inserire solo numeri"
  4 -se l'altezza è uguale o maggiore a 140 e l'età uguale o maggiore a 14 puo salire 
  5 -mostrare l'alert "Puoi salire!"
  6 -se inferiori mostrare l'alert "Mi dispiace, non puoi salire."
  
*/

// # Fase di preparazione
const minAge = 14
const minHeight = 140

// # Fase di raccolta dati
const height = Number(prompt("Inserisci la tua altezza in cm"))
const age = Number(prompt("Inserisci la tua età"))

// # Fase di elaborazione e di output

if (age < minAge && height < minHeight) {
  alert("Mi dispiace, non puoi salire.")
}
else if (age >= minAge && height >= minHeight) {
  alert("Puoi salire!")
}
else {
  alert("Dati non validi, inserire solo numeri")
}
