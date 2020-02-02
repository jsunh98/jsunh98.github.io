var aboutRef = document.querySelector('.openAboutCard');
var aboutCard = document.querySelector('.aboutCard');

function attachCardListeners(cardElm) {
  cardElm.querySelector('.closeAboutCard').addEventListener('click', toggleAboutCard);
  cardElm.querySelector('.imgBx').addEventListener('click', toggleAboutCard);
}
function detachCardListeners(cardElm) {
  cardElm.querySelector('.closeAboutCard').removeEventListener('click', toggleAboutCard);
  cardElm.querySelector('.imgBx').removeEventListener('click', toggleAboutCard);
}

function toggleAboutCard() {
  var currentState = aboutCard.style.display;

  // If modal is visible, hide it. Else, display it.
  if (currentState === 'none') {
    aboutCard.style.display = 'block';
    attachCardListeners(card);
  } else {
    aboutCard.style.display = 'none';
    detachCardListeners(card);
  }
}
aboutRef.addEventListener('click', toggleAboutCard);
