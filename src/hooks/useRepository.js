import { useQuery } from "@apollo/client/react"
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = ({ repositoryId, first }) => {

  const variables = {
    repositoryId,
    first,
    after: "",
  }

  const { data, error, loading, fetchMore, ...result } = useQuery(GET_REPOSITORY, {
    variables,
    fetchPolicy: 'cache-and-network',
  })

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        ...variables,
        after: data.repository.reviews.pageInfo.endCursor,
      },
    });
  };

  return { 
    repository: data?.repository,
    fetchMore: handleFetchMore, 
    loading, 
    error,
    ...result, 
  };

}

export default useRepository