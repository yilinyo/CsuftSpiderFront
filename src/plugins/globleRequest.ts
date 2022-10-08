/*
 * @Author: Yilin
 * @LastEditors: Yilin
 * @Description: Do not edit
 * @Date: 2022-09-20 17:08:48
 * @LastEditTime: 2022-10-09 00:45:58
 * @FilePath: \CsuftSpiderFront\src\plugins\globleRequest.ts
 */
/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import { extend } from 'umi-request';
import { message } from 'antd';
import { history } from '@@/core/history';
import { stringify } from 'querystring';

/**
 * 配置request请求时的默认参数 ，生产环境 记得修改请求地址 注意跨域问题
 */
const request = extend({
  credentials: 'include', // 默认请求是否带上cookie

  prefix: process.env.NODE_ENV === 'production' ? 'http://localhost:8082/' : undefined,
  // requestType: 'form',
});

/**
 * 所以请求拦截器
 */
// request.interceptors.request.use((url, options): any => {
//   console.log(`do request url = ${url}`);

//   return {
//     url,

//     options: {
//       ...options,
//       headers: {},
//     },
//   };
// });

/**
 * 所有响应拦截器
 */
request.interceptors.response.use(async (response, options): Promise<any> => {
  if (options.responseType === 'blob') {
    return response;
  }

  const res = await response.clone().json();

  if (res.code === 0) {
    return res.data;
  }

  if (res.code === 40001) {
    message.error('请先登录');
    history.replace({
      pathname: '/user/login',
      search: stringify({
        redirect: location.pathname,
      }),
    });
    return res.data;
  } else if (res.data == null) {
    message.error(res.description);
    return res.data;
  }

  return res;
});

export default request;
