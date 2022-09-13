/* eslint-disable no-var */
/* eslint-disable quotes */
/* eslint-disable arrow-body-style */

import { request } from '../../api';

const getBanks = async () => request({ URL: 'banks' });

const yandexMapScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = "https://api-maps.yandex.ru/2.1/?apikey=7d803c84-9bdd-4e2e-8082-f4131a9f94e9&lang=ru_RU";
    script.type = "text/javascript";
    document.querySelector('head').append(script);
    script.addEventListener('load', () => {
      resolve();
    });
  })
    .then(() => getBanks())
    .then((res) => {
      const { payload } = res;
      const coordinates = getCoordinates(payload);
      ymaps.ready(init);
      function init() {
        const myMap = new ymaps.Map("map", {
          center: [55.76, 37.64],
          zoom: 10,
        });
        const myCollection = new ymaps.GeoObjectCollection({}, {
          preset: 'islands#blueIcon',
        });
        for (let i = 0; i < coordinates.length; i++) {
          myCollection.add(new ymaps.Placemark(coordinates[i]));
        }
        myMap.geoObjects.add(myCollection);
      }
    });
};
const getCoordinates = (payload) => payload.map((el) => Object.values(el));

export default yandexMapScript;
