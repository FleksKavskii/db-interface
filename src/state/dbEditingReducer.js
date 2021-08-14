import React from "react";
import * as axios from "axios"

const getData = "GET-DATA"
const getCollections = "GET-COLLECTIONS"
const getDbs = "GET-DBS"

let initialState = {
    dbs: [],
    collections: [],
    data: []
}

const dbEditingReducer = (state = initialState, action) => {
    if (action.type === getData) {
        return {...state, data: [...action.data]}
    }
    if (action.type === getCollections) {
        return {...state, collections: [...action.data]}
    }
    if (action.type === getDbs){
        return {...state, dbs: [...action.data]}
    }
    return state
}


export const getDataActionCreator = (data) => {
    return {type: getData, data}
}

export const getCollectionsActionCreator = (data) => {
    return {type: getCollections, data}
}

export const getDbsActionCreator = (data) =>{
    return {type: getDbs, data}
}

export const setDbThunkCreator = (name) =>{
    return (dispatch) =>{
        axios.post("http://localhost:3002/get-base", name)
    }
}

export const getDbsThunkCreator = () =>{
    return (dispatch) =>{
        axios.get("http://localhost:3002/dbs").then(res =>{
            dispatch(getDbsActionCreator(res.data))
        })
    }
}

export const getDataThunkCreator = (collection) => {
    return (dispatch) => {
        axios.get("http://localhost:3002/get-collection/:" + collection).then(res => {
            dispatch(getDataActionCreator(res.data))
        })
    }
}

export const getCollectionsThunkCreator = () => {
    return (dispatch) => {
        axios.get("http://localhost:3002/all-collections").then(res => {
            dispatch(getCollectionsActionCreator(res.data))
        })
    }
}

export const updateDataThunkCreator = (data, id, collection, fieldName) => {
    return (dispatch) => {
        axios.post("http://localhost:3002/update-data/:" + collection, {
            _id: id,
            [fieldName]: data
        })
    }
}

export const deleteDataThunkCreator = (id, collection) =>{
    return (dispatch) =>{
        axios.post("http://localhost:3002/delete-data/:" + collection, {
            _id: id
        })
    }
}

export const sendDataThunkCreator = (data, collection) =>{
    return (dispatch) =>{
        axios.post("http://localhost:3002/post-new-data/:" + collection, data)
    }
}
export default dbEditingReducer