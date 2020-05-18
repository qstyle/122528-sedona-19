const FORM_CLASS = ".main-feedback__form"
const form = document.querySelector(FORM_CLASS)
const input = ".main-feedback__form-name-input-input--js"

form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault();
    console.log("submitted");
    console.log(event);
    if (document.g(input).validity.valueMissing){ 
        console.log(!!!);
    }
    
} 
 

console.log("init", form);