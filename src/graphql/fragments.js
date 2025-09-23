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

export const SINGLE_REPO_REVIEWS_INFO = gql`
fragment SingleRepoReviewsInfo on Repository {
  reviews {
    edges {
      node {
        id
        text
        rating
        createdAt
        user {
          id
          username
        }
      }
    }
  }
}`


export const REPO_BASIC_INFO = gql`
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
