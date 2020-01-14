import axios from 'axios';

import {API_URL, METHODS} from 'constants/api';
import store from '@redux/store';

export const query = ({
  method = METHODS.get,
  endpoint = '',
  data = null,
  headers = {},
  params = {},
}) => {
  console.log(API_URL + endpoint);
  return axios({
    method,
    url: API_URL + endpoint,
    data,
    params,
    headers,
    // headers: store.getState().user.isLogged
    //   ? {
    //       ...headers,
    //       token: store.getState().user.info.token,
    //       'Content-Type': 'application/json',
    //     }
    //   : headers,
  });
};
