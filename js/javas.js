function clickMe() {
  
  let person = prompt("Welcome to my portfolio, please tell me your name?");

  if (person == null || person == "") {
    txt = "User cancelled the prompt.";
  } else {
    alert("Thank you for visiting my portfolio " + person + ".");
  } 
}



