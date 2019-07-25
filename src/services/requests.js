import axios from "axios";

import { api } from "../config";

export const login = (email, password, then) => {
  axios({
    url: api.baseUrl.concat("/user-login"),
    method: "post",
    data: { email, password }
  })
    .then(result => then(result))
    .catch(err => console.log(err));
};

export const checkToken = (username, token, then) => {
  axios({
    url: api.baseUrl.concat("/sign-in"),
    method: "post",
    data: { username, token }
  })
    .then(result => then(result))
    .catch(err => console.log(err));
};

export const signup = (data, then) => {
  /*
  {
    username,
    password,
    email,
    name,
    age,
    job,
    language,
    wage,
    postal_code,
    phone,
    city,
    address
  } 
  */
  axios({
    url: api.baseUrl.concat("/create-account"),
    method: "post",
    data
  })
    .then(result => then(result))
    .catch(err => console.log(err));
};

export const createPost = (data, then) => {
  const { title, description, user_id, city_id, job_id, address } = data;
  axios({
    url: api.baseUrl.concat("/create-post"),
    method: "post",
    data: { title, description, user_id, city_id, job_id, address }
  })
    .then(result => then(result))
    .catch(err => console.log(err));
};

export const searchPost = (text, city_id, job_id, then) => {
  axios({
    url: api.baseUrl.concat("/filter-posts"),
    method: "post",
    data: { text, city_id, job_id }
  })
    .then(result => then(result))
    .catch(err => console.log(err));
};

export const getPost = (id, then) => {
  axios({
    url: api.baseUrl.concat("/get-post"),
    method: "post",
    data: { id }
  })
    .then(result => then(result))
    .catch(err => console.log(err));
};

export const requestApplication = (
  user_id,
  selected_user_id,
  post_id,
  then
) => {
  axios({
    url: api.baseUrl.concat("/make-application"),
    method: "post",
    data: { user_id, selected_user_id, post_id }
  })
    .then(result => then(result))
    .catch(err => console.log(err));
};

export const getPostApplication = (user_id, post_id, then) => {
  axios({
    url: api.baseUrl.concat("/get_post_applications"),
    method: "post",
    data: { user_id, post_id }
  })
    .then(result => then(result))
    .catch(err => console.log(err));
};

export const selectApplication = (user_id, selected_user_id, post_id, then) => {
  axios({
    url: api.baseUrl.concat("/select-application"),
    method: "post",
    data: { user_id, selected_user_id, post_id }
  })
    .then(result => then(result))
    .catch(err => console.log(err));
};

export const getJobs = then => {
  axios({
    url: api.baseUrl.concat("/jobs"),
    method: "get"
  })
    .then(result => then(result))
    .catch(err => console.log(err));
};

export const getCities = then => {
  axios({
    url: api.baseUrl.concat("/cities"),
    method: "get"
  })
    .then(result => then(result))
    .catch(err => console.log(err));
};
