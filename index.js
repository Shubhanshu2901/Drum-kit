//Triggers for mouse Clicks

for (i = 0; i < document.getElementsByClassName("drum").length; i++) {
  document.getElementsByClassName("drum")[i].addEventListener("click", function() {

    buttonType = this.innerHTML;
    playSound(buttonType);
    animationFlash(buttonType);

  });
}

// Trigger for key press on entire document
document.addEventListener("keydown", function(event) { playSound(event.key); animationFlash(event.key); })

// function that plays sound
function playSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio("tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("kick-bass.mp3");
      kick.play();
      break;

    default:

  }
}
// function that animates

function animationFlash(key){
  var pressedButton = document.querySelector("." + key);
  pressedButton.classList.add("pressed");
  setTimeout(function() { pressedButton.classList.remove("pressed"); }, 100)
}
