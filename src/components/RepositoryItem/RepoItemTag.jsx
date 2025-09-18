import { View, StyleSheet } from "react-native";
import theme from "../../theme";
import Text from "../Text";

const styles = StyleSheet.create({
  tag: {
    alignSelf: "flex-start",
    backgroundColor: theme.colors.primary,
    color: theme.colors.textTag,
    borderRadius: theme.borders.borderRadius,
    padding: theme.spacing.sm,
  },
})

const RepoItemTag = ({text}) => {
  return (
    <View>
      <Text style={styles.tag}>{text}</Text>
    </View>
  )
}

export default RepoItemTag