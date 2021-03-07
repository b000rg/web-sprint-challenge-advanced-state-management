import Axios from "axios";

const axios = Axios.create({ baseURL: "http://localhost:3333" });

export const FETCH_SMURFS = "FETCH_SMURFS";
export const SMURFS_FETCHED = "SMURFS_FETCHED";
export const POST_SMURF_DATA = "POST_SMURF_DATA";
export const ADD_SMURF = "ADD_SMURF";
export const ERROR = "ERROR";

export const fetchSmurfs = () => (dispatch) => {
  dispatch({ type: FETCH_SMURFS });
  axios
    .get("/smurfs")
    .then((res) => {
      dispatch({ type: SMURFS_FETCHED, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: ERROR, payload: err.message });
    });
};

export const addSmurf = (smurfData) => (dispatch) => {
  dispatch({ type: POST_SMURF_DATA });
  axios
    .post("/smurfs", smurfData)
    .then((res) => {
      dispatch({ type: ADD_SMURF, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: ERROR, payload: err.message });
    });
};

//Task List:
//1. Add fetch smurfs action:
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.
