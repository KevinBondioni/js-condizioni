// Traccia 01 · Il badge
// La consegna è nel README, alla voce "01 · Il badge".

/*
  STEPS
  1 -creo le variabili con nome età e lavoro.
  2 -stampo la frase di presentazione usando + e template literal
  3 -sommo 10 all'età
  4 -stampo la frase
*/

// # Fase di preparazione
let incremento = 10


// # Fase di raccolta dati

let nome = "Kevin"
let età = 32
let lavoro = "addetto controllo qualità"

// # Fase di elaborazione
let presentazioneConSomma = "Mi ciamo " + nome + ", ho " + età + " e faccio l'" + lavoro + "."
let preparazioneTemplateLiteral = `Mi chiamo ${nome}, ho ${età} e faccio l'${lavoro}.`
let calcoloEtà = età + incremento
let etàFutura = `Fra 10 anni avrò ${calcoloEtà} anni.`

// # Fase di output

console.log(presentazioneConSomma)
console.log(preparazioneTemplateLiteral)
console.log(etàFutura)