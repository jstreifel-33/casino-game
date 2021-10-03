//CARD CONSTRUCTOR
function Card(deckIndex) {
  this.rank = getRank(deckIndex),
    this.suit = getSuit(deckIndex),
    this.value = getValue(deckIndex)
}

//returns 1-10, J, Q, K based on input (for use in 52 step FOR loop)
function getRank(n) {
  let cardRankIndex = ((n + 1) % 13);
  if (cardRankIndex > 10 || cardRankIndex < 2) {
    switch (cardRankIndex) {
      case 11:
        return 'J';
        break;
      case 12:
        return 'Q';
        break;
      case 0:
        return 'K';
        break;
      case 1:
        return 'A';
        break;
    }
  } else {
    return (cardRankIndex);
  }
}

//Return 1 of 4 suits based on input (for use in 52 step FOR loop)
function getSuit(n) {
  let suitIndex = Math.floor(n / 13);
  switch (suitIndex) {
    case 0:
      return 'H';
      break;
    case 1:
      return 'D';
      break;
    case 2:
      return 'C';
      break;
    case 3:
      return 'S';
      break;
  }
}

function getValue(n) {
  let cardRankIndex = ((n + 1) % 13);
  if (cardRankIndex < 11 && cardRankIndex > 0) {
    return cardRankIndex;
  } else {
    return 10
  }
}

//DECK STUFF
function Deck() {
  this.deck = [];
}

//places fresh in shoe as array. Jokers optional.
Deck.prototype.newDeck = function (deckNum) {
  this.deck = []
  let joke = prompt('Do you want jokers? (y/n)').toLowerCase();

  for (let i = 0; i < deckNum; i++) {
    for (let j = 0; j < 52; j++) {
      this.deck.push(new Card(j));
    }
    if (joke == 'y') {
      this.deck.push({rank:'Joker',suit:null,value:null,}, {rank:'Joker',suit:null,value:null,});
    }
  }
}

//Shuffles current shoe of cards
Deck.prototype.shuffle = function () {
  let shuffled = [];
  while (this.deck.length > 0) {
    let index = Math.floor(Math.random() * (this.deck.length));
    let randCard = this.deck[index];
    shuffled.push(randCard);
    this.deck.splice(index, 1);
  }
  this.deck = shuffled;
}

//Create dealer function. Input number of cards to deal, [player hand], and [deck].
Deck.prototype.deal = function (n, player) {
  //Check number of cards in deck, deal if possible.
  if (this.deck.length > 0) {
    for (i = 0; i < n; i++) {
      topCard = this.deck[0];
      this.deck.shift();
      player.push(topCard);
    }
    //Alert user if out of cards.
  } else {
    console.log("out of cards!")
  }
}

let game = new Deck();

//HELP
//give the user instructions if they need them.
function help() {
  console.log('New deck: game.newDeck(number of decks)');
  console.log('To shuffle: game.shuffle');
}
//tell user about instructions.
console.log("call function help() for help!");