const BASE_URL = 'http://localhost:3000/';

export const fetchLogin = async (data) => {
  const resp = await fetch(`${BASE_URL}login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  });
  return resp.json();
};

export const getAccounts = async() => {
  const resp = await fetch(`${BASE_URL}accounts`, {
    headers: {
      Authorization: `Basic ${sessionStorage.getItem('token')}`,
    },
  });
  return resp.json();
};
