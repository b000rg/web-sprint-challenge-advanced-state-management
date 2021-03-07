import {
  ADD_SMURF,
  FETCH_SMURFS,
  POST_SMURF_DATA,
  SMURFS_FETCHED,
  ERROR,
} from "../actions";

export const initialState = {
  smurfs: [],
  loading: false,
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_SMURFS || POST_SMURF_DATA:
      return { ...state, loading: true };
    case SMURFS_FETCHED:
      return { ...state, smurfs: action.payload };
    case ADD_SMURF:
      return { ...state, smurfs: action.payload };
    case ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default reducer;

//Task List:
//1. Add in the initialState needed to hold:
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary
