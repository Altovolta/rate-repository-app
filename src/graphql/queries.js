import { gql } from '@apollo/client';
import { REPO_INFO } from './fragments';


export const GET_REPOSITORIES = gql`
  query  {
    repositories {
      ...RepoInfo
    }
  }
  ${REPO_INFO}
`;


export const GET_CURRENT_USER = gql`
  query {
    me {
      id
      username
    }
  }
`