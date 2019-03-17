function myFunction() {
  var x = document.getElementById("myNav");
  if (x.className === "navList") {
    x.className += "responsive";
  } else {
    x.className = "navList";
  }
}

var modal1 = document.getElementById('aboutModal');
var aboutmelink = document.getElementById('aboutMeLink');
var span = document.getElementsByClassName('close1')[0];

aboutmelink.onclick = function() {
  modal1.style.display = "block";
}
span.onclick = function() {
  modal1.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.dipslay = "none";
  }
}
var modal2 = document.getElementById('skillsModal');
var skillslink = document.getElementById('skillsLink');
var span = document.getElementsByClassName('close2')[0];

skillslink.onclick = function() {
  modal2.style.display = "block";
}
span.onclick = function() {
  modal2.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.dipslay = "none";
  }
}
