import * as requests from "../../services/requests";
import {
  UPDATE_USER,
  LOAD_USER,
  LOAD_USER_ERROR,
  UPDATE_TOKEN_ID,
  UPDATE_CITIES,
  UPDATE_JOBS,
  UPDATE_POSTS,
  UPDATE_POST_DATA
} from "./types";

const loadUser = { type: LOAD_USER };
const loadUserError = (error = "") => ({
  type: LOAD_USER_ERROR,
  payload: error
});

export const updateUser = user => {
  return {
    type: UPDATE_USER,
    payload: user
  };
};

export const updateToken = token => {
  return {
    type: UPDATE_TOKEN_ID,
    payload: token
  };
};

export const updateJobs = jobs => {
  return {
    type: UPDATE_JOBS,
    payload: jobs
  };
};

export const updateCities = cities => {
  return {
    type: UPDATE_CITIES,
    payload: cities
  };
};

export const updatePosts = posts => {
  return {
    type: UPDATE_POSTS,
    payload: posts
  };
};

export const updatePostData = data => {
  return {
    type: UPDATE_POST_DATA,
    payload: data
  };
};

export const login = (email, password, onSucess = () => {}) => {
  return dispatch => {
    /*setTimeout(() => {
      const user = { name: "" };
      dispatch(updateUser(user));
      onSucess();
    }, 2000);*/

    requests.login(email, password, result => {
      console.log("LOGIN", result);

      const success = result.data.success === 1 && result.data.token !== null;
      if (success) {
        dispatch(updateUser(result.data.user));
        dispatch(updateToken(result.data.token));
      }
      onSucess(success);
      localStorage.setItem("token", result.data.token);
      localStorage.setItem("username", result.data.user.username);
      /*if (!result.data.error) {
        dispatch(updateUser(result.data.user, true));

        onSucess(result);
      } else {
        dispatch(loadUserError(result.data.message));
      }*/
    });
  };
};

export const checkToken = () => dispatch => {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  console.log("token", token, username);

  if (token && username) {
    requests.checkToken(username, token, result => {
      const success = result.data.success === 1 && result.data.token !== null;
      if (success) {
        dispatch(updateUser(result.data.user));
        dispatch(updateToken(result.data.token));
      }
      localStorage.setItem("token", result.data.token);
      localStorage.setItem("username", result.data.user.username);
    });
  }
};

export const logout = () => dispatch => {
  dispatch(updateUser({}));
  dispatch(updateToken(null));
  localStorage.setItem("token", null);
  localStorage.setItem("username", {});
};

export const getCities = () => dispatch => {
  requests.getCities(res => {
    dispatch(updateCities(res.data.cities));
  });
};

export const getJobs = () => dispatch => {
  requests.getJobs(res => {
    dispatch(updateJobs(res.data.profesionet));
  });
};

export const getPosts = (
  text,
  city_id,
  job_id,
  onSucess = () => {}
) => dispatch => {
  requests.searchPost(text, city_id, job_id, result => {
    dispatch(updatePosts(result.data.posts));
    onSucess();
  });
};

export const getPostData = (id, onSucess = () => {}) => dispatch => {
  requests.getPost(id, result => {
    console.log("result", result);

    dispatch(updatePostData(result.data.post));
    onSucess();
  });
};
