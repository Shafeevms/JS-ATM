const printMonths = (preparedData, cut = 0) => preparedData.reduceRight((acc, el, index) => {
  if (index !== preparedData.length - cut) {
    acc += `<li class="an_graphs__month">${el.prevMonth}</li>`;
  }
  return acc;
}, '');

export default printMonths;
