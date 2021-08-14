import {applyMiddleware, combineReducers, createStore} from "redux";
import dbEditingReducer from "./dbEditingReducer";
import thunkMiddleware from "redux-thunk"
let reducers = combineReducers(
    {
        data: dbEditingReducer
    }
)
let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store