import { fetchLogin } from './api';
import { formDataToObject } from './helpers';
import { loginResponse } from './pages/login'; //! какая-то зацикленность
import { isLoginValid, addValidationClasses } from './validation';

const listener = {
  // eslint-disable-next-line arrow-body-style
  checkLogin: async (e) => {
    e.preventDefault();
    const formData = formDataToObject(new FormData(e.target));
    const areInputsCorrect = isLoginValid(formData);
    addValidationClasses(areInputsCorrect, e.target);
    if (!areInputsCorrect.includes(false)) {
      const response = await fetchLogin(formData);
      //! не до конца понимаю нужно перед этой функцией (ниже) писать await или нет?
      loginResponse(response);
    }
  },
};

export default listener;
