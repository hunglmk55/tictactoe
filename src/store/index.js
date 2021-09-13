import {createStore} from "redux";
import reducer from "../reducers";

const history =  [
    {
        squares: Array(9).fill(null)
    }
];

const initialState = {xIsNext: false, stepNumber: 0,history};
export const store = createStore(reducer,initialState);