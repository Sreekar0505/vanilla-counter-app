import "./styles.css";

const counter = document.getElementById("counterText");
const delta = document.getElementById("changeBy");
const decBtn = document.getElementById("decrementBtn");
const incBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");

initialize();

function initialize() {
  counter.innerHTML = 0;

  delta.addEventListener("change", () => {
    const value = delta.valueAsNumber;

    if (Number.isNaN(value)) {
      delta.value = 1;
    } else if (value < 1) {
      delta.value = 1;
    }
  });

  decBtn.addEventListener("click", () => {
    counter.textContent = parseInt(counter.textContent) - parseInt(delta.value);
  });

  incBtn.addEventListener("click", () => {
    counter.textContent = parseInt(counter.textContent) + parseInt(delta.value);
  });

  resetBtn.addEventListener("click", () => {
    counter.innerHTML = 0;
    delta.value = 1;
  });
}
