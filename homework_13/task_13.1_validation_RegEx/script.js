const form = document.forms.namedItem('form')

const nameField = form.name
const textareaField = form.message
const phoneField = form.phone
const emailField = form.email

const nameCheckField = (string) => {
    return /^[a-zA-ZА-Яа-я]{3,}/.test(string)
}

const areaCheckField = (string) => {
    return /^\w{5,}/.test(string)
}

const phoneCheckField = (string) => {
    return /^((\+380)([0-9]){9})$/.test(string)
}

const mailCheckField = (string) => {
    return /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test(string)
}

const isFormValid = () => {
    const errorField = document.querySelectorAll('.error')
    return [...errorField].every((errorField) => {
        return window.getComputedStyle(errorField).display === 'none'
    })
}

function toggleErrorMessage(fieldValue, errorMessages, errorType, regExprection, checkErrorType) {
    if (fieldValue === '') {
        errorMessages.namedItem(errorType).style.display = 'block'
    } else {
        errorMessages.namedItem(errorType).style.display = 'none'
    }

    if (regExprection) {
        errorMessages.namedItem(checkErrorType).style.display = 'none'
    } else {
        errorMessages.namedItem(checkErrorType).style.display = 'block'
    }
}

function checkValue(regExprection, errorMessages, checkErrorType) {
    if (regExprection) {
        errorMessages.namedItem(checkErrorType).style.display = 'none'
    } else {
        errorMessages.namedItem(checkErrorType).style.display = 'block'
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // name
    const nameErrorMessage = nameField.parentElement.children
    const nameValue = nameField.value

    toggleErrorMessage(nameValue, nameErrorMessage, 'required', nameCheckField(nameValue), 'length')


    // textarea
    const textErrorMessage = textareaField.parentElement.children
    const textValue = textareaField.value

    checkValue(areaCheckField(textValue), textErrorMessage, 'length')

    // phone
    const phoneErrorMessage = phoneField.parentElement.children
    const phoneValue = phoneField.value

    toggleErrorMessage(phoneValue, phoneErrorMessage, 'required', phoneCheckField(phoneValue),'length')

    // mail
    const emailErrorMessage = emailField.parentElement.children
    const emailValue = emailField.value

    toggleErrorMessage(emailValue, emailErrorMessage, 'required', mailCheckField(emailValue), 'emailError')


    if (isFormValid()) {
        const formData = new FormData(event.target);
        const formObj = {};

        formData.forEach((value, key) => formObj[key] = value)

        console.log(formObj);
        event.target.reset()
    }
})