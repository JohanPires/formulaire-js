const form = document.querySelector("#form");
const inputs = document.querySelectorAll("input");
const nameInput = document.querySelector("#firstName");
const email = document.querySelector("#email");
const adress = document.querySelector("#adress");
const age = document.querySelector("#age");

let checkEmail = true;
let checkCode = true;
let checkSecurity = true;
let checkDate = true;
let inputsChecker = false;

let arrayChecker = [];

const sendForm = () => {
  // Check si les paramétres ne sont pas vide
  arrayChecker = [];
  inputs.forEach((input) => {
    if (input.value === "") {
      input.classList.add("color");
      inputsChecker = true;
      arrayChecker.push(inputsChecker);
      console.log(inputsChecker);
    } else {
      inputsChecker = false;
      arrayChecker.push(inputsChecker);
      input.classList.remove("color");
    }
  });
  if (arrayChecker.includes(true)) {
    emptyCheckSpan.style.color = "red";
  } else {
    emptyCheckSpan.style.color = "transparent";
  }

  //   check si l'adresse est viable

  if (adress.value.match(/[0-9]+ rue [a-z]/i)) {
    spanAdress.style.color = "transparent";
  } else {
    spanAdress.style.color = "red";
  }

  //   check si l'age est supérieur à 0

  if (age.value > 0) {
    spanNumber.style.color = "transparent";
  } else {
    spanNumber.style.color = "red";
  }

  //   check si l'email est valable
  if (
    email.value.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    checkEmail = true;
    spanEmail.style.color = "transparent";
  } else {
    checkEmail = false;
    spanEmail.style.color = "red";
  }

  //   check si le code Postal est valable

  if (Number(code.value) && code.value.length === 5) {
    checkCode = true;
    spanCode.style.color = "transparent";
  } else {
    checkCode = false;
    spanCode.style.color = "red";
  }

  //   check si le numéro de sécurité sociale est valable

  if (Number(security.value) && security.value.length === 13) {
    checkSecurity = true;
    spanSecurity.style.color = "transparent";
  } else {
    checkSecurity = false;
    spanSecurity.style.color = "red";
  }

  //   check si la de délivrance est inférieur à la date de fin de validité

  if (
    new Date(passeportDate.value).getTime() <=
    new Date(passeportDateEnd.value).getTime()
  ) {
    checkDate = true;
    spanDate.style.color = "transparent";
  } else {
    checkDate = true;
    spanDate.style.color = "red";
  }

  if (
    checkEmail &&
    checkCode &&
    checkSecurity &&
    checkDate &&
    !arrayChecker.includes(true)
  ) {
    let formData = new FormData(form);
    let data = Object.fromEntries(formData);
    let jsonData = JSON.stringify(data);
    console.log(jsonData);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendForm();
});
