const historySkeletonPage = () => {
  const div = document.createElement('div');
  div.classList = 'container details-skeleton';
  div.innerHTML = `
    <header class=" details__header details-skeleton__header">
    <h2 class="details-skeleton__title">История баланса</h2>
    <div class="details-skeleton__account loading"></div>
    <div class="details-skeleton__btn loading"></div>
    <div class="details__wrapper details-skeleton__wrapper">
      <div class="details-skeleton__subtitle loading"></div>
      <div class="details-skeleton__amount loading"></div>
    </div>
    </header>
    <section class="details-skeleton__section an an_fullpage">
      <div class="details-skeleton__chart sk-chart an__ratio an_graphs an_graphs_fullpage">
        <h2 class="sk-chart__title an_graphs__title">Соотношение входящих исходящих транзакций</h2>
        <ul class="sk-chart__bars an_graphs__chart">
          <li class="sk-chart__bar an_graphs__bar loading" style="height: 37%"></li>
          <li class="sk-chart__bar an_graphs__bar loading" style="height: 87%"></li>
          <li class="sk-chart__bar an_graphs__bar loading" style="height: 77%"></li>
          <li class="sk-chart__bar an_graphs__bar loading" style="height: 94%"></li>
          <li class="sk-chart__bar an_graphs__bar loading" style="height: 79%"></li>
          <li class="sk-chart__bar an_graphs__bar loading" style="height: 52%"></li>
          <li class="sk-chart__bar an_graphs__bar loading" style="height: 79%"></li>
          <li class="sk-chart__bar an_graphs__bar loading" style="height: 45%"></li>
          <li class="sk-chart__bar an_graphs__bar loading" style="height: 58%"></li>
          <li class="sk-chart__bar an_graphs__bar loading" style="height: 87%"></li>
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
          <li class="sk-chart__month loading"></li>
          <li class="sk-chart__month loading"></li>
          <li class="sk-chart__month loading"></li>
          <li class="sk-chart__month loading"></li>
          <li class="sk-chart__month loading"></li>
          <li class="sk-chart__month loading"></li>
        </ul>
      </div>
      <div class="details-skeleton__chart sk-chart an__graphs an_graphs an_graphs_fullpage">
        <h2 class="sk-chart__title an_graphs__title">Динамика баланса</h2>
        <ul class="sk-chart__bars an_graphs__chart">
          <li class="sk-chart__bar an_graphs__bar loading" style="height: 37%"></li>
          <li class="sk-chart__bar an_graphs__bar loading" style="height: 77%"></li>
          <li class="sk-chart__bar an_graphs__bar loading" style="height: 94%"></li>
          <li class="sk-chart__bar an_graphs__bar loading" style="height: 87%"></li>
          <li class="sk-chart__bar an_graphs__bar loading" style="height: 52%"></li>
          <li class="sk-chart__bar an_graphs__bar loading" style="height: 79%"></li>
          <li class="sk-chart__bar an_graphs__bar loading" style="height: 45%"></li>
          <li class="sk-chart__bar an_graphs__bar loading" style="height: 79%"></li>
          <li class="sk-chart__bar an_graphs__bar loading" style="height: 87%"></li>
          <li class="sk-chart__bar an_graphs__bar loading" style="height: 58%"></li>
          <li class="sk-chart__bar an_graphs__bar loading" style="height: 100%"></li>
          <li class="sk-chart__bar an_graphs__bar loading" style="height: 91%"></li>
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
    </section>`;
  return div;
};

export default historySkeletonPage;
