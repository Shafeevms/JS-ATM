import fetchLogin from './api';
import formDataToObject from './helpers';
import { redirect } from '../../router';
import login from '.';
import { isLoginValid, addValidationClasses } from '../../validation';

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
  const { payload, error } = obj;
  if (payload) {
    sessionStorage.setItem('token', payload.token);
    redirect('accounts');
  } else login(error);
  // } else throw new Error(error);
};

export default loginHandler;
