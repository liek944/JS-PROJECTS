let myDice = [
    "images/dice 1.png",
    "images/dice 2.png",
    "images/dice 3.png",
    "images/dice 4.png",
    "images/dice 5.png",
    "images/dice 6.png"
];


const btn = document.getElementById("roll-button");
btn.addEventListener("click", rollDice);

function rollDice() {
    const dice = [1, 2, 3, 4, 5, 6];
    const selectDice = Math.floor(Math.random() * dice.length);
    const randomDice = dice[selectDice];
    const diceImage = document.getElementById("dice-image");
    diceImage.src = myDice[randomDice - 1];
}
