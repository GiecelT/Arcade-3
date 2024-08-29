// Total of games played and score counter 
let totalGames = 0;
let totalWins = 0;
let avgWinPercent = 0;

// Even or Odd Game (function declaration)
let playerName = "";
let wins = 0;
let losses = 0;

function playGame() {
    playerName = prompt("Welcome to Even or Odd! What is your name?");
    let playerChoice = prompt(`Hello ${playerName}! Do you choose even or odd?`).toLowerCase();

    // Validate player input
    while (playerChoice !== "even" && playerChoice !== "odd") {
        playerChoice = prompt("Invalid choice. Please type 'even' or 'odd' (e.g., 'even')").toLowerCase();
    }

    // Generate two random numbers between 1 and 4
    let randomNum1 = Math.floor(Math.random() * 4) + 1;
    let randomNum2 = Math.floor(Math.random() * 4) + 1;
    let sum = randomNum1 + randomNum2;
    let result = sum % 2 === 0 ? "even" : "odd";
    let winMessage = "";

    // Determine if the player wins or loses
    if (playerChoice === result) {
        winMessage = `Congratulations ${playerName}, you chose ${playerChoice}, the sum was ${sum}, which is an ${result} number. You win!`;
        wins++;
        totalWins++;
    } else {
        winMessage = `Sorry ${playerName}, you chose ${playerChoice}, the sum was ${sum}, which is an ${result} number. You lose.`;
        losses++;
    }

    totalGames++;
    // Display game result and win/loss record
    alert(`${winMessage}\nThat's ${wins} win(s) and ${losses} loss(es)!`);

    let playAgain = confirm("Would you like to play again?");
    if (playAgain) {
        playGame();
    } else {
        endGame();
    }
}

// Guessing Game (arrow function)
const playGuess = () => {
    let repeat = "y";
    while (repeat.toLowerCase() === "y") {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        let guess = prompt("Guess a number between 1 and 10.");
        let count = 1;

        while (true) {
            if (guess > randomNumber) {
                guess = prompt("Too high, guess again.");
                count++;
            } else if (guess < randomNumber) {
                guess = prompt("Too low, guess again.");
                count++;
            } else if (guess == randomNumber) {
                alert(`You guessed the number in ${count} tries.`);
                totalWins++;
                break;
            } else {
                alert("Invalid input");
                break;
            }
        }
        totalGames++;
        repeat = prompt("Would you like to play again? yes/no").charAt(0);
    }
    endGame();
};

// Bear Hunter Ninja Game (function expression)
const bearHunterNinja = function() {
    let again;
    do {
        let playerName = prompt("Welcome to Bear Hunter Ninja! Please enter your name to get started:");

        if (playerName) {
            alert(`Hi ${playerName}! Let's play!!`);

            // Choose character
            let playerChoice = prompt("Who are you: Bear, Ninja, or Hunter?");

            if (playerChoice) {
                // Define choices in Array
                const choice = ["Bear", "Ninja", "Hunter"];

                // Traverse the Array to extract computer choice using random
                let computerChoice = choice[Math.floor(Math.random() * choice.length)];

                // Print choice result 
                let choiceMessage = `${playerName}, you picked ${playerChoice}! \nThe computer picked ${computerChoice}!`;

                // Display result
                alert(choiceMessage);

                if (playerChoice === computerChoice) {
                    // Tie
                    alert(`Nobody wins, it's a Tie!`);
                } else if ((playerChoice === "Bear" && computerChoice === "Ninja") ||
                    (playerChoice === "Ninja" && computerChoice === "Hunter") ||
                    (playerChoice === "Hunter" && computerChoice === "Bear")) {
                    // You win cases
                    alert(`You Win!`);
                    totalWins++;
                } else {
                    // Computer win cases
                    alert("Computer Wins!");
                }
                totalGames++;
            } else {
                alert("You did not make a choice. Please refresh the page to start the game.");
            }
        }
        again = prompt("Do you want to play again? (Yes/No)");
    } while (again.toLowerCase() === "yes");
    endGame();
}

// Calculate Game Results 
function endGame() {
    if (totalGames === 0) {
        alert("No games played!");
        return;
    }

    let avg = totalWins / totalGames;
    avgWinPercent = avg * 100;
    let badge = getBadge(avgWinPercent);

    let result = `
    <table>
        <tr>
            <th>Total Games Played</th>
            <td>${totalGames}</td>
        </tr>
        <tr>
            <th>Total Games Won</th>
            <td>${totalWins}</td>
        </tr>
        <tr>
            <th>Win Rate</th>
            <td>${avgWinPercent.toFixed(2)}%</td>
        </tr>
        <tr>
            <th>Badge Awarded</th>
            <td>${badge}</td>
        </tr>
    </table>`;

    document.getElementById("thanks").innerText = `Thanks for playing! Here are your results:`;
    document.getElementById("results").innerHTML = result;
}

// Function to determine badge based on win percentage
function getBadge(percent) {
    let badge;
    switch (true) {
        case (percent >= 0 && percent <= 25):
            badge = "Stone";
            break;
        case (percent > 25 && percent <= 50):
            badge = "Bronze";
            break;
        case (percent > 50 && percent <= 75):
            badge = "Iron";
            break;
        case (percent > 75 && percent <= 100):
            badge = "Silicon";
            break;
        default:
            badge = "Unknown";
            break;
    }
    return badge;
}
