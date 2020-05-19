const FORM_CLASS = ".main-feedback__form"
const form = document.querySelector(FORM_CLASS)

const inputName = form.querySelector(".main-feedback__form-name-input-input--name")
const inputSecondName = form.querySelector(".main-feedback__form-name-input-input--second-name")
const inputNumber = form.querySelector(".main-feedback__form-contact-input-input--nomber")
const inputEmail = form.querySelector(".main-feedback__form-contact-input-input--email")
const modalError = document.querySelector(".modal-error");
const modalConfirm = document.querySelector(".modal-confirm");
const confirmBtn = document.querySelector(".modal-confirm__button-button");
const errorBtn =  document.querySelector(".modal-error__button");

form.setAttribute('novalidate', 'novalidate')
form.addEventListener('submit', handleSubmit)

// returns false if valid
// returns error otherwise
function validate() {
    if (inputName.validity.valueMissing) {
        return 'First name is required'
    }

    if (inputSecondName.validity.valueMissing) {
        return 'Second name is required'
    }

    if (inputNumber.validity.valueMissing) {
        return 'Number is required'
    }

    if (inputEmail.validity.valueMissing) {
        return 'Email name is required'
    }

    return false
}

function handleSubmit(event) {
    const error = validate()

    if (error === false) {
        modalConfirm.classList.remove('modal-off')
    } else {
        // show error and stop submission
        modalError.classList.remove('modal-off')
        event.preventDefault()
    }
}
confirmBtn.addEventListener('click', function(event) {
    event.preventDefault();
    modalConfirm.classList.add("modal-off");
});
errorBtn.addEventListener('click', function(event) {
    event.preventDefault();
    modalError.classList.add("modal-off");
});












































console.log("init", form);