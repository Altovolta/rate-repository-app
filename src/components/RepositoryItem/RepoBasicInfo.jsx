import { View, StyleSheet } from "react-native";
import theme from "../../theme";
import Text from "../Text";
import RepoItemTag from "./RepoItemTag";

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
  },
  secondaryText: {
    fontWeight: theme.fontWeights.normal,
    color: "textSecondary",
  },
  language: {
    alignSelf: "flex-start",
    padding: theme.spacing.sm,
    backgroundColor: theme.colors.primary,
    color: theme.colors.textTag,
    borderRadius: theme.borders.borderRadius,
  },
  tag: {
    alignSelf: "flex-end", 
    paddingLeft: theme.spacing.mid, 
    rowGap: theme.spacing.sm
  }
})

const RepoBasicInfo = ({name, description, language}) => {

  return ( 
    <View style={styles.tag}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.secondaryText}>{description}</Text>
      <RepoItemTag text={language} />
    </View >
  );
}

export default RepoBasicInfo