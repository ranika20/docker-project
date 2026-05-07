function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";

        if (computerMove === "rock") {
          if (playerMove === "rock") {
            result = "tie";
          } 
          else if (computerMove === "paper")
              result = "you lose";
            } 
            else if (computerMove === "scissors")
              {
                result = "you win";
              }
               else if (playerMove === "paper") {
                if (computerMove === "rock") {
                  result = "you win";
                } else if (computerMove === "paper") {
                  result = "tie";
                } else if (computerMove === "scissors") {
                  result = "you lose";
                }
              } else if (playerMove === "scissors") {
                if (computerMove === "rock") {
                  result = "you lose";
                } else if (computerMove === "paper") {
                  result = "you win";
                } else if (computerMove === "scissors") {
                  result = "tie";
                }
              }
        }

        {
          document.getElementById("result").textContent =
            "you picked " +
            playerMove +
            ". " +
            "Computer picked " +
            computerMove +
            ". " +
            " result : " +
            result;
        }
    

      function pickcomputerMove() {
        const randnumber = Math.random();

        let computerMove = "";

        if (randnumber >= 0 && randnumber < 1 / 3) {
          computerMove = "rock";
        } else if (randnumber >= 1 / 3 && randnumber < 2 / 3) {
          computerMove = "paper";
        } else if (randnumber >= 2 / 3 && randnumber < 1) {
          computerMove = "scissors";
        }
        return computerMove;
      }


           const emojies = ['😎', '🎉', '🏆', '🔥', '🥳'];
      
      function playGame(player) {
        const rand = Math.random();
        let comp = '';
        if (rand < 1 / 3) {
          comp = 'rock';
        } else if (rand < 2 / 3) {
          comp = 'paper';
        } else {
          comp = 'scissors';
        }

        let res = '';
        if (player === 'rock') {
          res = comp === 'rock' ? 'tie' : comp === 'paper' ? 'you lose' : 'you win';
        } else if (player === 'paper') {
          res = comp === 'rock' ? 'you win' : comp === 'paper' ? 'tie' : 'you lose';
        } else {
          res = comp === 'rock' ? 'you lose' : comp === 'paper' ? 'you win' : 'tie';
        }

        let emo = '';
        if (res === 'you win') {
          emo = ' ' + emojies[Math.floor(Math.random() * emojies.length)];
        }
        alert(document.getElementById('result').textContent =
          'Computer picked ' + comp + '. ' + res + emo;)
      }
