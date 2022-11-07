import fetchLogin from '../api';
import { formDataToObject } from '../../../helpers/formData';

import login from '..';
import { isLoginValid, addValidationClasses } from '../../../helpers/validation';

const loginHandler = async (e) => {
  e.preventDefault();
  const formData = formDataToObject(new FormData(e.target));
  const areInputsCorrect = isLoginValid(formData);
  addValidationClasses(areInputsCorrect, e.target);
  if (!areInputsCorrect.includes(false)) {
    const response = await fetchLogin(formData);
    loginResponse(response);
  }
};

const loginResponse = (obj) => {
  const { payload } = obj;

  if (payload) {
    sessionStorage.setItem('token', payload.token);
    window.location.href = '/accounts';
  } else {
    login(obj);
  }
};

export default loginHandler;
