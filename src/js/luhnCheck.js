import checkSys from './cardSysCheck';

export default class LuhnCheck {
  constructor(formEl, inputEl) {
    this.formEl = formEl;
    this.inputEl = inputEl;
    this.addClickEvent(this.formEl);
  }

  static luhnCheck(value) {
    if (!value) return false;

    if (/[^0-9-\s]+/.test(value)) return false;

    let nCheck = 0;
    let nDigit = 0;
    let bEven = false;
    const currentValue = value.replace(/\D/g, '');

    for (let n = currentValue.length - 1; n >= 0; n--) {
      const cDigit = currentValue.charAt(n);
      nDigit = parseInt(cDigit, 10);

      if (bEven) {
        nDigit *= 2;

        if ((nDigit) > 9) {
          nDigit -= 9;
        }
      }

      nCheck += nDigit;
      bEven = !bEven;
    }

    return (nCheck % 10) === 0;
  }

  addClickEvent(formEl) {
    formEl.addEventListener('submit', (e) => {
      e.preventDefault();

      if (LuhnCheck.luhnCheck(this.inputEl.value)) {
        checkSys(this.inputEl);
        this.inputEl.classList.remove('red-bkg');
        this.inputEl.classList.add('green-bkg');
      } else {
        checkSys(this.inputEl, false);
        this.inputEl.classList.remove('green-bkg');
        this.inputEl.classList.add('red-bkg');
      }
    });
  }
}
