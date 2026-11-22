// Traccia 09 · Come mi vesto?
// La consegna è nel README, alla voce "09 · Come mi vesto?".

/*
  STEPS
  1 -chiedere la temperatura esterna 
  2 -verificare se si tratta di un numero valido altrimenti alert "Scrivi la temperatura"
  3 -se la temperatura è inferiore a 15°C chiedere se piove 
  4 - se la risposta è si allora alert Metti l'impermeabile altrimenti Metti la giacca
  5 - se non piove alert Vai leggero
*/

// # Fase di preparazione
const tempLimite = 15

// # Fase di raccolta dati

const temperatura = Number(prompt("quanti gradi ci sono?"))

// # Fase di elaborazione e di output

if (isNaN(temperatura)) {
  alert("Scrivi la temperatura")
}
else if (temperatura < tempLimite) {
  const pioggia = prompt("Sta piovendo?")
  if (pioggia == "si") {
    alert("Metti l'mpermeabile")
  }
  else {
    alert("Metti la giacca")
  }
}
else {
  alert("Vai leggero")
}


