const realtimeLinesChunk = ({
  from, to, rate, change,
}) => {
  const li = document.createElement('li');
  li.classList.add('real-time__line');
  li.innerHTML = `<div class="real-time__name">${from}/${to}</div>
                  <div class="real-time__dots ${change === 1 ? 'real-time__dots_green' : 'real-time__dots_red'}"></div>
                  <div class="real-time__sum">${rate}</div>
                  <div class="real-time__mark ${change === 1 ? 'real-time__mark_green' : 'real-time__mark_red'}"></div>`;
  return li;
};

export default realtimeLinesChunk;
