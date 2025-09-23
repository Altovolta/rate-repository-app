import { gql } from "@apollo/client";

export const AUTHORIZE = gql`
mutation ($credentials: AuthenticateInput) {
  authenticate(credentials: $credentials) {
    accessToken
  }
}
`

export const CREATE_REVIEW = gql`
mutation ($review: CreateReviewInput) {
  createReview(review: $review) {
    id
    repositoryId
  }
}
`