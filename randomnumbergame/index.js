// our deck of cards
var DECK = [
    { suit: 'clubs', rank: 'Ace', value: [ 1, 10 ] },
    { suit: 'clubs', rank: '2', value: 2 },
    { suit: 'clubs', rank: '3', value: 3 },
    { suit: 'clubs', rank: '4', value: 4 },
    { suit: 'clubs', rank: '5', value: 5 },
    { suit: 'clubs', rank: '6', value: 6 },
    { suit: 'clubs', rank: '7', value: 7 },
    { suit: 'clubs', rank: '8', value: 8 },
    { suit: 'clubs', rank: '9', value: 9 },
    { suit: 'clubs', rank: '10', value: 10 },
    { suit: 'clubs', rank: 'Jack', value: 10 },
    { suit: 'clubs', rank: 'Queen', value: 10 },
    { suit: 'clubs', rank: 'King', value: 10 },

    { suit: 'diamonds', rank: 'Ace', value: [ 1, 10 ] },
    { suit: 'diamonds', rank: '2', value: 2 },
    { suit: 'diamonds', rank: '3', value: 3 },
    { suit: 'diamonds', rank: '4', value: 4 },
    { suit: 'diamonds', rank: '5', value: 5 },
    { suit: 'diamonds', rank: '6', value: 6 },
    { suit: 'diamonds', rank: '7', value: 7 },
    { suit: 'diamonds', rank: '8', value: 8 },
    { suit: 'diamonds', rank: '9', value: 9 },
    { suit: 'diamonds', rank: '10', value: 10 },
    { suit: 'diamonds', rank: 'Jack', value: 10 },
    { suit: 'diamonds', rank: 'Queen', value: 10 },
    { suit: 'diamonds', rank: 'King', value: 10 },

    { suit: 'hearts', rank: 'Ace', value: [ 1, 10 ] },
    { suit: 'hearts', rank: '2', value: 2 },
    { suit: 'hearts', rank: '3', value: 3 },
    { suit: 'hearts', rank: '4', value: 4 },
    { suit: 'hearts', rank: '5', value: 5 },
    { suit: 'hearts', rank: '6', value: 6 },
    { suit: 'hearts', rank: '7', value: 7 },
    { suit: 'hearts', rank: '8', value: 8 },
    { suit: 'hearts', rank: '9', value: 9 },
    { suit: 'hearts', rank: '10', value: 10 },
    { suit: 'hearts', rank: 'Jack', value: 10 },
    { suit: 'hearts', rank: 'Queen', value: 10 },
    { suit: 'hearts', rank: 'King', value: 10 },

    { suit: 'spades', rank: 'Ace', value: [ 1, 10 ] },
    { suit: 'spades', rank: '2', value: 2 },
    { suit: 'spades', rank: '3', value: 3 },
    { suit: 'spades', rank: '4', value: 4 },
    { suit: 'spades', rank: '5', value: 5 },
    { suit: 'spades', rank: '6', value: 6 },
    { suit: 'spades', rank: '7', value: 7 },
    { suit: 'spades', rank: '8', value: 8 },
    { suit: 'spades', rank: '9', value: 9 },
    { suit: 'spades', rank: '10', value: 10 },
    { suit: 'spades', rank: 'Jack', value: 10 },
    { suit: 'spades', rank: 'Queen', value: 10 },
    { suit: 'spades', rank: 'King', value: 10 }
];

// default score value
var score = 0;
var pickedCards = [];

// generate random number 
// range: number
function generateRandomNumber(range) {

    if ([1,5,8,9].indexOf(Math.round(Math.random() * range)) > -1) {
        generateRandomNumber();
        return;
    }


    
    return Math.round(Math.random() * range);
}


// run the game
function runTheGame() {
    console.log(DECK[generateRandomNumber(51)])

    // pick cardName
    var cardName = DECK[generateRandomNumber(51)].suit;
    // pick card value
    var cardValue = DECK[generateRandomNumber(51)].value;


    // check Ace value
    // or update Ace value
    if (Array.isArray(cardValue) ) {
        cardValue = cardValue[1]; 

        if (score === 20)
            cardValue = cardValue[0];    
    }

    // update score
    if (score < 21) {
        score = score + cardValue;
    }
    
    // if player loose the game
    if (score > 21) {
        console.log(`Player score is: ${score}!!!`);
        score = 0;
    }
       
    // if player win the game
    if (score === 21) {
        console.log(`Player score is: ${score}!!!`);
        score = 0;
    }
    
    // show score, cardValue, cardName
    console.log(`Player score is: ${score}!!!`);
    console.log(cardName);
    console.log(cardValue);
}

function resetDeckOfCards() {

}

function removeCurrentCardByIndex() {

}

// TODO DELETE USED CARD FROM ARRAY
// TD SCORE UI ISSUE
// 
