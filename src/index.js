import './styles/header.scss';
import './styles/login.scss';
import { formDataToObject } from './js/helpers';

const form = document.querySelector('.login__form');
const formData = new FormData(form);

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formObjectData = formDataToObject(formData);
  // console.log(formObjectData);
  const resp = await fetch('http://localhost:3000/login', {
    method: 'POST',
    // body: JSON.stringify(formObjectData),
    body: formData,
  });

  const result = await resp.json();
  console.log(result);
});
