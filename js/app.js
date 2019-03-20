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


const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelector('.carousel-slide img');

// buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// counter
let counter = 1;
const size = carouselImages[0].clientWidth;
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// button listeners
nextBtn.addEventListener('click', ()=>{
  if (counter >= carouselImages.length -1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})
prevBtn.addEventListener('click', ()=>{
    if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

carouselSlide.addEventListener('transitionend', ()=> {
  if (carouselImages[counter.id === 'lastClone']) {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
      carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if (carouselImages[counter.id === 'firstClone']) {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
      carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
})
