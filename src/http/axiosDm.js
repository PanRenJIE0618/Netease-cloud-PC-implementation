import axios from "axios";
var instance = axios.create({
  baseURL: "https://47unknowngroup.vercel.app/",
  timeout: 3000,
  withCredentials: true,
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (errer) => {
    return errer;
  }
);

export const httpServe = ({ method = "get", path, data, params } = {}) => {
  return new Promise((resolve, reject) => {
    instance({
      method: method,
      url: path,
      data: data,
      params: params,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
