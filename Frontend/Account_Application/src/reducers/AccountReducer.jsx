import React, {useReducer} from "react";
import { GET_ACCOUNTS } from "../actions/Types";

const initalState = {
    accounts: []
};

const accountReducer = (state = initalState, action) => {
    switch(action.type){
        case GET_ACCOUNTS:
            return {...state, accounts:action.payload};
        default:
            return state;
    }
};

export default accountReducer;