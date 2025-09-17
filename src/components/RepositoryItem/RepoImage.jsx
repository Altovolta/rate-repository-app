import { View, StyleSheet, Image } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  image: {
    height:theme.tinyImage.height,
    width: theme.tinyImage.width,
    borderRadius: theme.borders.borderRadius,
  },
  container: {
    padding: theme.padding.small,
    alignSelf: 'flex-start'
  }
})

const RepoImage = ({src}) => {

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: src}}/>
    </View>
  )
};

export default RepoImage