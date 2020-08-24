var level = 6;
var colors = colorGenerator(level);
var squar = document.querySelectorAll(".colorSQ");
var colorPicker = picked();
var colorDisplay = document.getElementById("colorDisplay");
var MSG = document.getElementById("msg");
var reset = document.querySelector("#btnNew");
colorDisplay.textContent = colorPicker;
var mode = document.getElementsByClassName("mode");
for (var i = 0; i < mode.length; i++) {
  mode[i].addEventListener("click", function() {
    for (var i = 0; i < mode.length; i++) 
    {
      mode[i].classList.remove("active");
    }
    this.classList.add("active");

    this.textContent === "Easy" ? (level = 3) : (level = 6);

    resetAll();
  });
}

for (var i = 0; i < squar.length; i++) {
  squar[i].style.backgroundColor = colors[i];

  squar[i].addEventListener("click", function() {
    var answer = this.style.backgroundColor;

    if (answer === colorPicker) {
      console.log("tmam");
      MSG.textContent = "Correct";
      MSG.style.display = "block";
      changeColor(answer);
    } else {
      MSG.textContent = "Try Again";
      MSG.style.display = "block";
      this.style.backgroundColor = "#232323";
      this.style.cursor = "default";
    }
  });
}
function colorGenerator(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  var color = "rgb(" + r + ", " + g + ", " + b + ")";

  return color;
}

function picked() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function changeColor(color) {
  for (var i = 0; i < squar.length; i++) {
    squar[i].style.backgroundColor = color;

    document.getElementById("header").style.backgroundColor = color;
  }
}

reset.addEventListener("click", function() {
  resetAll();
});

function resetAll() {
  colors = colorGenerator(level);
  //pick new colors from array;
  colorPicker = picked();
  //change color display to match color
  colorDisplay.textContent = colorPicker;
  //change squares colors
  for (var i = 0; i < squar.length; i++) {
    if (colors[i]) {
      squar[i].style.display = "block";
      squar[i].style.backgroundColor = colors[i];
    } else {
      squar[i].style.display = "none";
    }
  }
  //reset header background
  document.getElementById("header").style.backgroundColor = "steelBlue";
  //remove msg
  MSG.style.display = "none";
  //cursur change
  for (var i = 0; i < squar.length; i++) {
    squar[i].style.cursor = "pointer";
  }
}
