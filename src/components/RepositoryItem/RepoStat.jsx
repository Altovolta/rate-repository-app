import { View, StyleSheet } from "react-native";
import theme from "../../theme";
import Text from "../Text";

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: theme.fontSizes.subheading,
  },
  value: {
    color: "textSecondary",
  },
  container: {
    flexGrow: 1, 
    alignItems:"center", 
    flexDirection: "column"
  }
})

const RepoStat = ({text, value}) => {

  const itemValue =  value > 1000 
  ? `${(value / 1000).toFixed(1)}k`
  : `${value}`

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{itemValue}</Text>
      <Text style={styles.value}>{text}</Text>
    </View>
  )
}

export default RepoStat