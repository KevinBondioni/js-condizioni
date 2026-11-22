// Bonus 2 · La tessera fedeltà
// La consegna è nel README, alla voce "Bonus 2 · La tessera fedeltà".

/*
  STEPS
  1 - Ciedere il presso del prodotto 
  2 - Chiedere la tessera fedeltà 
  3 - se c'è la tessare si apllica un 10% di sconto altrimenti prezzo pieno
  4 - restituisci tramite un alert con 2 decimali  
*/

// # Fase di preparazione


// # Fase di raccolta dati
const prezzo = Number(prompt("Inserisci il prezzo del prodotto"))

// # Fase di elaborazione
if (isNaN(prezzo)) {
  alert('Prezzo non valido')
}
else {
  const tessera = prompt("hai la tessera fedeltà?")
  if (tessera == "si") {
    const prezzoScontato = prezzo * 0.9
    alert(`Il prezzo è: ${prezzoScontato.toFixed(2)}`)
  }
  else {
    alert(`Il prezzo è: ${prezzo.toFixed(2)}`)
  }
}
// # Fase di output

