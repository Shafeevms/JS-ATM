const atmPageComponent = () => {
  const div = document.createElement('div');
  div.className = 'atm container';
  div.innerHTML = `
      <h2 class="atm__title title">Карта Банкоматов</h2>
      <div id="map" style="width: 100%; height: 70vh"></div>`;
  return div;
};

export default atmPageComponent;
