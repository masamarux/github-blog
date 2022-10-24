import { Octokit } from 'octokit'

const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_AUTH,
})

export async function getUser(username: string) {
  try {
    const response = await octokit.request('GET /users/{username}', {
      username,
    })

    return response
  } catch (err) {
    console.error(err)
  }
}

interface GetRepositoryIssuesProps {
  owner: string
  repo: string
}

export async function getRepositoryIssues({
  owner,
  repo,
}: GetRepositoryIssuesProps) {
  try {
    const response = await octokit.request('GET /repos/{owner}/{repo}/issues', {
      owner,
      repo,
    })

    return response
  } catch (err) {
    console.error(err)
  }
}
