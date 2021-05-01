import axios from "axios";

export const SMURFS_FETCH = "SMURFS_FETCH";
export const SMURFS_RECEIVED = "SMURFS_RECEIVED";
export const SMURFS_FETCH_FAILED = "SMURFS_FETCH_FAILED";
export const ADD_SMURF = "ADD_SMURF";
export const ERROR = "ERROR";

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

export const fetchSmurfs = () => (dispatch) => {
  dispatch({ type: SMURFS_FETCH });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      console.log(res.data);
      dispatch({ type: SMURFS_RECEIVED, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: SMURFS_FETCH_FAILED });
    });
};

export const addSmurf = (smurfData) => {
  return { type: ADD_SMURF, payload: { ...smurfData, id: Date.now() } };
};

export const setError = (error) => {
  return { type: ERROR, payload: error };
};
