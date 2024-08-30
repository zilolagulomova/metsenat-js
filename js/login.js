"use strict";
const form = document.querySelector(".form");
const inputPass = document.querySelector(".password");
const inputLogin = document.querySelector(".username");
const login = document.querySelector(".login");
const passwordSpan = document.querySelector(".passwordSpan");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const loginValue = inputLogin.value.trim();
  const passValue = inputPass.value.trim();

  if (loginValue.length == 0 && passValue.length == 0) {
    console.log("Login kriting");
    login.classList.remove("invisible")
    passwordSpan.classList.remove("invisible")
  }
  if( loginValue.length == 0) { 
    console.log("Password kriiting");
    login.classList.remove("invisible")
  }
  if( passValue.length == 0 ) { 
    console.log("Password kriiting");
    passwordSpan.classList.remove("invisible")
  } else if (passValue.length <= 8){
    passwordSpan.classList.remove("invisible")
    passwordSpan.innerHTML = "8ta belgidan kam bo'lmasligi kerak"
  } else {
    fetch("https://metsenatclub.xn--h28h.uz/api/v1/auth/login/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: loginValue,
        password: passValue,
      })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.access) {
          window.localStorage.setItem("token", data.access)
          window.location.replace("index.html")
        }
      })
      .catch((err) => console.log(err))

  }




  form.reset();
});
const showHiddenPassword = (eye) => {
  const iconEye = document.querySelector(eye);

  iconEye.addEventListener("click", () => {
    if (inputPass.type == "password") {
      inputPass.type = "text";

      iconEye.classList.add("fa-eye");
      iconEye.classList.remove("fa-eye-slash");
    } else {
      inputPass.type = "password";
      iconEye.classList.remove("fa-eye");
      iconEye.classList.add("fa-eye-slash");
    }
  });
};
showHiddenPassword(".eye-hidden");
