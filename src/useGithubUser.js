import useSWR from "swr"

const fetcher = url => fetch(url).then(response => response.json())


export function useGithubUser(username) {
    const { data, error, mutate } = useSWR(`https://api.github.com/users/${username}`, fetcher)

    function handleRefreshUsers() {
        mutate()
    }

    return {
        data: data,
        error: error,
        loading: !data && !error,
        onRefresh: handleRefreshUsers
    }
}


// export function useGithubUser(username) {
//     const [data, setData] = useState(null)
//     const [loading, setLoading] = useState(false)
//     const [error, setError] = useState(null)

//     async function fetchFromGithub(username){
//         setLoading(true)
//         setError(null)

//         try {
//             const response = await fetch(`https://api.github.com/users/${username}`)
//             const json =  await response.json()

//             setData(json)
//         } catch (error) {
//             setError(error)
//             setData(null)
//         } finally {
//             setLoading(false)
//         }
//     }
    
//     useEffect(() => {
//         fetchFromGithub(username)
//     }, [username])

//     return { data, loading, error }
// }