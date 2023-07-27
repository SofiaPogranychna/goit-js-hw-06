function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnColour = document.querySelector(".change-color")
const nameColor = document.querySelector(".color")

btnColour.addEventListener('click', onClick)

function onClick(event) { 

  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  nameColor.textContent = randomColor;
}