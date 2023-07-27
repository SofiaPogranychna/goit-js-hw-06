const refs = {
    input: document.getElementById("name-input"),
    nameLabel: document.getElementById("name-output")

}
refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    const currentInput = event.currentTarget.value
    if (currentInput === "") {
        refs.nameLabel.textContent = `Anonymous`
    } else { 
    refs.nameLabel.textContent = currentInput}
}
