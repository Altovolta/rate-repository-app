import { gql } from '@apollo/client';

export const SINGLE_REPO_INFO = gql`
fragment SingleRepoInfo on Repository {
  id
  ownerAvatarUrl
  fullName
  description
  language
  forksCount
  reviewCount
  stargazersCount
  ratingAverage
  url
}
`

export const REPO_INFO = gql`
fragment RepoInfo on RepositoryConnection {
  edges {
    cursor
    node {
      ...SingleRepoInfo
    }
  }
}
  ${SINGLE_REPO_INFO}
`
