import { useParams } from "react-router-native"
import { useQuery } from "@apollo/client/react"
import { GET_REPOSITORY } from "../graphql/queries"
import { FlatList, StyleSheet, View } from "react-native"

import RepositoryItem from "./RepositoryItem/RepositoryItem"
import ReviewItem from "./ReviewItem"


const styles = StyleSheet.create({
  separator: {
    height: 5,
  },
});


const ItemSeparator = () => <View style={styles.separator} />;


const SingleRepository = () => {
  const id = useParams().id
  const { data } = useQuery(GET_REPOSITORY, {
    variables: { repositoryId: id },
    fetchPolicy: 'cache-and-network',
  }
);

  if (!data ) return null

  console.log(id)
  const reviews = data.repository.reviews.edges

  return (
    <FlatList 
      data={reviews}
      renderItem={({item}) => <ReviewItem item={item.node} />}
      keyExtractor={({ node }) => node.id}
      ListHeaderComponent={<RepositoryItem item={data.repository} singleView/>}
      ItemSeparatorComponent={<ItemSeparator />}
    />
  )
  
}

export default SingleRepository