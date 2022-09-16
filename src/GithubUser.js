import { useGithubUser } from './useGithubUser'


export function GithubUser({ username }) {
    const { data } = useGithubUser(username)

    return <div>
        {data && <div>
            <div>Github profile: {data.name}</div>
            <div>Public repositories: {data.public_repos}</div>
            </div>}
    </div>
}