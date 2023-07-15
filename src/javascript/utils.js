const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const word = document.querySelector("#changing_text");
const texts = ["InfoSec Professionals.", "Bug Bounty Hunters.", "Passionate Students.", "Spicy Hackers."];
let textIndex = 0;

// Start the animation immediately when the page loads
animate();

// Then continue to change text every 8 seconds
setInterval(() => {
  textIndex = (textIndex + 1) % texts.length;
  animate();
}, 4000);

function animate() {
  let iterations = 0;
  const originalText = texts[textIndex];

  const interval = setInterval(() => {
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

    if (iterations >= word.innerText.length) clearInterval(interval);

    iterations += 1 / 3;
  }, 30);
}
