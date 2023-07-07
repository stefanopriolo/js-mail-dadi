const correctMail = [
  "stefanojpriolo@gmail.com",
  "gpriolo64@gmail.com",
  "giochiweb11@gmail.com",
  "stebbijpriolo@gmail.com",
];

const button = document.getElementById("submit");
button.addEventListener("click", function () {
  let found = false;
  const mail = document.getElementById("exampleInputEmail1");
  const text = document.getElementById("emailHelp");
  for (let i = 0; i < correctMail.length; i++) {
    if (mail.value === correctMail[i]) {
      found = true;
      break;
    }
  }
  if (found === true) {
    console.log("Hai effettuato l'accesso!");
    text.innerHTML = "Hai effettuato l'accesso!";
  } else {
    console.log("La mail è errata!");
    text.innerHTML = "La mail è errata!";
  }
});
