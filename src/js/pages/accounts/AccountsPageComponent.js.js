import { openNewAccount, sortAccounts } from './listeners';

const accountsPageComponent = () => {
  const div = document.createElement('div');
  div.className = 'accounts container';
  div.innerHTML = `
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
    </ul>`;
  div.querySelector('.accounts__btn').addEventListener('click', openNewAccount);
  div.querySelector('.accounts__select').addEventListener('change', sortAccounts);
  return div;
};

export default accountsPageComponent;
