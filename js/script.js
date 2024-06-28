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
  let email = document.getElementById("email").value;

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

const play_btn = document.getElementById("play");

play_btn.addEventListener("click", function() {
    let user_num = Math.floor(Math.random() * 6) + 1;
    console.log(user_num);
    let computer_num = Math.floor(Math.random() * 6) +1;
    console.log(computer_num);

    if (user_num > computer_num) {
        console.log("Hai vinto contro il computer");
    } else if (user_num < computer_num) {
        console.log("Hai perso contro il computer")
    } else {
        console.log("HAi pareggiato")
    }
})