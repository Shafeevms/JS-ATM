import { headerButtonsComponent } from './components';

export const renderComponent = (element, component) => {
  element.appendChild(component);
};

export const checkToken = () => sessionStorage.getItem('token');

export const ISODateToText = (str) => {
  if (str) {
    const d = new Date(str);
    return `${d.getDate().toString()} ${traslateMonthRu(d.getMonth())} ${d.getFullYear().toString()}`;
  }
  return '';
};

const traslateMonthRu = (num) => {
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентрября',
    'октября',
    'ноября',
    'декабря',
  ];
  return months[num];
};

export const headerButtonsEnable = (getUrl) => {
  const header = document.querySelector('.header__container');
  header.lastElementChild !== document.querySelector('.header__wrapper')
  && renderComponent(header, headerButtonsComponent(getUrl));
};

export function binarySearch(value, list) {
  let first = 0;
  let last = list.length - 1;
  let position = -1;
  let found = false;
  let middle;

  while (found === false && first <= last) {
    middle = Math.floor((first + last) / 2);
    if (list[middle] == value) {
      found = true;
      position = middle;
    } else if (list[middle] > value) {
      last = middle - 1;
    } else {
      first = middle + 1;
    }
  }
  return position;
}
