import {connect} from "react-redux";
import TableFields from "./TableFields";
import {
    deleteDataThunkCreator,
    getDataThunkCreator,
    sendDataThunkCreator,
    updateDataThunkCreator
} from "./state/dbEditingReducer";

let mapStateToProps = (state) => {
    return {
        data: state.data.data
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        updateDataThunk:(data, id, collection, fieldName) =>{
            dispatch(updateDataThunkCreator(data, id, collection, fieldName))
        },
        getDataThunk: (collection) => {
            dispatch(getDataThunkCreator(collection))
        },
        deleteDataThunk:(id, collection) =>{
            dispatch(deleteDataThunkCreator(id, collection))
        },
        sendDataThunk:(data, collection) =>{
            dispatch(sendDataThunkCreator(data, collection))
        }
    }
}

const TableFieldsContainer = connect(mapStateToProps, mapDispatchToProps)(TableFields)
export default TableFieldsContainer