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

function applyDarkMode() {
    // Add the dark-mode class to the body or any other parent element
    document.body.classList.add('dark-mode');
  }
  
  function applyLightMode() {
    // Remove the dark-mode class from the body or any other parent element
    document.body.classList.remove('dark-mode');
  }
  
  // Example usage when switching modes
  const darkModeButton = document.getElementById('darkModeButton');
  const lightModeButton = document.getElementById('lightModeButton');
  
  darkModeButton.addEventListener('click', applyDarkMode);
  lightModeButton.addEventListener('click', applyLightMode);