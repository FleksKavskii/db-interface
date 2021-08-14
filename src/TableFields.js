import React, {useState} from "react";
import Field from "./Field";
import "./Fields.css"
import TableItem from "./TableItem";
import InputField from "./InputField";

const TableFields = (props) => {
    let fieldsTemp
    let fields
    let table
    let inputFields
    let dataForSend = {}

    const [toggle, setToggle] = useState(false)

    let updateDataForSend = (data, fieldName) => {
        dataForSend[fieldName] = data
    }

    let sendData = () => {
        let check = true
        for (let value in dataForSend) {
            if (dataForSend[value] === "") {
                setToggle(true)
                check = false
            }
        }
        if (check) {
            setToggle(false)
            props.sendDataThunk(dataForSend, props.collection)
            dataForSend = {}
        }
        props.getDataThunk(props.collection)
    }


    let updateData = (data, id, fieldName) => {
        props.updateDataThunk(data, id, props.collection, fieldName)
        props.getDataThunk(props.collection)
    }

    let deleteData = (id) => {
        props.deleteDataThunk(id, props.collection)
        props.getDataThunk(props.collection)
    }
    if (props.data[0] !== undefined) {
        fieldsTemp = Object.keys(props.data[0])
        fields = fieldsTemp.map(i => <Field field={i}/>)
        table = props.data.map(i => <TableItem deleteData={deleteData} updateData={updateData} data={i}/>)
        inputFields = fieldsTemp.map(i => <InputField updateDataForSend={updateDataForSend} field={i}/>)
        for (let value of fieldsTemp)
            dataForSend = {...dataForSend, [value]: ""}
    }

    return (
        <div>
            <div className="fields">
                {fields}
            </div>
            {table}
            <div className="fields">
                {inputFields}
                <button onClick={sendData}>отправить</button>
            </div>
            {toggle &&
            <div>Заполните все данные</div>
            }
        </div>
    )
}

export default TableFields