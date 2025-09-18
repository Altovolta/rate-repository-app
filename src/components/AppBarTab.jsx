import { StyleSheet } from "react-native"
import { Link } from "react-router-native"
import Text from "./Text"
import theme from "../theme";

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

const AppBarTab = ({text, path}) => {

  return (
    <Link 
    underlayColor={theme.colors.appBarButtonHighlight} 
    style={styles.button} 
    to={path}
    >
      <Text style={styles.text} > {text} </Text>
    </Link>
  )
}

export default AppBarTab