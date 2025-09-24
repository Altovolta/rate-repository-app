import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';
import { Picker } from '@react-native-picker/picker';

import RepositoryItem from './RepositoryItem/RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useState } from 'react';
const styles = StyleSheet.create({
  separator: {
    height: 5,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;


const ReposirotyListSort = ({selectedOrder, setSelectedOrder}) => {

  return (
    <Picker
      selectedValue={selectedOrder}
      onValueChange={(itemValue) =>
        setSelectedOrder(itemValue)
      }>
      <Picker.Item 
      label="Order by" 
      enabled={false} 
      />
      <Picker.Item 
      label="Latest Repositories" 
      value={{orderBy: "CREATED_AT", orderDirection: "DESC"}}
      />
      <Picker.Item label="Highest rated repositories" 
      value={{orderBy: "RATING_AVERAGE", orderDirection: "DESC"}} 
      />
      <Picker.Item 
      label="Lowest rated repositories" 
      value={{orderBy: "RATING_AVERAGE", orderDirection: "ASC"}} 
      />
    </Picker>
  )
}

export const RepositoryListContainer = ({
  repositories, navigate,
  selectedOrder, setSelectedOrder
}) => {

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={
        <ReposirotyListSort 
          selectedOrder={selectedOrder} 
          setSelectedOrder={setSelectedOrder}
        />
      }
      renderItem={(item) => (
        <Pressable onPress={() => navigate(`/repositories/${item.item.id}`)}>
          <RepositoryItem item={item.item}/>
        </Pressable>
      )
      }
    />
  );
}

const RepositoryList = () => {

  const [selectedOrder, setSelectedOrder] = useState({
    orderBy: "CREATED_AT",
    orderDirection: "DESC"
  });
  
  const { repositories } = useRepositories(selectedOrder);
  const navigate = useNavigate()

  return <RepositoryListContainer 
  repositories={repositories} 
  navigate={navigate}
  selectedOrder={selectedOrder}
  setSelectedOrder={setSelectedOrder}
  />;
};

export default RepositoryList;