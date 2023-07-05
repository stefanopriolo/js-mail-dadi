const correctMail = [
  "stefanojpriolo@gmail.com",
  "gpriolo64@gmail.com",
  "giochiweb11@gmail.com",
  "stebbijpriolo@gmail.com",
];

for (let i = 0; i < correctMail.lenght; i++) {
  let button = document.getElementById("submit");
  button.addEventListener("click", function () {
    let mail = document.getElementById("exampleInputEmail1.value");
  });
  console.log[i];
  if (mail === correctMail[0]) {
    console.log("Hai effettuato l'accesso!");
  } else {
    console.log("Email errata, riprova!");
  }
}
