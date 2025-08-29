let myDice = [
    "images/dice 1.png",
    "images/dice 2.png",
    "images/dice 3.png",
    "images/dice 4.png",
    "images/dice 5.png",
    "images/dice 6.png"
];

// Add event listener for the button
const btn = document.getElementById("roll-button");
btn.addEventListener("click", rollDice);

function rollDice() {
    const dice = [1, 2, 3, 4, 5, 6];
    const selectDice = Math.floor(Math.random() * dice.length);
    const randomDice = dice[selectDice];
    let diceImage = document.getElementById("dice-image");
    if (randomDice === 1) {
        diceImage.src = myDice[0];
    } else if (randomDice === 2) {
        diceImage.src = myDice[1];
    } else if (randomDice === 3) {
        diceImage.src = myDice[2];
    } else if (randomDice === 4) {
        diceImage.src = myDice[3];
    } else if (randomDice === 5) {
        diceImage.src = myDice[4];
    } else {
        diceImage.src = myDice[5];
    }
}
