const width = 20;
const height = 20;
const board = document.querySelector(".board");

const snake = [6, 5, 4, 3, 2, 1, 0];
let currentDirection = "right"; 
let isGameStarted = false; 
let foodIndex; // משתנה גלובלי למיקום האוכל

function creatboard() {
  for (let i = 0; i < width * height; i++) {
    const div = document.createElement("div");
    board.appendChild(div);
  }
  snakeColor();
  SetRandomFood(); // יוצר אוכל ראשון כשהלוח נטען
}

function snakeColor() {
  const divs = board.querySelectorAll("div");
  divs.forEach((div) => div.classList.remove('snake', 'head'));
  
  snake.forEach((num) => {
    if (divs[num]) divs[num].classList.add("snake");
  });

  const headIndex = snake[0];
  if (divs[headIndex]) divs[headIndex].classList.add("head");
}

window.addEventListener("keydown", (event) => {
  event.preventDefault();

  if (!isGameStarted) {
    Startauto();
    isGameStarted = true;
  }

  switch (event.key) {
    case "ArrowUp":    if (currentDirection !== "down") currentDirection = "up"; break;
    case "ArrowDown":  if (currentDirection !== "up") currentDirection = "down"; break;
    case "ArrowRight": if (currentDirection !== "left") currentDirection = "right"; break;
    case "ArrowLeft":  if (currentDirection !== "right") currentDirection = "left"; break;
  }
});

function move(dir) {
  let head = snake[0];

  if (dir == "up")    head -= width;
  if (dir == "down")  head += width;
  if (dir == "right") head++;
  if (dir == "left")  head--;

  const hitTop = head < 0;
  const hitBottom = head >= width * height;
  const hitLeft = (dir === "left" && (head + 1) % width === 0);
  const hitRight = (dir === "right" && head % width === 0);
  const hitSelf = snake.includes(head);

  if (hitTop || hitBottom || hitLeft || hitRight || hitSelf) {
    location.reload(); 
    return;
  }

  // הוספת הראש החדש
  snake.unshift(head);

  // בדיקת אוכל:
  if (head === foodIndex) {
    SetRandomFood(); // רק אם אכלנו - מגרילים מיקום חדש
    // לא עושים pop, לכן הנחש מתארך
  } else {
    snake.pop(); // לא אכלנו - מורידים זנב כדי לשמור על האורך
  }

  snakeColor();
  // מחקנו מכאן את הכפילויות שהיו לך קודם!
}

function Startauto() {
  setInterval(() => {
    move(currentDirection);
  }, 100); 
}

function SetRandomFood() {
  const divs = board.querySelectorAll("div");
  divs.forEach(div => div.classList.remove("food"));

  let newFood;
  do {
    newFood = Math.floor(Math.random() * (width * height));
  } while (snake.includes(newFood));

  foodIndex = newFood;
  divs[foodIndex].classList.add("food");
}

creatboard();

