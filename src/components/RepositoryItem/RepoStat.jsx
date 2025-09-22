import { View, StyleSheet } from "react-native";
import theme from "../../theme";
import Text from "../Text";
import { getFormattedNumber } from "../../utils/getFormatedNumber";

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

  const itemValue =  getFormattedNumber(value)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{itemValue}</Text>
      <Text style={styles.value}>{text}</Text>
    </View>
  )
}

export default RepoStat