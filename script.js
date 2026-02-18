let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
let played = [];

const deck = document.getElementById("deck");
const playedCards = document.getElementById("played");

function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

shuffleDeck(cards);

deck.addEventListener("click", () => {
  played.push(cards.pop());
  render();
});

function render() {
  if (played.length === 1) {
    playedCards.classList.toggle("played");
  }
  countPlayed();
}

function countPlayed() {
  let totalScore = played.reduce((sum, card) => {
    let faceCard = typeof card === "string" ? 10 : card;
    return sum + faceCard;
  }, 0);
  console.log(totalScore);
}
