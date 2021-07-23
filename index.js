const btn = document.getElementById("roll-btn");
const die = document.getElementById("die");
// const spans = document.getElementsByClassName("a");

btn.addEventListener("click", function () {
  die.innerHTML = "";
  const diceRoll = Math.floor(Math.random() * 6) + 1;
  for (let i = 0; i < diceRoll; i++) {
    die.innerHTML += `<span class="pip"></span>`;
  }
});
