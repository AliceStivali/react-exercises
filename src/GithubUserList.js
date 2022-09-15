import { useState } from "react"
import { GithubUser } from "./GithubUser"

export function GithubUserList() {
    const [input, setInput] = useState('')
    const [users, setUsers] = useState({
        userList: []
    })

    const inputChange = (e) => setInput(e.target.value)

    function addUsername() {
        setUsers({userList : [...users.userList, input]})
    }

    // const addUsername = () => {
    //     setUsers((state) => ({
    //         users: [...state.usernames, state.userinput],
    //         userinput: ''
    // }))}

    return <div>
        <input name='userinput' onChange={inputChange}></input>
        <button onClick={addUsername}>Enter a Github username</button>
        <ul>{users && users.userList.map((item, index) => <li key={index}><GithubUser username={item} /></li>)}</ul>
    </div>
}