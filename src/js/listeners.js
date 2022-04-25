import { BASE_URL } from './store';
import { formDataToObject } from './helpers';

const listener = {
  // eslint-disable-next-line arrow-body-style
  checkLogin: (form) => {
    return async (e) => {
      e.preventDefault();
      const formData = formDataToObject(new FormData(form));
      const resp = await fetch(`${BASE_URL}login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(formData),
      });
      const result = await resp.json();
      console.log(result);
    };
  },
};

export default listener;
