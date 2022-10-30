const accountsInfoSkeleton = () => `
  <div class="container details-skeleton">
    <header class=" details__header details-skeleton__header">
      <h2 class="details-skeleton__title">Просмотр счёта</h2>
      <div class="details-skeleton__account loading"></div>
      <div class="details-skeleton__btn loading"></div>
      <div class="details__wrapper details-skeleton__wrapper">
        <div class="details-skeleton__subtitle loading"></div>
        <div class="details-skeleton__amount loading"></div>
      </div>
    </header>
    <section class="details-skeleton__section an">
      <div class="details-skeleton__form sk-form an__form an_form">
        <h2 class="sk-form__title an_form__legend">Новый перевод</h2>
        <div class="sk-form__subtitle sk-form__subtitle_long an_form__label loading loading_dark"></div>
        <div class="sk-form__subtitle sk-form__subtitle_short an_form__label loading loading_dark"></div>
        <div class="sk-form__choise loading loading_dark"></div>
        <div class="sk-form__input an_form__input loading loading_dark"></div>
        <div class="sk-form__btn loading loading_dark"></div>
      </div>
      <div class="details-skeleton__chart sk-chart an_graphs">
        <h2 class="sk-chart__title an_graphs__title">Динамика баланса</h2>
        <ul class="sk-chart__bars an_graphs__chart">
          <li class="sk-chart__bar an_graphs__bar loading" style="height: 77%"></li>
          <li class="sk-chart__bar an_graphs__bar loading" style="height: 52%"></li>
          <li class="sk-chart__bar an_graphs__bar loading" style="height: 87%"></li>
          <li class="sk-chart__bar an_graphs__bar loading" style="height: 37%"></li>
          <li class="sk-chart__bar an_graphs__bar loading" style="height: 91%"></li>
          <li class="sk-chart__bar an_graphs__bar loading" style="height: 100%"></li>
        </ul>
        <div class="an_graphs__range">
          <div class="sk-chart__price sk-chart__price_top loading"></div>
          <div class="sk-chart__price sk-chart__price_bottom loading"></div>
        </div>
        <ul class="sk-chart__months">
          <li class="sk-chart__month loading"></li>
          <li class="sk-chart__month loading"></li>
          <li class="sk-chart__month loading"></li>
          <li class="sk-chart__month loading"></li>
          <li class="sk-chart__month loading"></li>
          <li class="sk-chart__month loading"></li>
        </ul>
      </div>
      <div class="an__history an_history">
        <h2 class="an_history__title">История переводов</h2>
        <div class="an__table an-table">
          <ul class="an-table__header">
            <li class="an-table__header-item">Счет отправителя</li>
            <li class="an-table__header-item">Счет получателя</li>
            <li class="an-table__header-item">Сумма</li>
            <li class="an-table__header-item">Дата</li>
          </ul>
          <ul class="an-table__body">
            <li>
              <ul class="an-table__body-line">
                <li class="an-table__body-item sk-chart__item loading loading_dark" style="width: 107px;"></li>
                <li class="an-table__body-item sk-chart__item loading loading_dark" style="width: 107px;"></li>
                <li class="an-table__body-item sk-chart__item loading loading_dark" style="width: 64px;"></li>
                <li class="an-table__body-item sk-chart__item loading loading_dark" style="width: 79px;"></li>
              </ul>
            </li>
            <li>
              <ul class="an-table__body-line">
                <li class="an-table__body-item sk-chart__item loading loading_dark" style="width: 107px;"></li>
                <li class="an-table__body-item sk-chart__item loading loading_dark" style="width: 107px;"></li>
                <li class="an-table__body-item sk-chart__item loading loading_dark" style="width: 64px;"></li>
                <li class="an-table__body-item sk-chart__item loading loading_dark" style="width: 79px;"></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>`;

export default accountsInfoSkeleton;
