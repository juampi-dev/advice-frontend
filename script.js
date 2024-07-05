const url = 'https://api.adviceslip.com/advice'
const adviceTitle = document.getElementsByClassName('quoteTitle')[0];
const adviceQuote = document.getElementsByClassName('quote')[0];
const diceButton = document.getElementsByClassName('diceButton')[0];

function fetchQuote() {
    fetch(url)
        .then(response => response.json())
        .then(data => showQuote(data));
}

function showQuote(quote){
    adviceTitle.innerHTML = `ADVICE #${quote.slip.id}`;
    adviceQuote.innerHTML = `"${quote.slip.advice}"`
}

diceButton.addEventListener('click', fetchQuote);

fetchQuote();