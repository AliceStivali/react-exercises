import { useParams } from 'react-router-dom'
import { useGithubUser } from './useGithubUser'


export function GithubUser() {
    const { username } = useParams()
    const { data, loading, error } = useGithubUser(username)

    return <div>
        {loading && <h2>Loading...</h2>}
        {error && <h2>Error: username not found</h2>}
        {data && <div>
            <div>Github profile: {data.name}</div>
            <div>Public repositories: {data.public_repos}</div>
            </div>}
    </div>
}