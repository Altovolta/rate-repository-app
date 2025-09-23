import { View, StyleSheet, Pressable } from "react-native";
import * as Linking from 'expo-linking';

import RepoImage from "./RepoImage";
import RepoBasicInfo from "./RepoBasicInfo";
import RepoStat from "./RepoStat";
import theme from "../../theme";
import Text from "../Text";

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    margin: theme.spacing.xs,
    padding: theme.spacing.mid
  },
  basicInfo: {
    alignSelf: "flex-start",
    flexDirection: "row"
  },
  stats: {
    alignSelf: "flex-start", 
    flexDirection: "row", 
    paddingTop: theme.spacing.mid
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.textInput,
    borderRadius: theme.borders.borderRadius,
    marginVertical: theme.spacing.sm,
    alignSelf: "stretch",
    alignItems: "center"
  },
  buttonText: {
    color: theme.colors.textTag,
    fontWeight: "bold"
  }
})


const Button = ({text, ...props}) => {

  return (
    <Pressable style={styles.button} {...props}>
      <View>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </Pressable>
  )
}

const RepositoryItem = ({item, singleView = false}) => {

  return (
    <View testID="repositoryItem" style={styles.item}>
      <View style={styles.basicInfo}>
        <RepoImage src={item.ownerAvatarUrl}/>
        <RepoBasicInfo 
        name={item.fullName}
        description={item.description}
        language={item.language}
        />
      </View>
      <View style={styles.stats}>
        <RepoStat text={"Stars"} value={item.stargazersCount} />
        <RepoStat text={"Forks"} value={item.forksCount} />
        <RepoStat text={"Reviews"} value={item.reviewCount} />
        <RepoStat text={"Rating"} value={item.ratingAverage} />
      </View>
      {
        singleView && 
        <Button 
        text="Open in Github"
        onPress={() => Linking.openURL(item.url)}
        />
      }
    </View>
  );

};

export default RepositoryItem;