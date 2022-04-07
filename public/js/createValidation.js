const productCreateForm = document.querySelector("#productCreateForm");

const createBrand = document.querySelector("[name=name]");
const createVariety = document.querySelector("[name=varietyId]");
const createVolume = document.querySelector("[name=volumeId]");
const createPrice = document.querySelector("[name=price]");
const createDiscount = document.querySelector("[name=discount]");
const createDescription = document.querySelector("[name=description]");
const createCategory = document.querySelector("[name=categoryId]");


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


createBrand.addEventListener("blur", validateEmptyField);
createVariety.addEventListener("blur", validateEmptyField);
createVolume.addEventListener("blur", validateEmptyField);
createPrice.addEventListener("blur", validateEmptyField);
createDiscount.addEventListener("blur", validateEmptyField);
createDescription.addEventListener("blur", validateEmptyField);
createCategory.addEventListener("blur", validateEmptyField);




createPrice.addEventListener("input", (e) => {
	const field = e.target;
	const price = field.value;
	const spanTagError = field.nextElementSibling; // capturo al <span></span> hermano
	if(isNaN(price)) {
		field.classList.add("is-invalid");
		spanTagError.innerText = `Debes ingresar solo números`;
		spanTagError.classList.add("invalid-feedback");
	} else {
		field.classList.remove("is-invalid");
		field.classList.add("is-valid");
		spanTagError.innerText = "";
		spanTagError.classList.remove("invalid-feedback");
	}
});


productCreateForm.addEventListener("submit", function (e) {
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