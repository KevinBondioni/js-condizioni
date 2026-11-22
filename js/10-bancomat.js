// Traccia 10 · Il bancomat
// La consegna è nel README, alla voce "10 · Il bancomat".

/*
  STEPS
  1 -chiedo il saldo
  2 -chiedo l'importo da prelevere
  3 -controllo che l'importo sia maggiore di 0 altrimenti alert "Importo non valido"
  4 -Se l'importo è valido e il saldo basta alert Prelievo effettuato
  5 -mostro il nuovo saldo 
  6 -se l'importo non è sufficiente, mostro alert Saldo insufficiente
*/

// # Fase di preparazione


// # Fase di raccolta dati
const saldo = Number(prompt("Indica il saldo"))
const prelievo = Number(prompt("Indica quanto vuoi prelevare"))

// # Fase di elaborazione e Fase di output

if (isNaN(saldo) || isNaN(prelievo) || prelievo <= 0) {
  alert("importo non valido")
}
else if (saldo >= prelievo) {
  alert(`Prelievo effettuato. Nuovo saldo: ${saldo - prelievo}€`)
}
else {
  alert("Saldo insufifciente")
}


