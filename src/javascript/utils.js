document.addEventListener('DOMContentLoaded', (event) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const word = document.querySelector("#changing_text");
  const texts = ["InfoSec Professionals.", "Bug Bounty Hunters.", "Passionate Students.", "Spicy Hackers."];
  let textIndex = 0;

  animate();

  setInterval(() => {
    textIndex = (textIndex + 1) % texts.length;
    animate();
  }, 4000);

  function animate() {
    let iterations = 0;
    const originalText = texts[textIndex];
    let timeout;

    const changeLetter = () => {
      word.innerText = originalText
        .split("")
        .map((letter, index) => {
          if (index < iterations) {
            return originalText[index];
          }
          if (letter == " ") {
            return " ";
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      iterations += 1 / 3;
      if (iterations < word.innerText.length) {
        timeout = setTimeout(changeLetter, 30);
      }
    }

    timeout = setTimeout(changeLetter, 30);
  }
});
