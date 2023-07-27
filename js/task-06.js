const input = document.getElementById("validation-input")
const dataLength = input.dataset.length;
input.addEventListener('blur', OnBlur)

function OnBlur(event) { 
const length = event.target.value.length

    if (length === Number(dataLength)) {
        input.classList.add("valid")
        input.classList.remove("invalid")
    }
    else {
        input.classList.remove("valid")
input.classList.add("invalid")    }
}