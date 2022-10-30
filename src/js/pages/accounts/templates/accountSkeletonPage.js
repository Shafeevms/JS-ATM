const accountSkeleton = () => {
  const div = document.createElement('div');
  div.innerHTML = `
  <div class="container">
    <header class="loader loader__header">
      <h2 class="title loader__title">Ваши счета</h2>
      <div class="loader__select loading"></div>
      <div class="loader__btn loader__btn_big loading loading_delay"></div>
    </header>
    <ul class="loader__cardlist accounts__cardlist">
      <li class="loader__card accounts__card card">
        <div class="loader__h1 card__account loading"></div>
        <div class="loader__price loading"></div>
        <div class="loader__h2 card__title_last loading"></div>
        <div class="loader__date card__date loading"></div>
        <div class="loader__btn loader__btn_small card__btn loading loading_delay"></div>
      </li>
      <li class="loader__card accounts__card card">
        <div class="loader__h1 card__account loading"></div>
        <div class="loader__price loading"></div>
        <div class="loader__h2 card__title_last loading"></div>
        <div class="loader__date card__date loading"></div>
        <div class="loader__btn loader__btn_small card__btn loading loading_delay"></div>
      </li>
      <li class="loader__card accounts__card card">
        <div class="loader__h1 card__account loading"></div>
        <div class="loader__price loading"></div>
        <div class="loader__h2 card__title_last loading"></div>
        <div class="loader__date card__date loading"></div>
        <div class="loader__btn loader__btn_small card__btn loading loading_delay"></div>
      </li>
      <li class="loader__card accounts__card card">
        <div class="loader__h1 card__account loading"></div>
        <div class="loader__price loading"></div>
        <div class="loader__h2 card__title_last loading"></div>
        <div class="loader__date card__date loading"></div>
        <div class="loader__btn loader__btn_small card__btn loading loading_delay"></div>
      </li>
      <li class="loader__card accounts__card card">
        <div class="loader__h1 card__account loading"></div>
        <div class="loader__price loading"></div>
        <div class="loader__h2 card__title_last loading"></div>
        <div class="loader__date card__date loading"></div>
        <div class="loader__btn loader__btn_small card__btn loading loading_delay"></div>
      </li>
      <li class="loader__card accounts__card card">
        <div class="loader__h1 card__account loading"></div>
        <div class="loader__price loading"></div>
        <div class="loader__h2 card__title_last loading"></div>
        <div class="loader__date card__date loading"></div>
        <div class="loader__btn loader__btn_small card__btn loading loading_delay"></div>
      </li>
    </ul>
  </div>`;
  return div;
};

export default accountSkeleton;
