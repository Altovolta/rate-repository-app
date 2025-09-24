import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client/react';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({orderBy, orderDirection}) => {
  const [repositories, setRepositories] = useState();
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {
      orderBy,
      orderDirection
    }
  });
  
  useEffect(() => {
    if (!loading && data) {
      setRepositories(data.repositories);
    }
  }, [loading, data]);

  return { repositories, loading, error };
};

export default useRepositories;