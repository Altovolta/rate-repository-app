import { useMutation } from "@apollo/client/react";
import { AUTHORIZE } from "../graphql/mutations";

const useSignIn = () => {
  const [authorize, result] = useMutation(AUTHORIZE);

  const signIn = async ({ username, password }) => {
    
    return await authorize({ 
      variables:{ 
        credentials: { username, password }
      }
    });

  };

  return [signIn, result];
};

export default useSignIn;