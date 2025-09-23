import { useMutation } from "@apollo/client/react";
import { CREATE_REVIEW } from "../graphql/mutations";

const useCreateReview = () => {

  const [createReviewMutation, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({ ownerName, repositoryName, rating, text}) => {
    
    return await createReviewMutation({ 
      variables:{ 
        review: {
          ownerName,
          rating,
          repositoryName,
          text
        }
      }
    });

  };

  return [createReview, result];
};

export default useCreateReview;