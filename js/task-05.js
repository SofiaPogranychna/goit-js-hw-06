const refs = {
    input: document.getElementById("name-input"),
    nameLabel: document.getElementById("name-output")

}
refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    console.log(event.currentTarget.value);
    refs.nameLabel.textContent = event.currentTarget.value;
}