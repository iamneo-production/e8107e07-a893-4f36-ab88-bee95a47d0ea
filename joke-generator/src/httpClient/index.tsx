import React from "react";
import axios from "axios";
import { NETWORK_CALL_TIMEOUT, BASE_URL, ROUTES } from "../utils/index";

const http = axios.create({
  timeout: NETWORK_CALL_TIMEOUT,
});

const useHttpClient = () => {
  return {
    getRandomJoke: () => {
      return http.get(`${BASE_URL}/${ROUTES?.random}`);
    },
    getScienceJoke: () => {
      return http.get(`${BASE_URL}/${ROUTES?.science}`);
    },
    getPunsJoke: () => {
      return http.get(`${BASE_URL}/${ROUTES?.puns}`);
    },
    getKnockKnockJoke: () => {
      return http.get(`${BASE_URL}/${ROUTES?.knock}`);
    },
    getProgrammingJoke: () => {
      return http.get(`${BASE_URL}/${ROUTES?.programming}`);
    },
  };
};

export default useHttpClient;
