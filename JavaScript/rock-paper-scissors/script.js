const emojies = ['😎', '🎉', '🏆', '🔥', '🥳'];

// הגדרת אובייקט הספירה מחוץ לפונקציה כדי שיישמר בין משחק למשחק
const score = {
  wins: 0,
  losses: 0,
  ties: 0
};

function startauto() {
setInterval(() => {
  const moves = ['rock', 'paper', 'scissors'];
  const randomMove = moves[Math.floor(Math.random() * moves.length)];
  playGame(randomMove);
}, 1000);

} 


function pickComputerMove() {
  const randNumber = Math.random();
  if (randNumber < 1 / 3) return "rock";
  if (randNumber < 2 / 3) return "paper";
  return "scissors";
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";



  // חישוב התוצאה
  if (playerMove === 'rock') {
    result = computerMove === 'rock' ? 'tie' : computerMove === 'paper' ? 'you lose' : 'you win';
  } else if (playerMove === 'paper') {
    result = computerMove === 'rock' ? 'you win' : computerMove === 'paper' ? 'tie' : 'you lose';
  } else if (playerMove === 'scissors') {
    result = computerMove === 'rock' ? 'you lose' : computerMove === 'paper' ? 'you win' : 'tie';
  }

  // עדכון הספירה (ה-Score)
  if (result === 'you win') {
    score.wins += 1;
  } else if (result === 'you lose') {
    score.losses += 1;
  } else if (result === 'tie') {
    score.ties += 1;
  }

  // בחירת אימוג'י בניצחון
  let emo = '';
  if (result === 'you win') {
    emo = ' ' + emojies[Math.floor(Math.random() * emojies.length)];
  }

  // הצגת התוצאה והספירה המעודכנת על המסך
  document.getElementById('result').innerHTML = `
    You picked ${playerMove}. Computer picked ${computerMove}. <br>
    <strong>Result: ${result}${emo}</strong> <br><br>
    Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}
  `;
}
