

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'react-thunk';
import rootReducer from "../Reducers";
import { useMemo } from 'react'


import thunkMiddleware from 'redux-thunk'
export function initializeStore(initialState =  {}) {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    );
}
/*
import {createStore} from 'redux';
import BaseReducer from "../Reducers/BaseReducer";
import {useEffect} from 'react';

const store = createStore(BaseReducer
);

export default store;*/
