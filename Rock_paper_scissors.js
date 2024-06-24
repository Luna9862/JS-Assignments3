const hands = ['rock', 'paper', 'scissors']; //we have made an array that contains the different options to usein the game//
//The function below chooses a random selection from the hands array.
function getHand() {
    return hands[parseInt(Math.random()*10) % 3]; //this code picks one of the three random options from the hand array//
}
//this function contains the round of players 1 and 2. 
function playRound(player1, player2) {
    const hand1 = getHand();
    const hand2 = getHand();
//the console.log displays each players hand choice//
    console.log(`player1 (${player1.name}) hand: ${hand1}`);
    console.log(`player2 (${player2.name}) hand: ${hand2}`);
//the if and else statement determines the winner based on the hand chocies. 
    if (hand1 === hand2) { //if both players get the same choices it is a tie but returns null.//
        console.log("It's a tie!");
        return null;
    } else if ((hand1 === "rock" && hand2 === "scissors") ||
               (hand1 === "paper" && hand2 === "rock") ||
               (hand1 === "scissors" && hand2 === "paper")) {
        console.log(`Winner: ${player1.name}`);
        return player1; //return player 1 if player 1 wins//
    } else {
        console.log(`Winner: ${player2.name}`);
        return player2; //return player2 if player2 wins//
    }
}

// this fuctions takes in a two distic players and how many wins are needed to be consider the winner 
function playGame(player1, player2, playUntil) {
    let player1Wins = 0;
    let player2Wins = 0;
    // Continue playing rounds until one player reaches 'playUntil' wins
    while (player1Wins < playUntil && player2Wins < playUntil) {
        const winner = playRound(player1, player2); // Play a round//
        if (winner === player1) {
            player1Wins++; // Increment player1's win count if player1 wins the round//
        } else if (winner === player2) {
            player2Wins++; // Increment player2's win count if player2 wins the round//
        }
        console.log(`Score: ${player1.name}: ${player1Wins} - ${player2.name}: ${player2Wins}`);// Log the current score after each round

    }
    // Determine and return the winner of the game based on who reached 'playUntil' wins first
    if (player1Wins === playUntil) {
        return player1;
    } else {
        return player2;
    }
}


// Function to play a tournament between four players, consisting of two rounds
function playTournament(player1, player2, player3, player4, playUntil) {
    console.log("First round:");
    const winner1 = playGame(player1, player2, playUntil);// Play first round between player1 and player2

    const winner2 = playGame(player3, player4, playUntil);// Play second round between player3 and player4
    
    console.log("Second round:");
    const tournamentWinner = playGame(winner1, winner2, playUntil);
        // Declare the winner "world chmpion"
    console.log(`${tournamentWinner.name} is the world champion`);
}

// Define players with names and the getHand function
const player1 = { name: "Robert",getHand };
const player2 = { name: "Leo",getHand };
const player3 = { name: "Racheal",getHand };
const player4 = { name: "Ria", getHand};
// Start the tournament between the defined players, playing until one player wins 3 times
playTournament(player1, player2, player3, player4, 3);