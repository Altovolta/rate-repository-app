import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';
import { useState } from 'react';
import { useDebounce } from "use-debounce";
import { Picker } from '@react-native-picker/picker';
import { Searchbar } from 'react-native-paper';

import RepositoryItem from './RepositoryItem/RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import theme from '../theme';


const styles = StyleSheet.create({
  separator: {
    height: 5,
  },
  searchBar: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: theme.borders.borderRadius
  }
});

const ItemSeparator = () => <View style={styles.separator} />;


const SearchBar = ({searchKeyword, setSearchKeyword}) => {
  
  return (
    <Searchbar style={styles.searchBar}
      placeholder="Search"
      onChangeText={setSearchKeyword}
      value={searchKeyword}
    />
  );
};



const RepositoryListOrder = ({selectedOrder, setSelectedOrder}) => {

  return (
    <Picker
      selectedValue={selectedOrder}
      onValueChange={(itemValue) =>
        setSelectedOrder(itemValue)
      }>
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
  selectedOrder, setSelectedOrder,
  searchKeyword, setSearchKeyword
}) => {

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={
        (<>
            <SearchBar 
            searchKeyword={searchKeyword} 
            setSearchKeyword={setSearchKeyword}
            />
            <RepositoryListOrder 
              selectedOrder={selectedOrder} 
              setSelectedOrder={setSelectedOrder}
            />
        </>)
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

  const [searchKeyword, setSearchKeyword] = useState('');
  const [debouncedText] = useDebounce(searchKeyword, 300);

  const [selectedOrder, setSelectedOrder] = useState({
    orderBy: "CREATED_AT",
    orderDirection: "DESC"
  });
  
  const { repositories } = useRepositories({
    ...selectedOrder, 
    searchKeyword: debouncedText
  });

  const navigate = useNavigate()

  return <RepositoryListContainer 
  repositories={repositories} 
  navigate={navigate}
  selectedOrder={selectedOrder}
  setSelectedOrder={setSelectedOrder}
  searchKeyword={searchKeyword}
  setSearchKeyword={setSearchKeyword}
  
  />;
};

export default RepositoryList;