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

const computer_dado = document.getElementById("computer_dado");
const user_dado = document.getElementById("user_dado");
const pallini = document.querySelectorAll('.pallino');

user_dado.addEventListener("click", function() {
    // animazione dello shaking
    user_dado.classList.add('rolling');
    let user_num = Math.floor(Math.random() * 6) + 1;

     if (user_num == 1) {
        pallini[3].style.display = 'block';
    } else if (user_num == 2) {
        pallini[0].style.display = 'block';
        pallini[6].style.display = 'block';
    } else if (user_num == 3) {
        pallini[1].style.display = 'block';
        pallini[3].style.display = 'block';
        pallini[5].style.display = 'block';
    } else if (user_num == 4) {
        pallini[0].style.display = 'block';
        pallini[1].style.display = 'block';
        pallini[5].style.display = 'block';
        pallini[6].style.display = 'block';
    } else if (user_num == 5) {
        pallini[0].style.display = 'block';
        pallini[1].style.display = 'block';
        pallini[3].style.display = 'block';
        pallini[5].style.display = 'block';
        pallini[6].style.display = 'block';
    } else if (user_num == 6) {
        pallini[0].style.display = 'block';
        pallini[1].style.display = 'block';
        pallini[2].style.display = 'block';
        pallini[4].style.display = 'block';
        pallini[5].style.display = 'block';
        pallini[6].style.display = 'block';
    }

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

computer_dado.addEventListener("click", function(){
    computer_dado.classList.add('rolling');

    let computer_num = Math.floor(Math.random() * 6) + 1;

     if (computer_num == 1) {
        pallini[10].style.display = 'block';
    } else if (computer_num == 2) {
        pallini[7].style.display = 'block';
        pallini[13].style.display = 'block';
    } else if (computer_num == 3) {
        pallini[8].style.display = 'block';
        pallini[10].style.display = 'block';
        pallini[12].style.display = 'block';
    } else if (computer_num == 4) {
        pallini[7].style.display = 'block';
        pallini[8].style.display = 'block';
        pallini[12].style.display = 'block';
        pallini[13].style.display = 'block';
    } else if (computer_num == 5) {
        pallini[7].style.display = 'block';
        pallini[8].style.display = 'block';
        pallini[10].style.display = 'block';
        pallini[12].style.display = 'block';
        pallini[13].style.display = 'block';
    } else if (computer_num == 6) {
        pallini[7].style.display = 'block';
        pallini[8].style.display = 'block';
        pallini[9].style.display = 'block';
        pallini[11].style.display = 'block';
        pallini[12].style.display = 'block';
        pallini[13].style.display = 'block';
    }
})