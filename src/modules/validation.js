import { email, phone,name,text } from "./elements";
import Inputmask from "inputmask";

const form = document.getElementsByTagName("form")[0];
const nameError=document.querySelector('#name+span.error')
const emailError = document.querySelector("#email + span.error");
const phoneError=document.querySelector('#phone + span.error')
const textError=document.querySelector('#text + span.error')

Inputmask({"mask":"+999(99)999-99-99",'definitions':{}}).mask('phone')


name.addEventListener('input',()=>{
  if (name.validity.valid) {
    nameError.textContent = "";
    nameError.className = "error";
  } else {
    showErrorName();
  }
})

phone.addEventListener('input',()=>{
  if (phone.validity.valid) {
    phoneError.textContent = "";
    phoneError.className = "error";
  } else {
    showErrorPhone();
  }
})

text.addEventListener('input',()=>{
  if (text.validity.valid) {
    textError.textContent = "";
    textError.className = "error";
  } else {
    showErrorText();
  }
})



email.addEventListener("input", ()=> {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    showErrorEmail();
  }
});

form.addEventListener("submit", (event)=> {
  if (!email.validity.valid) {
    showErrorEmail();
    event.preventDefault();
  }
});



function showErrorEmail() {
  if (email.validity.valueMissing) {
    emailError.textContent = "You need to enter an e-mail address.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an e-mail address.";
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
  emailError.className = "error active";
}
function showErrorName() {
  if (name.validity.valueMissing) {
    nameError.textContent = "Please enter your name!!";
  } else if (name.validity.tooShort) {
    nameError.textContent = `Email should be at least ${name.minLength} characters; you entered ${name.value.length}.`;
  }
  nameError.className = "error active";
}

function showErrorPhone() {
  if (phone.validity.valueMissing) {
    phoneError.textContent = "Please enter your name!!";
  } else if (phone.validity.tooShort) {
    phoneError.textContent = `Email should be at least ${name.minLength} characters; you entered ${name.value.length}.`;
  }
  phoneError.className = "error active";
}

function showErrorText() {
  if (text.validity.valueMissing) {
    textError.textContent = "Please enter message!!";
  } else if (text.validity.tooShort) {
    textError.textContent = `Email should be at least ${text.minLength} characters; you entered ${text.value.length}.`;
  }
  textError.className = "error active";
}

