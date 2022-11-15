import RenderCardsLogo from './js/renderCardsLogo';
import cardsLogoArray from './js/cardsLogoArray';
import LuhnCheck from './js/luhnCheck';
import './css/style.css';

document.addEventListener('DOMContentLoaded', () => {
  const containerEl = document.querySelector('.cards-container');
  const formEl = document.querySelector('.card-number-form');
  const inputEl = document.querySelector('.form-input');

  (() => {
    new RenderCardsLogo(containerEl, cardsLogoArray);
  })();
  (() => {
    new LuhnCheck(formEl, inputEl);
  })();
});
