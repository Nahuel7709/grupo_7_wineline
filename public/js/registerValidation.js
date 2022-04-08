const registerForm = document.querySelector("#registerForm");
const inputs = document.querySelectorAll('#registerForm input');

const campos = {
    usuario: false,
    nombre: false,
    direccion: false,
    password: false,
    correo: false,
    telefono: false
}

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const registerName = document.querySelector("#name");
const registerUser = document.querySelector("#userName");
const registerAdress = document.querySelector("#adress");
const registerCellphone = document.querySelector("#cellphone");
const registerEmail = document.querySelector("#email");
const registerPassword = document.querySelector("#password");
const registerCountry = document.querySelector("#country");

const validarFormulario = (e) =>{
  const field = e.target;
  const spanTagError = field.nextElementSibling; 
  switch (e.target.name) {
      case "name":
       if (expresiones.nombre.test(e.target.value)){
           document.getElementById("name").classList.remove("is-invalid")
           document.getElementById("name").classList.add("is-valid")
           spanTagError.innerText = "";
           campos ["nombre"] = true;
       }else{
           document.getElementById("name").classList.add("is-invalid")
           spanTagError.innerText = `El nombre tiene que ser de 1 a 40 digitos y solo puede contener letras y espacios y acentos.`;
           spanTagError.classList.add("invalid-feedback");
           campos ["nombre"] = false;
       }
      break;
      
      case "userName":
        if (expresiones.usuario.test(e.target.value)){
            document.getElementById("userName").classList.remove("is-invalid")
            document.getElementById("userName").classList.add("is-valid")
            spanTagError.innerText = "";
            campos ["usuario"] = true;
        }else{
            document.getElementById("userName").classList.add("is-invalid")
            spanTagError.innerText = `El nombre tiene que ser de 4 a 16 digitos y solo puede letras, numeros, guion y guion_bajo.`;
            spanTagError.classList.add("invalid-feedback");
            campos ["usuario"] = false;
        }
      
      break;
      
      case "adress":
        if (expresiones.usuario.test(e.target.value)){
            document.getElementById("adress").classList.remove("is-invalid")
            document.getElementById("adress").classList.add("is-valid")
            spanTagError.innerText = "";
            campos ["direccion"] = true;
        }else{
            document.getElementById("adress").classList.add("is-invalid")
            spanTagError.innerText = `La direccion tiene que ser de 1 a 40 digitos y solo puede letras, numeros y espacios.`;
            spanTagError.classList.add("invalid-feedback");
            campos ["direccion"] = false;
        }
      
      break;
      
      case "cellphone":
        if (expresiones.telefono.test(e.target.value)){
            document.getElementById("cellphone").classList.remove("is-invalid")
            document.getElementById("cellphone").classList.add("is-valid")
            spanTagError.innerText = "";
            campos ["telefono"] = true;
        }else{
            document.getElementById("cellphone").classList.add("is-invalid")
            spanTagError.innerText = `El telefono tiene que ser de 7 a 14 numeros.`;
            spanTagError.classList.add("invalid-feedback");
            campos ["telefono"] = false;
        }
      
      break;
     
      case "email":
        if (expresiones.correo.test(e.target.value)){
            document.getElementById("email").classList.remove("is-invalid")
            document.getElementById("email").classList.add("is-valid")
            spanTagError.innerText = "";
            campos ["correo"] = true;
        }else{
            document.getElementById("email").classList.add("is-invalid")
            spanTagError.innerText = `Ingrese un correo valido.`;
            spanTagError.classList.add("invalid-feedback");
            campos ["correo"] = false;
        }
      
      break;
      
      case "password":
        if (expresiones.password.test(e.target.value)){
            document.getElementById("password").classList.remove("is-invalid")
            document.getElementById("password").classList.add("is-valid")
            spanTagError.innerText = "";
            campos ["password"] = true;
        }else{
            document.getElementById("password").classList.add("is-invalid")
            spanTagError.innerText = `Ingrese una contraseña de 4 a 12 digitos.`;
            spanTagError.classList.add("invalid-feedback");
            campos ["password"] = false;
        }
      
      break;
      
      case "country":
      
      break;
  }
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});


registerForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && campos.direccion ){
		registerForm.reset();

        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

        document.querySelectorAll('#registerForm input').forEach((input) => {
			input.classList.remove('is-valid');
		});
    
    }
    
})






//registerCellphone.addEventListener("input", (e) => {
//	const field = e.target;
//	const cellphone = field.value;
//	const spanTagError = field.nextElementSibling; 
//	if(isNaN(cellphone)) {
//		field.classList.add("is-invalid");
//		spanTagError.innerText = `Debes ingresar solo números`;
//		spanTagError.classList.add("invalid-feedback");
//	}else {
//		field.classList.remove("is-invalid");
//		field.classList.add("is-valid");
//		spanTagError.innerText = "";
//		spanTagError.classList.remove("invalid-feedback");
//	}
//})