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
