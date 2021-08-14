import React from "react";
import Item from "./Item";

const TableItem = (props) =>{
    let temp = []
    for (let value in props.data){
        temp.push(<Item fieldName={value} deleteData = {props.deleteData} updateData = {props.updateData} id = {props.data._id} data = {props.data[value]}/>)
    }

    return (
        <div className="table">
            {temp}
        </div>
    )
}
export default TableItem