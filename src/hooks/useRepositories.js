import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client/react';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({orderBy, orderDirection, searchKeyword, first}) => {

  const [repositories, setRepositories] = useState();

  const variables = {
    searchKeyword,
    orderBy,
    orderDirection,
    first,
    after: "",
  }

  const { data, error, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables
  });
  
  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        ...variables,
        after: data.repositories.pageInfo.endCursor,
      },
    });
  };

  useEffect(() => {
    if (!loading && data) {
      setRepositories(data.repositories);
    }
  }, [loading, data]);

  return { 
    repositories: data?.repositories,
    fetchMore: handleFetchMore, 
    loading, 
    error,
    ...result, 
  };
};

export default useRepositories;