import { httpServe } from "@/http/axiosDm.js";
//请求方式 请求地址 请求参数data 请求参数params

//Gm's get request with a parameter 通用的带参数的get请求 Ggrwap
export const Ggrwap = (path, params) =>
  httpServe({ path, params, method: "get" });
//Gm's get request with no arguments 通用的不带参数的get请求 Ggrwna
export const Ggrwna = (path) => httpServe({ path, method: "get" });

//General parameters of a post request 通用的带参数的post请求 Gpoapr
export const Gpoapr = (path, data) => httpServe({ path, data, method: "post" });

//请求二维码生成key
export const Togeneratethekey = (path) => httpServe({ path, method: "get" });
//请求二维码
export const Qrcodeisgenerated = (path, params) =>
  httpServe({ path, params, method: "get" });
//推荐歌单分类
export const Btnthelaylist = (path) => httpServe({ path, method: "get" });
//榜单
export const Booklistlist = (path) => httpServe({ path, method: "get" });
//推荐歌单
export const Songlistdetailsd = (path, params) =>
  httpServe({ path, params, method: "get" });
//新碟上架
export const Thenewdiscshelves = (path, params) =>
  httpServe({ path, params, method: "get" });
//榜单查询
export const ListdetailsGet = (path, params) =>
  httpServe({ path, params, method: "get" });

//wang
// 新碟上架
export const NewdiscGet = (path, params) =>
  httpServe({ path, params, method: "get" });

// 请求排行榜
export const ranking = (path, params) =>
  httpServe({ path, params, method: "get" });
// 获取歌单详情
export const songlistdetails = (path, params) =>
  httpServe({ path, params, method: "get" });

//电台 - 节目榜
export const AnchorGet = (path) => httpServe({ path, method: "get" });
//电台 - 分类
export const ClassifyGet = (path) => httpServe({ path, method: "get" });
//电台 - 推荐
export const recommendyGet = (path) => httpServe({ path, method: "get" });
//音乐推荐·电台
export const musicRecGet = (path) => httpServe({ path, method: "get" });
