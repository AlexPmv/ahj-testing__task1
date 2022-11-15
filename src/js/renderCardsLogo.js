export default class RenderCardsLogo {
  constructor(parentEl, cardsLogoArray) {
    this.parentEl = parentEl;
    this.cardsLogoArray = cardsLogoArray;
    this.addCardsLogoToDom();
  }

  addCardsLogoToDom() {
    this.cardsLogoArray.forEach((card) => {
      const cardEl = document.createElement('img');
      cardEl.classList.add('card-logo', 'transparent');
      cardEl.dataset.cardName = card.name;
      cardEl.src = `./img/${card.fileName}`;

      this.parentEl.appendChild(cardEl);
    });
  }
}
