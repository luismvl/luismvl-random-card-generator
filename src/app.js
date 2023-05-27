/* eslint-disable */
import "./style.css";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  generateCard();

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
