import {
  UPDATE_USER,
  LOAD_USER,
  LOAD_USER_ERROR,
  UPDATE_TOKEN_ID,
  UPDATE_JOBS,
  UPDATE_CITIES,
  UPDATE_POSTS,
  UPDATE_POST_DATA
} from "../actions/types";

const INITIAL_STATE = {
  user: {},
  loading: false,
  tokenId: null,
  error: "",
  jobs: [],
  cities: [],
  posts: [],
  postData: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_USER:
      return { ...state, loading: true, error: "" };
    case LOAD_USER_ERROR:
      return { ...state, loading: false, error: action.payload };
    case UPDATE_USER:
      return { ...state, user: action.payload, loading: false, error: "" };
    case UPDATE_TOKEN_ID:
      return { ...state, tokenId: action.payload };
    case UPDATE_JOBS:
      return { ...state, jobs: action.payload };
    case UPDATE_CITIES:
      return { ...state, cities: action.payload };
    case UPDATE_POSTS:
      return { ...state, posts: action.payload };
    case UPDATE_POST_DATA:
      return { ...state, postData: action.payload };
    default:
      return state;
  }
};
