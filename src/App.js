import './App.css';
import React, {useEffect, useState} from "react";
import Collections from "./Collections";
import TableFieldsContainer from "./TableFieldsContainer";
import ListOfDbs from "./ListOfDbs";


const App = (props) => {
    const [active, setActive] = useState("")
    const [activeDb, setActiveDb] = useState("")
    const [activeRoute, setActiveRoute] = useState("/")
    let collectionElement

    let setActiveColl = (name) => {
        setActive(name)
    }
    let setActivedb = (name) => {
        props.setDbThunk(name)
        props.getCollection()
        setActiveDb(name)
    }

    useEffect(() => {
        props.getDbsThunk()
    }, [])

    let listOfDbs = props.dbs.map(i => <ListOfDbs activeDb={activeDb} name={i} setActiveRoute={setActiveRoute}
                                                  setActiveDb={setActivedb}/>)

    if (activeDb !== "") {
        collectionElement = props.collections.map(item => <Collections getData={props.getDataThunk}
                                                                       setActive={setActiveColl} active={active}
                                                                       name={item.name}/>)
    }

    return (
        <div>
            {activeRoute === "/" ?
                <div>
                    {listOfDbs}
                </div>
                :
                <div>
                    <div className="collections">
                        {collectionElement}
                    </div>
                    <TableFieldsContainer collection={active}/>
                </div>
            }

        </div>
    )
}


export default App;
