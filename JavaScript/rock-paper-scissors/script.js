const emojies = ['😎', '🎉', '🏆', '🔥', '🥳'];

// טעינת הניקוד מהזיכרון או יצירת חדש
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

// עדכון התצוגה בטעינה ראשונה
updateScoreElement();

function pickComputerMove() {
    const rand = Math.random();
    if (rand < 1/3) return 'rock';
    if (rand < 2/3) return 'paper';
    return 'scissors';
}

function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'rock') {
        result = computerMove === 'rock' ? 'tie' : computerMove === 'paper' ? 'you lose' : 'you win';
    } else if (playerMove === 'paper') {
        result = computerMove === 'rock' ? 'you win' : computerMove === 'paper' ? 'tie' : 'you lose';
    } else if (playerMove === 'scissors') {
        result = computerMove === 'rock' ? 'you lose' : computerMove === 'paper' ? 'you win' : 'tie';
    }

    if (result === 'you win') score.wins++;
    else if (result === 'you lose') score.losses++;
    else score.ties++;

    // שמירה לזיכרון
    localStorage.setItem('score', JSON.stringify(score));
    
    let emo = result === 'you win' ? ' ' + emojies[Math.floor(Math.random() * emojies.length)] : '';

    // עדכון המסך
    document.querySelector('.results').textContent = result + emo;
    document.querySelector('.picks').textContent = `You: ${playerMove} | Computer: ${computerMove}`;
    updateScoreElement();
}

function updateScoreElement() {
    document.querySelector('.score').textContent = 
        `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElement();
    document.querySelector('.results').textContent = 'Score Cleared';
    document.querySelector('.picks').textContent = '';
}

function autoPlay() {
    const moves = ['rock', 'paper', 'scissors'];
    const randomMove = moves[Math.floor(Math.random() * 3)];
    playGame(randomMove);
}