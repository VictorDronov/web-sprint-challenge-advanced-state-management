import axios from "axios";

export const FETCH_SMURFS = "FETCH_SMURFS";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_ERROR = "FETCH_SMURFS_ERROR";
export const POST_SMURF = "POST_SMURF";
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURFS_ERROR = "FETCH_SMURFS_ERROR";

export const fetchSmurfs = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_SMURFS });
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        console.log(res);
        dispatch({
          type: FETCH_SMURFS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_SMURFS_ERROR,
          payload: { message: "Smurfs Are missing!" },
        });
        console.log(error);
      });
  };
};

export const postSmurfs = (newSmurf) => {
  return (dispatch) => {
    dispatch({ type: POST_SMURF });
    axios
      .post("", newSmurf)
      .then((res) => {
        dispatch({
          type: POST_SMURF_SUCCESS,
          payload: res.data,
        });
        console.log(res);
      })
      .catch((error) => {
        dispatch({
          type: POST_SMURFS_ERROR,
          payload: { message: "Smurf Didn't Make It!" },
        });
        console.log(error);
      });
  };
};
