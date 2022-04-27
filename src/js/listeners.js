import { BASE_URL } from './store';
import { formDataToObject } from './helpers';
import { isLoginValid } from './validation';

const listener = {
  // eslint-disable-next-line arrow-body-style
  checkLogin: (form) => {
    return async (e) => {
      e.preventDefault();
      const formData = formDataToObject(new FormData(form));
      console.log(isLoginValid(formData));
      const resp = await fetch(`${BASE_URL}login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(formData),
      });
      const result = await resp.json();
      console.log(result);
      console.log('необходимо обработать все варианты ответов');
    };
  },
};

export default listener;
