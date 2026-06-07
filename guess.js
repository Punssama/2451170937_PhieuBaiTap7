function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function startGame() {
  const answer = getRandomNumber();
  const guessedNumbers = [];
  const maxAttempts = 7;
  let attempts = 0;

  alert("Game bắt đầu! Hãy đoán số từ 1 đến 100.");

  while (attempts < maxAttempts) {
    const input = prompt(
      `Lần đoán ${attempts + 1}/${maxAttempts}. Nhập số từ 1-100:`,
    );

    if (input === null) {
      alert("Bạn đã hủy trò chơi.");
      return;
    }

    const guess = Number(input.trim());

    if (!Number.isInteger(guess) || guess < 1 || guess > 100) {
      alert("Vui lòng nhập một số nguyên hợp lệ từ 1 đến 100.");
      continue;
    }

    if (guessedNumbers.includes(guess)) {
      alert("Bạn đã đoán số này rồi!");
      continue;
    }

    guessedNumbers.push(guess);
    attempts++;

    if (guess === answer) {
      alert(`Đúng rồi! Bạn đoán đúng sau ${attempts} lần!`);
      return;
    }

    if (guess < answer) {
      alert("Cao hơn");
    } else {
      alert("Thấp hơn");
    }
  }

  alert(`Bạn đã hết 7 lượt đoán. Đáp án là ${answer}.`);
}

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("startGameBtn");
  if (button) {
    button.addEventListener("click", startGame);
  }
});
