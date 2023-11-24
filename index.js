const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputField = element.parentElement;
  const errorDisplay = inputField.querySelector(".error");

  errorDisplay.innerText = message;
  inputField.classList.add("error");
  inputField.classList.remove("success");
};
const setSuccess = (element) => {
  const inputField = element.parentElement;
  const errorDisplay = inputField.querySelector(".error");

  errorDisplay.innerText = "";
  inputField.classList.add("success");
  inputField.classList.remove("error");
};
const isValidEmail = (email) => {
  // const remail = /^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
  const remail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return remail.test(String(email).toLowerCase());
};
const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setError(username, "Username is required");
  } else if (usernameValue.length < 5) {
    setError(username, "Username must contain atleast 5 character");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password si required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be atleast 8 character");
  } else {
    setSuccess(password);
  }

  if (password2Value === "") {
    setError(password2, "Please confirm your password");
  } else if (password2Value !== passwordValue) {
    setError(password2, "Password doesn't match");
  } else {
    setSuccess(password2);
  }
};
