import { gql } from "@apollo/client";

export const AUTHORIZE = gql`
mutation ($credentials: AuthenticateInput) {
  authenticate(credentials: $credentials) {
    accessToken
  }
}
`