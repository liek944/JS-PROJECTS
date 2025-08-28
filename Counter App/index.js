let countValue = [];
let countEl = document.getElementById("count-el");
let saveEL = document.getElementById("save-el");
let resetEl = document.getElementById("reset-btn");
let count = 0;
let counterFromLocalStorage = JSON.parse(localStorage.getItem("countValue"));
if (counterFromLocalStorage) {
  countValue = counterFromLocalStorage;
  saveEL.textContent = "Previous entries: " + countValue.join(" - ");
}

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  countValue.push(count);
  localStorage.setItem("countValue", JSON.stringify(countValue));
  saveEL.textContent = "Previous entries: " + countValue.join(" - ");
}

function reset() {
  count = 0;
  countEl.textContent = count;
  countValue = [];
  localStorage.removeItem("countValue");
  saveEL.textContent = "Previous entries: ";
}
