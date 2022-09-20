import { useState } from "react";

export function Even({even}) {
    const [showEven, setShowEven] = useState(false);

    const showEvenOnClick = () => {
        setShowEven(true)
    }

    const handleRemoveButton  = () => {
        const newEven = [...even.evenList]
        const index = {index}
        newEven.splice(index, 1)
        console.log(index)
        return {evenList: newEven}
    }


    return <div>
        <button onClick={showEvenOnClick}>Odd</button>
        {showEven && <div>Even: <ul>{even && even.evenList.map((item, index) => <li key={index}>{item} <button onClick={handleRemoveButton}>Remove</button></li>)}</ul></div>}
    </div>
}