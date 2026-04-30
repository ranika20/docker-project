
const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

// פונקציה ייעודית לעדכון הניקוד - כדי שנוכל לקרוא לה מכל מקום
function updateScoreElement() {
  document.querySelector(".score").innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

// קריאה ראשונית כדי שהניקוד יופיע מיד כשהדף נטען
updateScoreElement();

const emojies = ["😎", "🎉", "🏆", "🔥", "🥳"];

 function updateScore() {
  document.querySelector(".score").innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
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

  // קביעת התוצאה
  if (playerMove === "rock") {
    result = computerMove === "rock" ? "tie" : computerMove === "paper" ? "you lose" : "you win";
  } else if (playerMove === "paper") {
    result = computerMove === "rock" ? "you win" : computerMove === "paper" ? "tie" : "you lose";
  } else if (playerMove === "scissors") {
    result = computerMove === "rock" ? "you lose" : computerMove === "paper" ? "you win" : "tie";
  }

  // עדכון הניקוד באובייקט
  if (result === "you win") {
    score.wins += 1;
  } else if (result === "you lose") {
    score.losses += 1;
  } else if (result === "tie") {
    score.ties += 1;
  }

  // שמירה ב-localStorage
  localStorage.setItem("score", JSON.stringify(score));

  // חישוב אימוג'י לניצחון
  let emoji = "";
  if (result === "you win") {
    emoji = " " + emojies[Math.floor(Math.random() * emojies.length)];
  }

  // עדכון ה-DOM על המסך
  document.querySelector(".picks").innerHTML = `You picked ${playerMove} - Computer picked ${computerMove}`;
  document.querySelector(".results").innerHTML = result + emoji; // שים לב: results עם s בסוף כמו ב-HTML שלך
  updateScore();
}


  // alert(finalMessage); // הצגת התוצאה בחלון קופץ

