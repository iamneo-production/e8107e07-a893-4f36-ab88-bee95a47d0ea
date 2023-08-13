import React from "react";
import axios from "axios";
import { NETWORK_CALL_TIMEOUT, BASE_URL } from "../utils/index";

const http = axios.create({
  timeout: NETWORK_CALL_TIMEOUT,
});

const useHttpClient = () => {
  return {
    getJoke: (type:string) => {
      return http.get(`${BASE_URL}/${type}`);
    },
  };
};

export default useHttpClient;
