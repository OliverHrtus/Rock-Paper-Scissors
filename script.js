let computerScore = 0;
let playerScore = 0;


const choices = ['rock', 'paper', 'scissors'];
const choiceImages = {
    rock: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d4/Stone.png',      
    paper: 'https://static.wikia.nocookie.net/shivaxis-rlcraft/images/b/b2/Paper.png',   
    scissors: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5a/Shears_JE2_BE2.png'
};

function playGame(playerChoice) {
    
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = determineWinner(playerChoice, computerChoice);

    if (result === 'win') {
        playerScore++;
    } else if (result === 'lose') {
        computerScore++;
    }

    displayResult(playerChoice, computerChoice, result);
    updateScoreboard();
}

function determineWinner(player, computer) {
    if (player === computer) {
        return 'tie';
    }
    if ((player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')) {
        return 'win';
    }
    return 'lose';
}

function displayResult(playerChoice, computerChoice, result) {
    const choicesDiv = document.getElementById('choices');
    const resultDiv = document.getElementById('result');

    
    choicesDiv.innerHTML = `
        <img src="${choiceImages[playerChoice]}" alt="${playerChoice}" class="choice-img">
        <span class="vs-text">vs</span>
        <img src="${choiceImages[computerChoice]}" alt="${computerChoice}" class="choice-img">
    `;

    if (result === 'win') {
        resultDiv.innerHTML = 'You Win!';
        resultDiv.className = 'result-text win';
    } else if (result === 'lose') {
        resultDiv.innerHTML = 'You Lose!';
        resultDiv.className = 'result-text lose';
    } else {
        resultDiv.innerHTML = 'It\'s a Tie!';
        resultDiv.className = 'result-text tie';
    }
}

function updateScoreboard() {
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScoreboard();
    document.getElementById('choices').innerHTML = '';
    document.getElementById('result').innerHTML = '';
    document.getElementById('result').className = 'result-text';
}