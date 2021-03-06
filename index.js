//Adding EventListeners to all the buttons
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click" ,
  function () {
    var buttonInnerHTML = this.innerHTML
        makeSound(buttonInnerHTML);
        keyAnimation(buttonInnerHTML);
    }
  );
}


//Detecting Keyboard
document.addEventListener ("keydown" ,
  function (event) {
    makeSound(event.key);
    keyAnimation(event.key);
})



//Making the Sounds!
function makeSound (key){
  switch (key) {
    case "w":
        (new Audio("sounds/tom-1.mp3")).play();
      break;

    case "a":
        (new Audio("sounds/tom-2.mp3")).play();
      break;

    case "s":
      (new Audio("sounds/tom-3.mp3")).play();
    break;

    case "d":
      (new Audio("sounds/tom-4.mp3")).play();
    break;

    case "j":
      (new Audio("sounds/crash.mp3")).play();
    break;

    case "k":
      (new Audio("sounds/snare.mp3")).play();
    break;

    case "l":
      (new Audio("sounds/kick-bass.mp3")).play();
    break;

    default: console.log(buttonInnerHTML)

  }
}

function keyAnimation(currentKey) {
  var activeKey = document.querySelector("." + currentKey);
  activeKey.classList.add("pressed");

  setTimeout(function () {
    activeKey.classList.remove("pressed")
  }, 100);
}
