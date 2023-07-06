const correctMail = [
  "stefanojpriolo@gmail.com",
  "gpriolo64@gmail.com",
  "giochiweb11@gmail.com",
  "stebbijpriolo@gmail.com",
];

const button = document.getElementById("submit");
button.addEventListener("click", function () {
  for (let i = 0; i < correctMail.length; i++) {
    const mail = document.getElementById("exampleInputEmail1");
    const text = document.getElementById("emailHelp");
    if (mail.value === correctMail[i]) {
      console.log("Hai effettuato l'accesso!");
      text.innerHTML = "Hai effettuato l'accesso!";
      break;
    } else {
      console.log("Email errata, riprova!");
      text.innerHTML = "Email errata, riprova!";
      break;
    }
  }
});
