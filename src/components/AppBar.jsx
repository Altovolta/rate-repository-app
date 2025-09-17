import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme'
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 15,
    backgroundColor: theme.backgounds.appBarBackground,
    display: "flex",
  },
  item: {
    flexGrow: 0,
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
    <AppBarTab style={styles.item} textStyle={styles.text} text={"Repositories"}/>
  </View>);
};

export default AppBar;