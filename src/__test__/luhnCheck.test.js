/**
 * @jest-environment jsdom
 */

import LuhnCheck from '../js/luhnCheck';
import RenderCardsLogo from '../js/renderCardsLogo';
import cardsLogoArray from '../js/cardsLogoArray';

test('Should add green-bkg class', () => {
  document.body.innerHTML = `<div class="cards-container"></div>
                            <form id="form" class="card-number-form">
                              <div class="form-group">
                                <input class="form-input" id="card_number" name="card_number" placeholder="Credit card number">
                                <button class="btn-validate" type="submit"></button>
                              </div>
                            </form>`;

  const containerEl = document.querySelector('.cards-container');
  const formEl = document.querySelector('.card-number-form');
  const inputEl = document.querySelector('.form-input');
  const btnEl = document.querySelector('.btn-validate');

  new RenderCardsLogo(containerEl, cardsLogoArray);
  new LuhnCheck(formEl, inputEl);

  inputEl.value = '5262505037298171';
  btnEl.click();

  expect(inputEl.classList.contains('green-bkg')).toBe(true);

  inputEl.value = '5262505037298';
  btnEl.click();

  expect(inputEl.classList.contains('red-bkg')).toBe(true);
});
