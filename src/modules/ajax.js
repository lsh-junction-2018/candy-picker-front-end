/**
 * Ajax api encapsulate 
 */
import * as Axios from 'axios';

// API version
export const API_VERSION = 'v1';

// Default configuration
export const defaultConfig = {
  // TODO: adjust baseURL
  baseURL: `${
    process.env.REACT_APP_BACKEND_DOMAIN
  }/api/${API_VERSION}/`,
  method: 'GET',
  headers: {}
};

function request(url, method, payload) {
  const uppercaseMethod = method.toUpperCase();
  const dataField = uppercaseMethod === 'GET' ? 'params' : 'data';

  return Axios.request(
    Object.assign({}, defaultConfig, {
      method,
      url,
      [dataField]: payload
    })
  ).then(res => Promise.resolve(res.data, res));
}

export function get(url, payload) {
  return request(url, 'GET', payload);
}

export function post(url, payload) {
  return request(url, 'POST', payload);
}

export function del(url, payload) {
  return request(url, 'DELETE', payload);
}

export function patch(url, payload) {
  return request(url, 'PATCH', payload);
}

export function put(url, payload) {
  return request(url, 'PUT', payload);
}
