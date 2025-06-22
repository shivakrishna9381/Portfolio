const cards = document.querySelectorAll('.card');
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');

let current = 2; // Start from the center card

function updateCarousel() {
  cards.forEach((card, index) => {
    card.classList.remove('active');
    card.style.transform = 'scale(0.85)';
    card.style.opacity = '0.5';
  });

  if (cards[current]) {
    cards[current].classList.add('active');
    cards[current].style.transform = 'scale(1)';
    cards[current].style.opacity = '1';
  }
}

leftBtn.addEventListener('click', () => {
  if (current > 0) current--;
  updateCarousel();
});

rightBtn.addEventListener('click', () => {
  if (current < cards.length - 1) current++;
  updateCarousel();
});

updateCarousel(); // Initial load