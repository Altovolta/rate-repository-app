import { gql } from '@apollo/client';
import { REPO_BASIC_INFO, SINGLE_REPO_INFO, SINGLE_REPO_REVIEWS_INFO } from './fragments';


export const GET_REPOSITORIES = gql`
  query ($searchKeyword: String, $orderDirection: OrderDirection, $orderBy: AllRepositoriesOrderBy) {
    repositories(searchKeyword: $searchKeyword, orderDirection: $orderDirection, orderBy: $orderBy) {
      ...RepoInfo
    }
  }
  ${REPO_BASIC_INFO}
`


export const GET_CURRENT_USER = gql`
  query {
    me {
      id
      username
    }
  }
`


export const GET_REPOSITORY = gql`
  query($repositoryId: ID!) {
    repository(id: $repositoryId) {
      ...SingleRepoInfo
      ...SingleRepoReviewsInfo
    }
  }
  ${SINGLE_REPO_INFO},
  ${SINGLE_REPO_REVIEWS_INFO}
`