const list_email = [
  "mario.rossi@example.com",
  "anna.bianchi@example.com",
  "luca.verdi@example.com",
  "francesca.neri@example.com",
  "giulia.ferrari@example.com",
  "alessandro.martini@example.com",
  "sara.conti@example.com",
  "marco.rinaldi@example.com",
  "laura.galli@example.com",
  "andrea.moro@example.com",
];

const search_btn = document.getElementById("search");

search_btn.addEventListener("click", function () {
  let email = document.getElementById("email").value.toLowerCase();

  let found_email = false;

  for (let i = 0; i < list_email.length; i++) {
    if (list_email[i] == email) {
      found_email = true;
    }
  }
  if (found_email == true) {
    document.getElementById("message").innerText = "Complimenti! La tua email ti garantisce l'accesso!"
  } else {
    document.getElementById("message").innerText = "Ci dispiace ma la tua email non ti garantisce l'accesso!"
  }
});


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// gestisci il gioco dei dadi così: mostra a schermo due dadi, sx utente, dx pc, al click di un dado rolla quel dado e blocca il roll finchè anche l’altro non viene cliccato e rollato.

const play_btn = document.getElementById("play");

play_btn.addEventListener("click", function() {
    let user_num = Math.floor(Math.random() * 6) + 1;
    let computer_num = Math.floor(Math.random() * 6) +1;

    document.getElementById("user_num").innerText = "Hai lanciato il dado ed è uscito: " + user_num
    document.getElementById("computer_num").innerText = "Il computer ha lanciato il dado ed è uscito: " + computer_num

    if (user_num > computer_num) {
        document.getElementById("who-win").innerText = "Hai vinto contro il computer" 
    } else if (user_num < computer_num) {
        document.getElementById("who-win").innerText = "Hai perso contro il computer"
    } else {
        document.getElementById("who-win").innerText = "Avete pareggiato"
    }
})