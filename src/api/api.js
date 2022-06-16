import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://itunes.apple.com/",
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "X-Requested-With": "XMLHttpRequest",
    "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
  },
});

export const UsersAPI = {
  getUsers: (name, count) =>
    instance
      .get(`search?term=${name}&limit=${count}`)
      .then((response) => response.data),
  getUserById: (id) =>
    instance.get(`lookup?id=${id}`).then((response) => response.data),
};
