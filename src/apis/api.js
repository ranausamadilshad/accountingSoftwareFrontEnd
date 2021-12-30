/** @format */

import axios from "axios";

// const PROD_URL = "https://digitalhisaab.herokuapp.com";
const DEV_URL = "http://localhost:8000";

export const api = axios.create({
  baseURL: DEV_URL,
});

// const token = localStorage.getItem("token");

export const config = {
  headers: {
    // Authorization: token,
  },
};
