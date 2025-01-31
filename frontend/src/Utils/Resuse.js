// import localstorageEncrypt from "localstorage-encrypt";
// import axios from "axios";
// var ip = import.meta.env.BACKEND_HOST || "localhost";
// var host = import.meta.env.BACKEND_PORT || "8000";
// export const LS = localstorageEncrypt.init("Quillbot", "RGBQUILLBOT");
// export const Baseaxios = axios.create({
//   baseURL: `https://${ip}:${host}/`,
//   headers: { Authorization: `Bearer ${LS.get("access_token")}` },
// });

import localstorageEncrypt from "localstorage-encrypt";
import axios from "axios";
var ip = import.meta.env.BACKEND_HOST || "localhost";
var host = import.meta.env.BACKEND_PORT || "8000";
console.log(ip, host, import.meta.env);
export const ipadr=import.meta.env.VITE_HOST_IP;
export const LS = localstorageEncrypt.init("Quillbot", "RGBQUILLBOT");
export const Baseaxios = axios.create({
  baseURL: `${ipadr}/`,
  headers: { Authorization: `Bearer ${LS.get("access_token")}` },
});
