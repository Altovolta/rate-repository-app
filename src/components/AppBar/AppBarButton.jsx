import { Pressable, StyleSheet } from "react-native"
import Text from "../Text";
import theme from "../../theme";

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: theme.spacing.sm,
  },
  text: {
    fontSize: theme.fontSizes.appBarItem,
    fontWeight: theme.fontWeights.bold,
  }
});

const AppBarButton = ({text, onPress, ...props}) => {

  return (
    <Pressable 
      style={styles.button} 
      onPress={onPress} 
      {...props}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )

}

export default AppBarButton