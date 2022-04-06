const registerForm = document.querySelector("#registerForm");


const registerName = document.querySelector("[name=name]");
const registerUser = document.querySelector("#idUser");
const registerAdress = document.querySelector("#adress");
const registerCellphone = document.querySelector("#cellphone");
const registerEmail = document.querySelector("#email");
const registerPassword = document.querySelector("#password");
const registerCountry = document.querySelector("#country");


const validateEmptyField = (e)=>{
    const field = e.target;
    const spanTagError = field.nextElementSibling;
    if (field.value.trim() === ""){
        field.classList.add("is-invalid");
        spanTagError.innerText = `El campo es obligatorio`;
        spanTagError.classList.add("invalid-feedback");
    }else {
		field.classList.remove("is-invalid");
		field.classList.add("is-valid");
		spanTagError.innerText = "";
		spanTagError.classList.remove("invalid-feedback");
	}
}

registerName.addEventListener("blur", validateEmptyField);
registerUser.addEventListener("blur", validateEmptyField);
registerAdress.addEventListener("blur", validateEmptyField);
registerCellphone.addEventListener("blur", validateEmptyField);
registerEmail.addEventListener("blur", validateEmptyField);
registerPassword.addEventListener("blur", validateEmptyField);
registerCountry.addEventListener("blur", validateEmptyField);


registerCellphone.addEventListener("input", (e) => {
	const field = e.target;
	const cellphone = field.value;
	const spanTagError = field.nextElementSibling; 
	if(isNaN(cellphone)) {
		field.classList.add("is-invalid");
		spanTagError.innerText = `Debes ingresar solo números`;
		spanTagError.classList.add("invalid-feedback");
	}else {
		field.classList.remove("is-invalid");
		field.classList.add("is-valid");
		spanTagError.innerText = "";
		spanTagError.classList.remove("invalid-feedback");
	}
});



   registerForm.addEventListener("submit", function (e) {
        let thereAreErrors = false;
        
        const formFields = [...productCreateForm.elements];
        formFields.pop();
    
        formFields.forEach(oneField => {
            const spanTagError = oneField.nextElementSibling; 
            if (oneField.value.trim() === "") {
                oneField.classList.add("is-invalid");
                spanTagError.innerText = `El campo  es obligatorio`;
                spanTagError.classList.add("invalid-feedback");
                
                thereAreErrors = true;
            } else {
                oneField.classList.remove("is-invalid");
                oneField.classList.add("is-valid");
                spanTagError.innerText = "";
                spanTagError.classList.remove("invalid-feedback");
            }
        })
    
        if (thereAreErrors) {
            e.preventDefault(); 
        }
})