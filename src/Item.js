import React, {useState} from "react";
const Item = (props) => {
    const [data, setData] = useState(props.data)
    const [toggle, setToggle] = useState(true)


    let saveData = (e) => {
        setData(e.target.value)
    }

    let updateData = () =>{
        props.updateData(data, props.id, props.fieldName)
        setToggle(true)
    }

    let deleteData = () =>{
        props.deleteData(props.id)
    }


    return (
        <div>
            {toggle &&
            <div className="table-item" onWheel={deleteData} onDoubleClick={()=>{setToggle(false)}}>
                {props.data}
            </div>
            }
            {!toggle &&
                <input className="table-item" type="text" value={data} onChange={saveData} onMouseLeave={updateData}/>
            }
        </div>
    )
}
export default Item