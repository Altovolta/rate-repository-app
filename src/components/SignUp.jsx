import * as yup from 'yup'
import { Formik } from 'formik';
import { StyleSheet, View } from 'react-native';
import { useNavigate } from 'react-router-native';

import Button from './Button';
import FornikTextInput from './FornikTextInput'

import theme from '../theme';
import useSignUp from '../hooks/useSignUp';


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
  username: yup.string()
    .min(5, "Username too short. Must be more than 5 characters")
    .max(30, "Username too long. Must be less than 30 characters")
    .required("Username is missing"),
  password: yup.string()
    .min(5, "Password too short. Must be more than 5 characters")
    .max(30, "Password too long. Must be less than 30 characters")
    .required("Password is missing"),
  passwordConfirm: yup.string()
    .oneOf([yup.ref('password')], "Passwords does not match")
    .required('Password confirm is required')
})

const SignUpForm = ({ onSubmit }) => {
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
      <FornikTextInput 
      secureTextEntry 
      name={"passwordConfirm"}
      placeholder='Password confirmation'
      />
      <Button 
      text="Create account" 
      buttonStyleProp={styles.button}
      onPress={onSubmit}
      />
    </View>
  )
}

export const SignUpContainer = ({ onSubmit }) => {

  const initialValues = {
    username: '',
    password: '',
    passwordConfirm: ''
  }

  return (
    <Formik 
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    >
      {({handleSubmit}) => <SignUpForm onSubmit={handleSubmit}/>}
    </Formik>
  );
}

const SignUp = () => {
  const [ signUp ] = useSignUp();
  const navigate = useNavigate();

  const onSubmit = async (values, { resetForm }) => {
    const { username, password } = values;

    try {
      await signUp({ username, password });
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
      {({handleSubmit}) => <SignUpForm onSubmit={handleSubmit}/>}
    </Formik>
  );
};

export default SignUp;