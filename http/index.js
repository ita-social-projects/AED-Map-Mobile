import axios from 'axios';

const http = {
  get(url, params = {}) {
    return axios({
      method: 'get',
      url,
      params
    });
  },
  post(url, params) {
    return axios({
      method: 'post',
      url,
      data: params
    });
  },
  delete(url, params) {
    return axios({
      method: 'delete',
      url,
      data: params
    });
  },
  put(url, params) {
    return axios({
      method: 'put',
      url,
      data: params
    });
  }
};

export default http;
