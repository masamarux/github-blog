import { GetResponseDataTypeFromEndpointMethod } from '@octokit/types'
import { Octokit } from '@octokit/rest'

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

interface GetIssueProps {
  owner: string
  repo: string
  issueNumber: number
}

export type IssueProps = GetResponseDataTypeFromEndpointMethod<
  typeof octokit.issues.get
>

export async function getIssueData({
  owner,
  repo,
  issueNumber,
}: GetIssueProps) {
  try {
    const response = await octokit.request(
      'GET /repos/{owner}/{repo}/issues/{issue_number}',
      {
        owner,
        repo,
        issue_number: issueNumber,
      },
    )

    return response
  } catch (err) {
    console.error(err)
  }
}

interface getSearchRepositoryIssuesProps {
  owner: string
  repo: string
  query: string
}

export type IssuesProps = GetResponseDataTypeFromEndpointMethod<
  typeof octokit.search.issuesAndPullRequests
>

export async function getSearchRepositoryIssues({
  owner,
  repo,
  query,
}: getSearchRepositoryIssuesProps) {
  try {
    const q = `${query}+repo:${owner}/${repo}`

    const response = await octokit.request('GET /search/issues', {
      q,
    })

    return response
  } catch (err) {
    console.error(err)
  }
}
