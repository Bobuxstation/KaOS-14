//background
function bg1() {
   document.getElementById("body").style.backgroundImage = "url(bg.jpg)";
}
function bg2() {
   document.getElementById("body").style.backgroundImage = "url(citywater.png)";
}
function bg3() {
   document.getElementById("body").style.backgroundImage = "url(Flowers.png)";
}
function bg4() {
   document.getElementById("body").style.backgroundImage = "url(Boardwalk.png)";
}
function custom_bg(event) {
  var reader = new FileReader();
  reader.onload = function() {
    document.getElementById("body").style.backgroundImage = `url(${reader.result})`;
    document.getElementById("body").style.backgroundSize = 'cover';
  }
  reader.readAsDataURL(event.target.files[0]);
}

//Color scheme

function color1() {
  document.getElementById("header").style.backgroundColor = "#75cbed";
}
function getcolor() {
  a = document.getElementById("color").value;
  document.getElementById("header").style.backgroundColor = a;
}
function cssimport() {
  b = document.getElementById("cssimport").value;
  document.getElementById("style").href = b;
}

//themes

function theme1() {
  document.getElementById("style").href = "style.css";
}
function theme2() {
  document.getElementById("style").href = "classic.css";
}
function theme3() {
  document.getElementById("style").href = "darkmode.css";
}
function theme4() {
  document.getElementById("style").href = "lightmode.css";
}