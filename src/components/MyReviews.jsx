import { useQuery } from "@apollo/client/react";
import { GET_CURRENT_USER } from "../graphql/queries";
import { FlatList, StyleSheet } from "react-native";
import ReviewItem from "./ReviewItem";


const styles = StyleSheet.create({
  separator: {
    height: 5,
  },
});


const ItemSeparator = () => <View style={styles.separator} />;

const MyReviews = () => {

  const { data } = useQuery(GET_CURRENT_USER, {
    variables: {
      includeReviews: true
    }
  });


  if (!data || !data.me) {
    return null
  }

  const reviews = data.me.reviews.edges

  return <FlatList 
      data={reviews}
      renderItem={({item}) => <ReviewItem item={item.node} personalReview />}
      keyExtractor={({ node }) => node.id}
      ItemSeparatorComponent={<ItemSeparator />}
    />

}

export default MyReviews