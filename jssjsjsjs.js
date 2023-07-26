var cards = document.querySelectorAll('.card');

cards.forEach(function (card) {
  card.addEventListener('click', function () {
     // Remove the class on all, toggle the clicked one
     cards.forEach(function (c) {
       if (c !== card) c.classList.remove('is-flipped');
       else c.classList.toggle('is-flipped');
     });
  });
});

const textElement = document.getElementById("companyTitleTransformation");
const text = "Mechatron - მექატრონი";
let index = 0;

function displayNextLetter() {
  if (index < text.length) {
    textElement.textContent += text.charAt(index);
    index++;
  } else {
    clearInterval(letterInterval);
  }
}

const letterInterval = setInterval(displayNextLetter, 50); // Adjust the delay between letters here (in milliseconds)

