// Traccia 06 · Il login
// La consegna è nel README, alla voce "06 · Il login".

/*
  STEPS
  1 -Richiedo username con alert
  2 -Richiedo password con alert
  3 -verifico che le credenziali siano corrette 
  4 -se combaciano alert con "login affetuato" 
  5 -se non sono corrette "Credenziali errate"
*/

// # Fase di raccolta dati
const username = prompt("Inserisci l'Username")
const password = prompt("Inserisci la Password")

// # Fase di elaborazione e di output

if (username == "admin" && password == "1234") {
  alert("Login effettuato")
}
else {
  alert("Credenziali errate")
}

