import { useField } from "formik"
import TextInput from "./TextInput"
import Text from "./Text"
import { StyleSheet } from "react-native"
import theme from "../theme"


const styles = StyleSheet.create({
  errorText: {
    color: theme.colors.error
  }
})

const FornikTextInput = ({name, ...props}) => {

  const [field, meta, helper] = useField(name)

  const isError = meta.error && meta.touched

  return (
    <>
      <TextInput
      error={isError}
      value={field.value}
      onChangeText={(value) => helper.setValue(value)}
      {...props}
      />
      {isError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  )
}

export default FornikTextInput