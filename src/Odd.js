import { useState } from "react";

export function Odd({odd}) {
    const [showOdd, setShowOdd] = useState(false);

    const showOddOnClick = () => {
        setShowOdd(true)
    }

    return <div>
        <button onClick={showOddOnClick}>Odd</button>
        {showOdd &&<div>Odd: <ul>{odd && odd.oddList.map((item, index) => <li key={index}>{item} <button>Remove</button></li>)}</ul></div>}
    </div>
}