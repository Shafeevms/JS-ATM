export const getMonth = (str) => {
  const months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
  return months[str.split('/')[1] - 1];
};

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
