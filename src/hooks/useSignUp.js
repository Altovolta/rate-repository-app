import { useMutation } from "@apollo/client/react";
import { CREATE_USER } from "../graphql/mutations";
import useSignIn from "./useSignIn";

const useSignUp = () => {

  const [singIn] = useSignIn()
  const [createUser, result] = useMutation(CREATE_USER);

  const signUp = async ({ username, password }) => {
    
    await createUser({ 
      variables:{ 
        user: { username, password }
      }
    });

    await singIn({username, password})
  };

  return [signUp, result];
};

export default useSignUp;