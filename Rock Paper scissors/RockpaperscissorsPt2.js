const hands = ['rock', 'paper', 'scissors'];

// Function to get a random hand from the hands array
function getHand() {
    return hands[Math.floor(Math.random() * 3)];
}

// Define player objects with name and getHand method
const player1 = {
    name: 'Player 1',
    getHand: getHand
};

const player2 = {
    name: 'Player 2',
    getHand: getHand
};

// Function to play a round between two players
function playRound(player1, player2) {
    const hand1 = player1.getHand();
    const hand2 = player2.getHand();

    console.log(`player1 (${player1.name}) hand: ${hand1}`);
    console.log(`player2 (${player2.name}) hand: ${hand2}`);

    if (hand1 === hand2) {
        console.log("It's a tie!");
        return null;
    } else if ((hand1 === "rock" && hand2 === "scissors") ||
               (hand1 === "paper" && hand2 === "rock") ||
               (hand1 === "scissors" && hand2 === "paper")) {
        console.log(`Winner: ${player1.name}`);
        return player1;
    } else {
        console.log(`Winner: ${player2.name}`);
        return player2;
    }
}

// Example usage:
const winner = playRound(player1, player2);
console.log("Winner:", winner && winner.name);
