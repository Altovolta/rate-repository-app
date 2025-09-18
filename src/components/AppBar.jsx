import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme'
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10,
    backgroundColor: theme.colors.appBar,
    display: "flex",
    flexDirection: "row"
  },
  text: {
    fontSize: theme.fontSizes.appBarItem,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.textPrimary,
  }
});

const AppBar = () => {
  return (
  <View style={styles.container}>
    <ScrollView horizontal>
      <AppBarTab textStyle={styles.text} text={"Repositories"} path="/"/>
      <AppBarTab textStyle={styles.text} text={"Sign In"} path="/signin"/>
    </ScrollView>
  </View>);
};

export default AppBar;