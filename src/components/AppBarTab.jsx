import { StyleSheet } from "react-native"
import Text from "./Text"
import { Link } from "react-router-native"
import theme
 from "../theme";
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 5,
    
  },

});

const AppBarTab = ({text, textStyle, path}) => {

  return (
    <Link 
    underlayColor={theme.colors.appBarButtonHighlight} 
    style={styles.button} 
    to={path}
    >
      <Text style={textStyle} > {text} </Text>
    </Link>
  )
}

export default AppBarTab