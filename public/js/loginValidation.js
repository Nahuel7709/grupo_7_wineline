const loginForm = document.querySelector("#loginForm");
const inputs = document.querySelectorAll("#loginForm input");

const campos = {
  correo: false,
  password: false,
};

const expresiones = {
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  password: /^.{4,12}$/, // 4 a 12 digitos.
};

const loginEmail = document.querySelector("#email");
const loginPassword = document.querySelector("#password");

const validarFormulario = (e) => {
  const field = e.target;
  const spanTagError = field.nextElementSibling;
  switch (e.target.name) {
    case "email":
      if (expresiones.correo.test(e.target.value)) {
        document.getElementById("email").classList.remove("is-invalid");
        document.getElementById("email").classList.add("is-valid");
        spanTagError.innerText = "";
        campos["correo"] = true;
      } else {
        document.getElementById("email").classList.add("is-invalid");
        spanTagError.innerText = `Ingrese un correo valido.`;
        spanTagError.classList.add("invalid-feedback");
        campos["correo"] = false;
      }

      break;

    case "password":
      if (expresiones.password.test(e.target.value)) {
        document.getElementById("password").classList.remove("is-invalid");
        document.getElementById("password").classList.add("is-valid");
        spanTagError.innerText = "";
        campos["password"] = true;
      } else {
        document.getElementById("password").classList.add("is-invalid");
        spanTagError.innerText = `Contraseña incorrecta.`;
        spanTagError.classList.add("invalid-feedback");
        campos["password"] = false;
      }

      break;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

loginForm.addEventListener("submit", (e) => {
 
  if (campos.correo && campos.password) {
    

    document
      .getElementById("formulario__mensaje-exito")
      .classList.add("formulario__mensaje-exito-activo");
    setTimeout(() => {
      document
        .getElementById("formulario__mensaje-exito")
        .classList.remove("formulario__mensaje-exito-activo");
    }, 5000);

    document.querySelectorAll("#loginForm input").forEach((input) => {
      input.classList.remove("is-valid");
    });
  }else{
    e.preventDefault();
    document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
  }
});
