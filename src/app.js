/* eslint-disable */
import "./style.css";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generateCard();

  const widthInput = document.getElementById("width");
  const heightInput = document.getElementById("height");

  widthInput.value = document.getElementById("card").offsetWidth;
  widthInput.addEventListener("change", e => {
    const width = e.target.value;
    const card = document.getElementById("card");
    if (parseInt(width) >= 320) {
      card.style.height = "auto";
      card.style.width = width + "px";
      heightInput.value = card.offsetHeight;
    } else e.target.value = card.offsetWidth;
  });

  heightInput.value = document.getElementById("card").offsetHeight;
  heightInput.addEventListener("change", e => {
    const height = e.target.value;
    const card = document.getElementById("card");
    if (parseInt(height) >= 480) {
      card.style.width = "auto";
      card.style.height = height + "px";
      widthInput.value = card.offsetWidth;
    } else e.target.value = card.offsetHeight;
  });

  document
    .getElementById("generatorButton")
    .addEventListener("click", generateCard);

  setInterval(generateCard, 10000);
};

function generateCard() {
  const suits = [
    { name: "spade", symbol: "♠" },
    { name: "club", symbol: "♣" },
    { name: "heart", symbol: "♥" },
    { name: "diamond", symbol: "♦" }
  ];
  const ranks = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const newRank = ranks[Math.floor(Math.random() * ranks.length)];
  const newSuit = suits[Math.floor(Math.random() * suits.length)];

  document.getElementById("card").className = newSuit.name;
  document.querySelector(".rank").textContent = newRank;
  document.querySelectorAll(".suit").forEach(el => {
    el.textContent = newSuit.symbol;
  });
}
