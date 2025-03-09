document.getElementById("contactForm").onsubmit = async function (e) {
  e.preventDefault();

  let form = new FormData(this);

  let url =
    "https://script.google.com/macros/s/AKfycbypYPNUdCPavFAG3JPGBAb57JD57yJBGbXwZpUHyOR78r633EYvt9Ab6ksDO71adnF8Gg/exec"; // Google Script URL

  await fetch(url, { method: "POST", body: form });

  // Email Trigger PHP
  fetch("submit.php", { method: "POST", body: form });

  alert("Form submitted successfully!");
  this.reset();
};
