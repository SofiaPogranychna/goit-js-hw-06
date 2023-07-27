const refs = {
    fontSizeControl: document.getElementById("font-size-control"),
    textChange: document.getElementById("text")

}
refs.fontSizeControl.addEventListener('input', onInputTextChange)

function onInputTextChange(event) {
    refs.textChange.style.fontSize = `${event.target.value}px`
    

}