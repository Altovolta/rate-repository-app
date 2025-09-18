import { View, StyleSheet } from "react-native";
import RepoImage from "./RepoImage";
import RepoBasicInfo from "./RepoBasicInfo";
import RepoStat from "./RepoStat";
import theme from "../../theme";

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
  }
})

const RepositoryItem = ({item}) => {

  return (
    <View style={styles.item}>
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
    </View>
  );

};

export default RepositoryItem;