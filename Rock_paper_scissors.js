const hands = ['rock', 'paper', 'scissors'];

function getHand() {
    return hands[parseInt(Math.random()*10) % 3];
}

function playRound(firstplayer,secondplayer) {

    const hand1 = firstplayer.handshake;
    const hand2 = secondplayer.handshake;

    console.log(`firstplayer (${firstplayer.name}) hand: ${hand1}`);
    console.log(`secondplayer (${secondplayer.name}) hand: ${hand2}`);

    if (hand1 === hand2) {
        console.log("It's a tie!");
        return null;
    } else if ((hand1 === "rock" && hand2 === "scissors") ||
               (hand1 === "paper" && hand2 === "rock") ||
               (hand1 === "scissors" && hand2 === "paper")) {
        console.log(`Winner: ${firstplayer.name}`);
        return firstplayer;
    } else {
        console.log(`Winner: ${secondplayer.name}`);
    }
}
let firstplayer = {
    name: "Robert",
    handshake: getHand()
}

let secondplayer = {
    name: "Jason",
    handshake: getHand()
}
const winner = playRound(firstplayer, secondplayer);


