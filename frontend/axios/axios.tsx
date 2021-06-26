// axios.js

import axios from "axios";

const env = process.env.NODE_ENV;
const dev = env !== "production";
const devPort = parseInt(process.env.PORT, 10) || 3000;
const devProxy = `http://localhost:${devPort}/`;
const baseURL = devProxy;

const axiosInstance = dev ? axios.create({ baseURL }) : axios.create();
export default axiosInstance;
