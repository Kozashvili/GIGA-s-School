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


// dark mode light mode buttons 
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


  document.addEventListener("DOMContentLoaded", function () {
    const lightModeImg = document.getElementById("lightmodeimg");
  
    // Check screen width before applying the fade-in animation
    if (window.innerWidth < 1440) {
      lightModeImg.classList.add("fadeIn-once");
  
      // Remove the fadeIn-once class and update visibility after the initial delay
      setTimeout(function () {
        lightModeImg.classList.remove("fadeIn-once");
        lightModeImg.style.opacity = ""; // Reset the opacity
        lightModeImg.style.visibility = "visible"; // Make the element visible
      }, 3000); // 3 seconds delay (3000 milliseconds)
    } else {
      // For screen sizes 1440px and more, make the element immediately visible
      lightModeImg.style.visibility = "visible";
    }
  });
  
   

// Scroll up button
window.onscroll = function() {
  const scrollUpBtn = document.getElementById("scrollUpBtn");
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
};

// Function to smoothly scroll back to the top
function scrollToTop() {
  const scrollDuration = 300; // Duration of the scrolling animation in milliseconds
  const scrollStep = -window.scrollY / (scrollDuration / 15);
  let scrollInterval;

  function scrollAnimation() {
    if (window.scrollY === 0) {
      clearInterval(scrollInterval);
    } else {
      window.scrollBy(0, scrollStep);
    }
  }

  scrollInterval = setInterval(scrollAnimation, 15);
}


  //computer slideshow.
  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1; }    
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  
    // Resize images to match the container's size
    let container = document.querySelector(".Computerintro");
    let containerWidth = container.clientWidth;
    let containerHeight = container.clientHeight;
    let slideImages = document.querySelectorAll(".mySlides img");
  
    slideImages.forEach((img, index) => {
      if (index === 0) {
        img.style.width = "100%"; // Set the first slide's image width to 100%
        img.style.height = "1000px"; // Set the first slide's image height to 1000px
      } else {
        img.style.width = containerWidth + "px";
        img.style.height = containerHeight + "px";
      }
    });
  }
  //  იხილეთ მეტი button
  var slideButton = document.querySelector('.slidebuttons');

  slideButton.addEventListener('mouseenter', function() {
    slideButton.style.backgroundColor = '#ff69b4'; /* Change to the desired color on hover */
    slideButton.style.transform = 'scale(1.2)';
  });
  
  slideButton.addEventListener('mouseleave', function() {
    slideButton.style.backgroundColor = '#ffffff17'; /* Revert to the original background color */
    slideButton.style.transform = 'scale(1)';
  });
  
  