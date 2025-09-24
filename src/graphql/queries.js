import { gql } from '@apollo/client';
import { REPO_BASIC_INFO, REVIEW_BASE, REVIEW_BASE_WITH_REPO, SINGLE_REPO_INFO, SINGLE_REPO_REVIEWS_INFO } from './fragments';


export const GET_REPOSITORIES = gql`
  query ($searchKeyword: String, $orderDirection: OrderDirection, $orderBy: AllRepositoriesOrderBy) {
    repositories(searchKeyword: $searchKeyword, orderDirection: $orderDirection, orderBy: $orderBy) {
      ...RepoInfo
    }
  }
  ${REPO_BASIC_INFO}
`


export const GET_CURRENT_USER = gql`
  query getCurrentUser($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            ...ReviewBaseWithRepo
          }
        }
      }
    }
  }
  ${REVIEW_BASE_WITH_REPO}
`


export const GET_REPOSITORY = gql`
  query($repositoryId: ID!) {
    repository(id: $repositoryId) {
      ...SingleRepoInfo
      ...SingleRepoReviewsInfo
    }
  }
  ${SINGLE_REPO_INFO}
  ${SINGLE_REPO_REVIEWS_INFO}
`