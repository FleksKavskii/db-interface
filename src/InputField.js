import React, {useState} from "react";

const InputField = (props) => {

    const [toggle, setToggle] = useState(true)
    const [data, setData] = useState("")

    let updateDataForSend = () => {
        props.updateDataForSend(data, props.field)
        setToggle(true)
    }

    let setText = (e) => {
        setData(e.target.value)
    }


    return (
        <div>
            {toggle &&
            <div className="table-item" onDoubleClick={() => {setToggle(false)}}>{data}</div>
            }
            {!toggle &&
            <input className="table-item" type="text" value={data} onChange={setText} onMouseLeave={updateDataForSend}/>
            }

        </div>
    )
}

export default InputField