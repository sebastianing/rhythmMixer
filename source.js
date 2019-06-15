mixButton = document.getElementById("mix");
resetButton = document.getElementById("reset");
randomizeButton = document.getElementById("randomize");
outputBox = document.getElementById("output");

var inputs = document.getElementsByTagName("input");
var checked;
var unchecked;
function checkBoxes() {
  checked = [];
  unchecked = [];
  for (i = 0; i < inputs.length; i++) {
    if (inputs[i].checked == true) {
      checked.push(inputs[i]);
    } else {
      unchecked.push(inputs[i]);
    }
  }
  if (checked.length > 0) {
    mixButton.disabled = false;
  } else {
    mixButton.disabled = true;
  }
  if (checked.length == 0) {
    resetButton.disabled = true;
  } else {
    resetButton.disabled = false;
  }
}

function reset() {
  for (var i = 0; i < checked.length; i++) {
    checked[i].checked = false;
  }
  checked = [];
  resetButton.disabled = true;
  mixButton.disabled = true;
}

function randomize() {
  reset();
  for (var i = 0; i < 4; i++) {
    unchecked[Math.floor(Math.random() * unchecked.length)].checked = true;
    checkBoxes();
  }
}

music = ["X=È=", "X==X==", "È=È=", "H=X¹==", "H=X==H=", "X¹==H=", "È=È=", "È=X=="];
function mix() {
  musicString = "<span>2";
  for (var i = 0; i < 8; i++) {
    randomItem = Math.floor(Math.random()*checked.length);
    if (i != 0) {
      musicString += "<span>=";
    }
    musicString += music[checked[randomItem].id];
    musicString += "!</span>";
  }
  musicString = musicString.substring(0, musicString.length - 7);
  musicString += ".";
  output.innerHTML = musicString;
}

resetButton.addEventListener("click", reset, true);
randomizeButton.addEventListener("click", randomize, true);
mixButton.addEventListener("click", mix, true);
document.addEventListener("click", checkBoxes, true);
