import React from "react";

const Collections = (props) => {

    let setActiveColl = () => {
        props.setActive(props.name)
        props.getData(props.name)
    }

    return (
        <div className="collection-item">
            {props.active === props.name ?
                <div>
                    <b>
                        <div>{props.name}</div>
                    </b>
                </div>
                :
                <div onClick={setActiveColl}>
                    <div>{props.name}</div>
                </div>
            }
        </div>
    )
}

export default Collections