import axios from 'axios';
import store from '@/store'
import { getToken } from './auth';

const baseURL = "";

const service = axios.create({
  baseURL,
  timeout: 5000
})

// 请求拦截器, 在请接口之前进行拦截
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['x-token'] = getToken()
    }
    return config;
  },
  err => {
    console.log(err);
    return Promise.reject(err);
  }
);

// 请求拦截器, 在请求接口返回后进行拦截操作
service.interceptors.response.use(
  response => {
    // todo 根据返回的错误码和错误信息类型, 返回时间需要的数据, 同一处理成功和失败(失败提示)
    return response.data;
  },
  err => {
    console.log("request response error:", err);
    return Promise.reject(err);
  }
)