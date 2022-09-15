import { useEffect, useState } from "react"

export function GithubUser({ username }) {
    const [data, setData] = useState(null)
    // const [error, setError] = useState(null)

    async function fetchFromGithub(username){
        // setError(null)
    
        // try {
        const response = await fetch(`https://api.github.com/users/${username}`)
        const json =  await response.json()

        setData(json)
        // } catch (error){
        //     setError(error)
        //     setData(null)
        // }
    
    }

    useEffect(() => {
        fetchFromGithub(username)
    }, [username])

    return <div>
        {data && <div>
            <div>Github profile: {data.name}</div>
            <div>Public repositories: {data.public_repos}</div>
            </div>}
    </div>
}