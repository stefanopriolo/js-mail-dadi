submit.addEventListener("click", function () {
  let mail = document.getElementById("exampleInputEmail1");
  console.log(mail);
});

const correctMail = [
  "stefanojpriolo@gmail.com",
  "gpriolo64@gmail.com",
  "giochiweb11@gmail.com",
  "stebbijpriolo@gmail.com",
];

if ((mail = correctMail)) {
  console.log("Hai effettuato l'accesso!");
} else {
  console.log("Email errata, riprova!");
}
