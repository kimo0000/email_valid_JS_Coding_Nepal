const inputEmail = document.querySelector("input");
const envelope = document.querySelector(".env");

let regex = /\w+@\w+.(com|net|fr|yahoo)/g;

inputEmail.addEventListener("input", () => {
  if (inputEmail.value) {
    inputEmail.style.border = "2px solid blue";
    envelope.style.color = "red";
  } else {
    inputEmail.style.border = "2px solid #000";
    envelope.style.color = "#777";
  }

  if (regex.test(inputEmail.value)) {
    envelope.className = "fa-solid fa-circle-check env";
    envelope.style.color = "green";
  } else {
    envelope.className = "fa-regular fa-envelope env";
  }
});
