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
    console.log("Complimenti! La tua email ti garantisce l'accesso");
  } else {
    console.log("Ci dispiace ma la tua email non ti garantisce l'accesso");
  }
  console.log(found_email);
});
