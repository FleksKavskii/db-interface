import App from "./App";
import {connect} from "react-redux";
import {
    getCollectionsThunkCreator,
    getDataThunkCreator,
    getDbsThunkCreator,
    setDbThunkCreator
} from "./state/dbEditingReducer";

let mapStateToProps = (state) =>{
    return {
        collections: state.data.collections,
        data: state.data.data,
        dbs: state.data.dbs
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        getCollection: (res) =>{
            dispatch(getCollectionsThunkCreator(res))
        },
        getDataThunk: (collection) => {
            dispatch(getDataThunkCreator(collection))
        },
        getDbsThunk:(res) =>{
            dispatch(getDbsThunkCreator(res))
        },
        setDbThunk:(name) =>{
            dispatch(setDbThunkCreator(name))
        }
    }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer