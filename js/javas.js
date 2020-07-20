function clickMe() {
  
  let person = prompt("Welcome to my portfolio, please tell me your name?");

  if (person == null || person == "") {
    txt = "User cancelled the prompt.";
  } else {
    alert("Thank you for visiting my portfolio " + person + ".");
  } 
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display="block";
  setTimeout(showSlides, 10000); // Change image every 10 seconds
}

let slideIndex = 0;
showSlides();