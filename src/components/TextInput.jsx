import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  normal: {
    borderWidth: theme.borders.width,
    borderColor: "#ccc",
    padding: theme.spacing.textInput,
    marginVertical: theme.spacing.sm,
    borderRadius: theme.borders.borderRadius
  },
  error: {
    borderColor: theme.colors.error
  }
})

const TextInput = ( { style, name, error, ...props} ) => {

  const textInputStyle = [
    styles.normal,
    error && styles.error,
    style
  ]

  return (
    <NativeTextInput style={textInputStyle} {...props}/>
  )
}

export default TextInput;