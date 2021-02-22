import queryString from 'query-string';
import config from '../configs';

export const getUsers = (options = {}) => {
  const defaultOptions = {
    page: 1,
    results: config.DEFAULT_AMOUNT,
    format: 'json',
    seed: config.API_KEY,
    inc: config.DEFAULT_USER,
  };

  const finalOptions = {
    ...defaultOptions,
    ...options,
  };

  const query = queryString.stringify(finalOptions, { arrayFormat: 'comma' });

  return fetch(`${config.BASE_URL}/?${query}`).then(res => res.json());
};
