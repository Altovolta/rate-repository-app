import { View, StyleSheet, ScrollView } from 'react-native';
import { useApolloClient, useQuery } from "@apollo/client/react";
import useAuthStorage from '../../hooks/useAuthStorage'
import Constants from 'expo-constants';

import theme from '../../theme'
import AppBarTab from './AppBarTab';

import { GET_CURRENT_USER } from '../../graphql/queries';
import Button from '../Button';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10,
    backgroundColor: theme.colors.appBar,
    display: "flex",
    flexDirection: "row"
  },
  button: {
    alignItems: 'center',
    padding: theme.spacing.sm,
    backgroundColor: theme.colors.appBar,
  },
  text: {
    fontSize: theme.fontSizes.appBarItem,
  }
});

const AppBar = () => {

  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  
  const handleLogout = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  }

  const { data } = useQuery(GET_CURRENT_USER);

  return (
  <View style={styles.container}>
    <ScrollView horizontal>
      <AppBarTab text={"Repositories"} path="/"/>
      {
        data && data.me
        ? (
          <>
            <AppBarTab text="Create a review" path="/reviews/create"/>
            <Button 
            type='secondary'
            text="Sign Out"
            textStyleProp={styles.text} 
            buttonStyleProp={styles.button}
            onPress={handleLogout}/>
          </>
      
      )
        : <AppBarTab text={"Sign In"} path="/signin"/>
      }
    </ScrollView>
  </View>);
};

export default AppBar;