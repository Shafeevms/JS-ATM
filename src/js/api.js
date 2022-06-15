const BASE_URL = 'http://localhost:3000/';

export const request = async ({ method = 'GET', URL, data }) => {
  const token = sessionStorage.getItem('token');

  const params = {
    method,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: token ? `Basic ${token}` : null,
    },
  };

  if (['POST', 'PUT', 'PATCH'].includes(method) && data) {
    params.body = JSON.stringify(data);
  }

  const resp = await fetch(`${BASE_URL}${URL}`, params);

  const json = await resp.json();
  if (json.error === 'Unauthorized') {
    sessionStorage.removeItem('token');
  }
  return json;
};

export const createAccount = async () => request({ URL: 'create-account', method: 'POST' });
