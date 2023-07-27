let counterValue = 0;
const incBtn = document.querySelector("button[data-action='increment']");
const dcrBtn = document.querySelector("button[data-action='decrement']");
const valueEl = document.querySelector('#value');


function increment(evt) { 
    counterValue += 1;
    valueEl.textContent = counterValue;
}

function decrement(evt) { 
    counterValue -= 1;
    valueEl.textContent = counterValue;
}

incBtn.addEventListener("click", increment);
dcrBtn.addEventListener("click", decrement);