import { fetchLogin } from './api';
import { formDataToObject } from './helpers';
import { loginResponse } from './login';
import { isLoginValid, addValidationClasses } from './validation';

const listener = {
  // eslint-disable-next-line arrow-body-style
  checkLogin: (form) => {
    return async (e) => {
      e.preventDefault();
      const formData = formDataToObject(new FormData(form));
      const areInputsCorrect = isLoginValid(formData);
      addValidationClasses(areInputsCorrect, form);
      if (!areInputsCorrect.includes(false)) {
        const response = await fetchLogin(formData);
        //! не до конца понимаю нужно перед этой функцией писать await
        loginResponse(response);
      }
    };
  },
};

export default listener;
