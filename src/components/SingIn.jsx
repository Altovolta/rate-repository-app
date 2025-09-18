import * as yup from 'yup'
import { useFormik } from 'formik';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import Text from "../components/Text"
import theme from '../theme';


const style = StyleSheet.create({
  container: {
    padding: theme.spacing.formPage,
    backgroundColor: "white"
  },
  textInput: {
    borderWidth: theme.borders.width,
    borderColor: '#ccc',
    padding: theme.spacing.textInput,
    marginVertical: theme.spacing.sm,
    borderRadius: theme.borders.borderRadius
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


const SignIn = () => {

  const onSubmit = (values) => {
    console.log(values);
    formik.resetForm();
  };

  const initialValues = {
    username: '',
    password: ''
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })

  return (
    <View style={style.container}>
      <TextInput 
      style={{
        ...style.textInput, 
        borderColor: formik.errors.username 
        ? '#d73a4a' : 
        style.textInput.borderColor
      }}
      placeholder='Username'
      value={formik.values.username}
      onChangeText={formik.handleChange('username')}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: '#d73a4a' }}>{formik.errors.username}</Text>
      )}
      <TextInput 
        style={{
        ...style.textInput, 
        borderColor: formik.errors.password 
        ? '#d73a4a' : 
        style.textInput.borderColor
      }}
      secureTextEntry
      placeholder='Password'
      value={formik.values.password}
      onChangeText={formik.handleChange('password')}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: '#d73a4a' }}>{formik.errors.password}</Text>
      )}
      <Pressable style={style.button} onPress={formik.handleSubmit}>
        <Text style={style.buttonText}> Sign in </Text>
      </Pressable>
    </View>
  );
};

export default SignIn;