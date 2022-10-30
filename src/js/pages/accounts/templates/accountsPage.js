const accountsPage = () => `
  <div class="accounts container">
    <header class="accounts__header">
      <h2 class="accounts__title title">Ваши счета</h2>
      <select name="sort" class="accounts__select">
        <option value="">Сортировка</option>
        <option value="account">По номеру</option>
        <option value="balance">По балансу</option>
        <option value="transactions">По последней транзакции</option>
      </select>
      <button class="accounts__btn btn">+ Создать новый счет</button>
    </header>
      <ul class="accounts__cardlist">
      </ul>
  </div>`;

export default accountsPage;
