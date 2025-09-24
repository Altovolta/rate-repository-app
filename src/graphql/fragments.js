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
export const REVIEW_BASE = gql`
  fragment ReviewBase on Review {
    id
    text
    rating
    createdAt
  }
`

export const REVIEW_BASE_WITH_USER = gql`
fragment ReviewBaseWithUser on Review {
  ...ReviewBase
  user {
    id
    username
  }
}
${REVIEW_BASE}
`

export const REVIEW_BASE_WITH_REPO = gql`
fragment ReviewBaseWithRepo on Review {
  ...ReviewBase
  repository {
    fullName
  }
}
${REVIEW_BASE}
`

export const SINGLE_REPO_REVIEWS_INFO = gql`
fragment SingleRepoReviewsInfo on Repository {
  reviews {
    edges {
      node {
        ...ReviewBaseWithUser
      }
    }
  }
}
${REVIEW_BASE_WITH_USER}
`

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
