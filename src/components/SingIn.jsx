import * as yup from 'yup'
import { Formik } from 'formik';
import { Pressable, StyleSheet, View } from 'react-native';
import Text from './Text'
import FornikTextInput from './FornikTextInput'

import theme from '../theme';
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native';


const style = StyleSheet.create({
  container: {
    padding: theme.spacing.formPage,
    backgroundColor: "white"
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.textInput,
    borderRadius: theme.borders.borderRadius,
    marginVertical: theme.spacing.sm,
    alignSelf: "stretch",
    alignItems: "center"
  },
  buttonText: {
    color: theme.colors.textTag,
    fontWeight: "bold"
  }
})

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is missing"),
  password: yup.string().required("Password is missing")
})

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={style.container}>
      <FornikTextInput 
      name={"username"}
      placeholder='Username'
      />
      <FornikTextInput 
      secureTextEntry 
      name={"password"}
      placeholder='Password'
      />
      <Pressable testID="singinFormSumbit"style={style.button} onPress={onSubmit}>
        <Text style={style.buttonText}>Sign in</Text>
      </Pressable>
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