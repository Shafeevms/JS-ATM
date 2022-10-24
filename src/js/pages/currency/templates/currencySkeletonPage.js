const currencySkeletonPage = () => {
  const div = document.createElement('div');
  div.classList = 'currency container sk-currency';
  div.innerHTML = `
  <h2 class="currency__title title">Валютный обмен</h2>
        <section class="currency__your-currency your-currency">
          <h3 class="your-currency__title">Ваши валюты</h3>
          <ul class="your-currency__list">
            <li class="your-currency__line currency-line">
              <div class="currency-line__name sk-currency__name loading"></div>
              <div class="currency-line__dots sk-currency__dots"></div>
              <div class="currency-line__num sk-currency__num loading"></div>
            </li>
            <li class="your-currency__line currency-line">
              <div class="currency-line__name sk-currency__name loading"></div>
              <div class="currency-line__dots sk-currency__dots"></div>
              <div class="currency-line__num sk-currency__num loading"></div>
            </li>
            <li class="your-currency__line currency-line">
              <div class="currency-line__name sk-currency__name loading"></div>
              <div class="currency-line__dots sk-currency__dots"></div>
              <div class="currency-line__num sk-currency__num loading"></div>
            </li>
            <li class="your-currency__line currency-line">
              <div class="currency-line__name sk-currency__name loading"></div>
              <div class="currency-line__dots sk-currency__dots"></div>
              <div class="currency-line__num sk-currency__num loading"></div>
            </li>
            <li class="your-currency__line currency-line">
              <div class="currency-line__name sk-currency__name loading"></div>
              <div class="currency-line__dots sk-currency__dots"></div>
              <div class="currency-line__num sk-currency__num loading"></div>
            </li>
            <li class="your-currency__line currency-line">
              <div class="currency-line__name sk-currency__name loading"></div>
              <div class="currency-line__dots sk-currency__dots"></div>
              <div class="currency-line__num sk-currency__num loading"></div>
            </li>
          </ul>
        </section>
        <section class="currency__exchange exchange">
          <div class="exchange__wrap">
            <h3 class="exchange__title">Обмен валюты</h3>
            <h4 class="exchange__mistake"></h4>
          </div>
          <form class="exchange__form unclick">
            <div class="exchange__wrapper exchange__wrapper_fst-line">
              <label for="from">Из</label>
              <select name="from" class="exchange__from unclick">
              </select>
              <label for="to">в</label>
              <select name="to" class="exchange__to unclick">
              </select>
            </div>
            <div class="exchange__wrapper exchange__wrapper_snd-line">
              <label for="sum">Сумма</label>
              <input type="number" name="sum" class="exchange__sum">
            </div>
            <button type="submit" class="exchange__btn btn unclick" disabled>Обменять</button>
          </form>
        </section>
        <section class="currency__real-time real-time">
          <h3 class="real-time__title">Изменение курсов в реальном времени</h3>
          <ul class="real-time__list">
            <li class="real-time__line">
              <div class="real-time__name sk-currency__rt-name loading"></div>
              <div class="real-time__dots sk-currency__rt-dots"></div>
              <div class="real-time__sum sk-currency__rt-sum loading"></div>
              <div class="real-time__mark"></div>
            </li>
            <li class="real-time__line">
              <div class="real-time__name sk-currency__rt-name loading"></div>
              <div class="real-time__dots sk-currency__rt-dots"></div>
              <div class="real-time__sum sk-currency__rt-sum loading"></div>
              <div class="real-time__mark"></div>
            </li>
            <li class="real-time__line">
              <div class="real-time__name sk-currency__rt-name loading"></div>
              <div class="real-time__dots sk-currency__rt-dots"></div>
              <div class="real-time__sum sk-currency__rt-sum loading"></div>
              <div class="real-time__mark"></div>
            </li>
            <li class="real-time__line">
              <div class="real-time__name sk-currency__rt-name loading"></div>
              <div class="real-time__dots sk-currency__rt-dots"></div>
              <div class="real-time__sum sk-currency__rt-sum loading"></div>
              <div class="real-time__mark"></div>
            </li>
            <li class="real-time__line">
              <div class="real-time__name sk-currency__rt-name loading"></div>
              <div class="real-time__dots sk-currency__rt-dots"></div>
              <div class="real-time__sum sk-currency__rt-sum loading"></div>
              <div class="real-time__mark"></div>
            </li>
            <li class="real-time__line">
              <div class="real-time__name sk-currency__rt-name loading"></div>
              <div class="real-time__dots sk-currency__rt-dots"></div>
              <div class="real-time__sum sk-currency__rt-sum loading"></div>
              <div class="real-time__mark"></div>
            </li>
            <li class="real-time__line">
              <div class="real-time__name sk-currency__rt-name loading"></div>
              <div class="real-time__dots sk-currency__rt-dots"></div>
              <div class="real-time__sum sk-currency__rt-sum loading"></div>
              <div class="real-time__mark"></div>
            </li>
            <li class="real-time__line">
              <div class="real-time__name sk-currency__rt-name loading"></div>
              <div class="real-time__dots sk-currency__rt-dots"></div>
              <div class="real-time__sum sk-currency__rt-sum loading"></div>
              <div class="real-time__mark"></div>
            </li>
            <li class="real-time__line">
              <div class="real-time__name sk-currency__rt-name loading"></div>
              <div class="real-time__dots sk-currency__rt-dots"></div>
              <div class="real-time__sum sk-currency__rt-sum loading"></div>
              <div class="real-time__mark"></div>
            </li>
            <li class="real-time__line">
              <div class="real-time__name sk-currency__rt-name loading"></div>
              <div class="real-time__dots sk-currency__rt-dots"></div>
              <div class="real-time__sum sk-currency__rt-sum loading"></div>
              <div class="real-time__mark"></div>
            </li>
            <li class="real-time__line">
              <div class="real-time__name sk-currency__rt-name loading"></div>
              <div class="real-time__dots sk-currency__rt-dots"></div>
              <div class="real-time__sum sk-currency__rt-sum loading"></div>
              <div class="real-time__mark"></div>
            </li>
            <li class="real-time__line">
              <div class="real-time__name sk-currency__rt-name loading"></div>
              <div class="real-time__dots sk-currency__rt-dots"></div>
              <div class="real-time__sum sk-currency__rt-sum loading"></div>
              <div class="real-time__mark"></div>
            </li>
          </ul>
        </section>`;
  return div;
};

export default currencySkeletonPage;
