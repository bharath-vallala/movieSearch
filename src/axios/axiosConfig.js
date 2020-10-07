import axios from "axios"

export const axiosI =axios.create({
    baseURL: 'https://api.tvmaze.com/',
  });
