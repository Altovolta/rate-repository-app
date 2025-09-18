import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import Text from "../components/Text"
import { useFormik } from 'formik';
import theme from '../theme';


const style = StyleSheet.create({
  container: {
    padding: theme.spacing.formPage
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


const SignIn = () => {

  const onSubmit = (values) => {
    console.log(values);
  };

  const initialValues = {
    username: '',
    password: ''
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
  })

  return (
    <View style={style.container}>
      <TextInput 
      style={style.textInput}
      placeholder='Username'
      value={formik.values.username}
      onChangeText={formik.handleChange('username')}
      />
      <TextInput 
      style={style.textInput}
      secureTextEntry
      placeholder='Password'
      value={formik.values.password}
      onChangeText={formik.handleChange('password')}
      />
      <Pressable style={style.button} onPress={formik.handleSubmit}>
        <Text style={style.buttonText}> Sign in </Text>
      </Pressable>
    </View>
  );
};

export default SignIn;