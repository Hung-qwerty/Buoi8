const randomNumber = Math.floor(Math.random() * 10) + 1;

let userGuess;
do {
  userGuess = parseInt(prompt("Hãy đoán một số từ 1 đến 10:"));
} while (userGuess !== randomNumber);

alert("Chúc mừng! Bạn đã đoán đúng số " + randomNumber);
