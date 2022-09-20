import { useState, useEffect } from "react";

export function Odd({odd}) {
    const [showOdd, setShowOdd] = useState(false);
    const [removeOdd, setRemoveOdd] = useState({oddList: odd}) 

    const showOddOnClick = () => {
        setShowOdd(true)
    }
    
    useEffect(() => setRemoveOdd({oddList: odd})
    , [odd])
    


    const handleRemoveButton  = (e) => {
        const newOdd = removeOdd.oddList
        newOdd.splice(Number(e.target.id), 1)
        setRemoveOdd({oddList: newOdd})
    }

    return <div>
        <button onClick={showOddOnClick}>Odd</button>
        {showOdd && <div>Even: <ul>{removeOdd.oddList.map((item, index) => <li key={index}>{item} <button id={index} onClick={handleRemoveButton}>Remove</button></li>)}</ul></div>}
    </div>
}