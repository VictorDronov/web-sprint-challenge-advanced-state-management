import {
  FETCH_SMURFS,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_ERROR,
  POST_SMURF,
  POST_SMURF_SUCCESS,
} from "../actions/index";

const initialState = {
  smurfs: [],
  loadingSmurfs: false,
  errorMessage: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS:
      return {
        ...state,
        loadingSmurfs: true,
      };
    case FETCH_SMURFS_ERROR:
      return {
        ...state,
        loadingSmurfs: false,
        errorMessage: "",
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        loadingSmurfs: false,
      };
    case POST_SMURF:
      return {
        ...state,
        loadingSmurfs: true,
      };
    case POST_SMURF_SUCCESS:
      return {
        ...state,
        loadingSmurfs: false,
        errorMessage: "",
      };
    default:
      return state;
  }
};
