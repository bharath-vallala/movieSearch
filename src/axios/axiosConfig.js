import axios from "axios"

export const axiosI =axios.create({
    baseURL: 'http://api.tvmaze.com/',
  });