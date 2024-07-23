// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    // for (let i = o; i < buttons.lenghth; i++); this is not the modern syntax but we gonna use the modern syntax 
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    runGame("addition");
});

// Docstring (Docstrings are used to describe functions, they should go right above where the function name is declared)

/**
 * The maim "loop", called when the script is first loaded 
 * and after the user's answer has been processed
 */

function runGame(gameType) {

    //create two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert (`Unknown game type: ${gameType}`);
        throw `Unknown game tyoe: ${gameType}. Aborting!`;
    }

}

function checkAnswer() {};

function calculateCorrectAnswer() {};

function incrementScore() {};

function incrementWrongAnswer() {};

function displayAdditionQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}

function displaySubtractQuestion() {};

function displayMultiplyQuestion() {};
