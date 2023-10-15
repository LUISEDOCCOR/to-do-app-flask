//html
const divAlert = document.querySelector("#alert");
const userName = document.querySelector("#userName");
const password = document.querySelector("#password");
const login = document.querySelector("#login");
const signup = document.querySelector("#signup");
const title = document.querySelector("#title");
const activity = document.querySelector("#activity");
const btnAdd = document.querySelector("#btnAdd");
const divToDo = document.querySelector("#view-to-do");

//crear alerta
const alert = (msg, mode) => {
  const alert = `
    <div class="alert alert-${mode}" role="alert">
        ${msg}
    </div>
    `;
  divAlert.innerHTML = alert;
 };

//verificar los campos, (que no es estn vacios)
const verify = (mode) => {
  if (mode == "user") {
    if (userName.value == "" || password.value == "") {
      alert("Llene todos los campos", "danger");
      return false;
    } else {
      divAlert.innerHTML = "";
      return true;
    }
  } else {
    if (title.value == "") {
      alert("Llene todos los campos", "danger");
      return false;
    } else {
      divAlert.innerHTML = "";
      title.value = "";
      activity.value = "";
      return true;
    }
  }
};

//eliminar datos de mis campos
const clearData = () => {
  userName.value = "";
  password.value = "";
};

//llamamos a funciones externas
import { apiSingUp } from "./assets/login.js";

//cuando de requiera de de click en uno verificar que los campos no esten vacios
login.addEventListener("click", () => {
  if (verify("user")) {
    console.log("pass");
  }
});
signup.addEventListener("click", () => {
  if (verify("user")) {
    apiSingUp(userName.value, password.value, alert);
    clearData();
  }
});
btnAdd.addEventListener("click", () => {
  if (verify("toDo")) {
    console.log("pass");
  }
});
