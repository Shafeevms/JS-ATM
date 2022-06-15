import { request } from '../../api';

const fetchLogin = async (data) => request({ URL: 'login', method: 'POST', data });

export default fetchLogin;
