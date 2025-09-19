import { gql } from '@apollo/client';

export const REPO_INFO = gql`
fragment RepoInfo on RepositoryConnection {
  edges {
    cursor
    node {
      id
      ownerAvatarUrl
      fullName
      description
      language
      forksCount
      reviewCount
      stargazersCount
    }
  }
}
`