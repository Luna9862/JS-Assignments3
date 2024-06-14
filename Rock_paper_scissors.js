const hands = ['rock', 'paper', 'scissors'];

function getHand() {
    return hands[parseInt(Math.random()*10) % 3];
}

function playRound(player1, player2) {
    const hand1 = getHand();
    const hand2 = getHand();

    console.log(`player1 (${player1.name}) hand: ${hand1}`);
    console.log(`player2 (${player2.name}) hand: ${hand2}`);

    if (hand1 === hand2) {
        console.log("It's a tie!");
        return "tie";
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


function playGame(player1, player2, playUntil) {
    let player1Wins = 0;
    let player2Wins = 0;

    while (player1Wins < playUntil && player2Wins < playUntil) {
        const winner = playRound(player1, player2);
        if (winner === player1) {
            player1Wins++;
        } else if (winner === player2) {
            player2Wins++;
        }
        console.log(`Score: ${player1.name}: ${player1Wins} - ${player2.name}: ${player2Wins}`);
    }

    if (player1Wins === playUntil) {
        return player1;
    } else {
        return player2;
    }
}



function playTournament(player1, player2, player3, player4, playUntil) {
    console.log("First round:");
    const winner1 = playGame(player1, player2, playUntil);
    const winner2 = playGame(player3, player4, playUntil);
    
    console.log("Second round:");
    const tournamentWinner = playGame(winner1, winner2, playUntil);
    
    console.log(`${tournamentWinner.name} is the world champion`);
}


const player1 = { name: "Robert" };
const player2 = { name: "Leo" };
const player3 = { name: "Racheal" };
const player4 = { name: "Ria" };

playTournament(player1, player2, player3, player4, 3);