import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import Constants from 'expo-constants';
import { SetContextLink } from '@apollo/client/link/context';
import { relayStylePagination } from '@apollo/client/utilities';

const httpLink = new HttpLink({
  uri: Constants.expoConfig.extra.apolloUri,
});

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        repositories: relayStylePagination(),
      },
    },
    Repository: {
      fields: {
        reviews: relayStylePagination(),
      },
    },
  },
});


const createApolloClient = (authStorage) => {

  const authLink = new SetContextLink(async ( _, { headers } ) => {
    try {
      const accessToken = await authStorage.getAccessToken();
      return {        
        headers: {         
          ...headers,         
          authorization: accessToken ? `Bearer ${accessToken}` : '',        
        },
      };
      
    } catch (e) {
      console.log("Error", e);
      return {
        headers,
      };
    }
  });
  
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
  });
};

export default createApolloClient;