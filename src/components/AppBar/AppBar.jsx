import { View, StyleSheet, ScrollView } from 'react-native';
import { useApolloClient, useQuery } from "@apollo/client/react";
import useAuthStorage from '../../hooks/useAuthStorage'
import Constants from 'expo-constants';

import theme from '../../theme'
import AppBarTab from './AppBarTab';
import AppBarButton from './AppBarButton';

import { GET_CURRENT_USER } from '../../graphql/queries';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10,
    backgroundColor: theme.colors.appBar,
    display: "flex",
    flexDirection: "row"
  },
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
        ? <AppBarButton text={"Sign Out"} onPress={handleLogout}/> 
        : <AppBarTab text={"Sign In"} path="/signin"/>
      }
    </ScrollView>
  </View>);
};

export default AppBar;