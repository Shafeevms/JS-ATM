import { request } from '../../core/api';

const fetchLogin = async (data) => {
  const response = await request({ URL: 'login', method: 'POST', data });
  return response;
};

export default fetchLogin;
