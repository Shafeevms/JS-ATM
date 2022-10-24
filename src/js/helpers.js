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

  if (header.lastElementChild !== document.querySelector('.header__wrapper')) {
    renderComponent(header, headerButtonsComponent(getUrl));
  }
};
