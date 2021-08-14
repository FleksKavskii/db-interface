import React from "react";

const ListOfDbs = (props) =>{

    let setActive = () =>{
        props.setActiveDb(props.name)
        props.setActiveRoute("/collection")
    }

    return (
        <div>
            {props.name === props.activeDb ?
                <b>
                    <div>{props.name}</div>
                </b>
                :
                <div onClick={setActive}>{props.name}</div>
            }
        </div>
    )
}

export default ListOfDbs