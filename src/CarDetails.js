import { useEffect, useRef, useState } from "react"

export function CarDetails({ initialData = {model: 'Lancia Y', year: '2021', color: 'black'} }) {
    const inputRef = useRef()

    const [status, setStatus] = useState(false)

    useEffect(() => {
        inputRef.current.elements.model.value = initialData.model
        inputRef.current.elements.year.value = initialData.year
        inputRef.current.elements.color.value = initialData.color
    }, [initialData])

    useEffect(() => {
        if (status === true) {
            inputRef.current.reset()
        }
    }, [status])

    const handleInputChange = () => setStatus(true)

    return <div>
        <h3>Car details:</h3>
        <form ref={inputRef} onChange={handleInputChange}>
            <div>Model: <input name="model" /></div>
            <div>Year: <input name="year" /></div>
            <div>Color: <input name="color" /></div>
            <button type="submit">Submit</button>
        </form>
    </div>
}