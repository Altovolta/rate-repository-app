import { useParams } from "react-router-native"
import { FlatList, StyleSheet, View } from "react-native"

import RepositoryItem from "./RepositoryItem/RepositoryItem"
import ReviewItem from "./ReviewItem"
import useRepository from "../hooks/useRepository"


const styles = StyleSheet.create({
  separator: {
    height: 5,
  },
});


const ItemSeparator = () => <View style={styles.separator} />;


const SingleRepository = () => {
  const id = useParams().id

  const { repository, loading, fetchMore } = useRepository({
    repositoryId: id,
    first: 10
  })

  const onEndReached = () => {
    fetchMore();
  };

  if ( loading ) return null

  return (
    <FlatList 
      data={repository.reviews.edges}
      renderItem={({item}) => <ReviewItem item={item.node} />}
      keyExtractor={({ node }) => node.id}
      ListHeaderComponent={<RepositoryItem item={repository} singleView/>}
      ItemSeparatorComponent={<ItemSeparator />}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
    />
  )
  
}

export default SingleRepository