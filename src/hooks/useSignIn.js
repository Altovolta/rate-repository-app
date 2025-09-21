import { useApolloClient, useMutation } from "@apollo/client/react";
import { AUTHORIZE } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const [authorize, result] = useMutation(AUTHORIZE);

  const signIn = async ({ username, password }) => {
    
    const { data } = await authorize({ 
      variables:{ 
        credentials: { username, password }
      }
    });

    await authStorage.setAccessToken(data.authenticate.accessToken);
    apolloClient.resetStore();
  };

  return [signIn, result];
};

export default useSignIn;