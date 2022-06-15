import fetchLogin from './api';
import formDataToObject from './helpers';
import { loginResponse } from './index';
import { isLoginValid, addValidationClasses } from '../../validation';

const checkLogin = async (e) => {
  e.preventDefault();
  const formData = formDataToObject(new FormData(e.target));
  const areInputsCorrect = isLoginValid(formData);
  addValidationClasses(areInputsCorrect, e.target);
  if (!areInputsCorrect.includes(false)) {
    const response = await fetchLogin(formData);
    loginResponse(response);
  }
};

export default checkLogin;
