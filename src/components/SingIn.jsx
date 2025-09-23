import * as yup from 'yup'
import { Formik } from 'formik';
import { StyleSheet, View } from 'react-native';
import { useNavigate } from 'react-router-native';

import Button from './Button';
import FornikTextInput from './FornikTextInput'

import theme from '../theme';
import useSignIn from '../hooks/useSignIn';


const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.formPage,
    backgroundColor: "white"
  },
  button: {
    marginTop: theme.spacing.sm,
    alignSelf: "stretch",
    alignItems: "center"
  }
})

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is missing"),
  password: yup.string().required("Password is missing")
})

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FornikTextInput 
      name={"username"}
      placeholder='Username'
      />
      <FornikTextInput 
      secureTextEntry 
      name={"password"}
      placeholder='Password'
      />
      <Button 
      testID="singinFormSumbit" 
      text="Sign in" 
      buttonStyleProp={styles.button}
      onPress={onSubmit}
      />
    </View>
  )
}

export const SingInContainer = ({ onSubmit }) => {

  const initialValues = {
    username: '',
    password: ''
  }

  return (
    <Formik 
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    >
      {({handleSubmit}) => <SignInForm onSubmit={handleSubmit}/>}
    </Formik>
  );
}

const SignIn = () => {
  const [ signIn ] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values, { resetForm }) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
      resetForm();
      navigate('/');
    } catch (e) {
      console.log("Error", e);
    }
  };

  const initialValues = {
    username: '',
    password: ''
  }

  return (
    <Formik 
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    >
      {({handleSubmit}) => <SignInForm onSubmit={handleSubmit}/>}
    </Formik>
  );
};

export default SignIn;