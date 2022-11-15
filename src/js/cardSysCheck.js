import cardsLogoArray from './cardsLogoArray';

const checkSys = (inputEl, luhnCheck = true) => {
  const currentCardPrefix = +inputEl.value[0];

  const currentCard = cardsLogoArray.find((card) => card.prefix === currentCardPrefix);

  const notTransparentLogo = Array.from(document.querySelectorAll('.card-logo')).find((card) => card.className === 'card-logo');

  if (notTransparentLogo) {
    notTransparentLogo.className = 'card-logo transparent';
  }

  const cardEl = document.querySelector(`.card-logo[data-card-name="${currentCard.name}"]`);

  if (currentCard && luhnCheck) {
    cardEl.classList.remove('transparent');
  } else {
    cardEl.classList.add('transparent');
  }
};

export default checkSys;
