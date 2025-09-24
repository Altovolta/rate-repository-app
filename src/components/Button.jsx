import { View, StyleSheet, Pressable } from "react-native";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  button: {
    padding: theme.spacing.textInput,
    borderRadius: theme.borders.borderRadius,
  },
  textContainer: {
    alignItems: "center"
  },
  buttonText: {
    fontWeight: "bold"
  }
})


const Button = ({text, type = "primary", buttonStyleProp, textStyleProp, ...props}) => {

  const buttonStyle = [
    styles.button,
    type === "primary" && { 
      backgroundColor: theme.colors.primary,
      
    },
    type === "secondary" && { 
      backgroundColor: theme.colors.appBar,
    },
    type === "remove" && { 
      backgroundColor: theme.colors.remove,
    },
    buttonStyleProp
  ]

  const textStyle = [
    styles.buttonText,
    (type === "primary" || type === "remove") && { 
      color: theme.colors.textTag,
    },
    type === "secondary" && { 
      color: theme.colors.textPrimary,
    },
    textStyleProp
  ]

  return (
    <Pressable style={buttonStyle} {...props}>
      <View style={styles.textContainer}>
        <Text style={textStyle}>{text}</Text>
      </View>
    </Pressable>
  )
}

export default Button