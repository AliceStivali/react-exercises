import { useEffect, useState } from "react";

export function Even({even}) {
    const [showEven, setShowEven] = useState(false);
    const [removeEven, setRemoveEven] = useState({evenList: even}) 

    const showEvenOnClick = () => {
        setShowEven(!showEven)
    }
    
    useEffect(() => setRemoveEven({evenList: even})
    , [even])
    


    const handleRemoveButton  = (e) => {
        const newEven = removeEven.evenList
        newEven.splice(Number(e.target.id), 1)
        setRemoveEven({evenList: newEven})
    }

    return <div>
        <button onClick={showEvenOnClick}>Even</button>
        {showEven && <div>Even: <ul>{removeEven.evenList.map((item, index) => <li key={index}>{item} <button id={index} onClick={handleRemoveButton}>Remove</button></li>)}</ul></div>}
    </div>
}