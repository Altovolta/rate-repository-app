import { useMutation, useQuery } from "@apollo/client/react";
import { GET_CURRENT_USER } from "../graphql/queries";
import { Alert, FlatList, StyleSheet, View } from "react-native";
import ReviewItem from "./ReviewItem";
import Button from './Button'
import theme from "../theme";
import { useNavigate } from "react-router-native";
import { DELETE_REVIEW } from "../graphql/mutations";

const styles = StyleSheet.create({
  separator: {
    height: 5,
  },
  container: {
    backgroundColor: "white",
    margin: theme.spacing.xs,
    padding: theme.spacing.mid
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  button: {
    marginTop: theme.spacing.sm,
    alignSelf: "stretch",
    alignItems: "center",
    flexGrow: 1,
    margin: 5
  }
});

const MyReviewItem = ({item, refetch}) => {
  
  const navigate = useNavigate()
  const [deleteReview, result] = useMutation(DELETE_REVIEW)

  const handleRemoval = async (deleteReviewId) => {

    Alert.alert(
      "Delete review", 
      "Are you sure you want to delete this review",
      [
        {
        text: 'Cancel',
        style: 'cancel',
        },
        {
          text: 'OK', 
          onPress: async () => {
            await deleteReview({
              variables: { deleteReviewId }
            })
            refetch()
          }
        },
      ]
    )

  }

  return (
    <View style={styles.container}>
      <ReviewItem item={item.node} personalReview />
      <View style={styles.buttonsContainer}>
        <Button 
        text="View Repository" 
        buttonStyleProp={styles.button}
        onPress={() => navigate(`/repositories/${item.node.repositoryId}`)}
        />
        <Button 
        text="Delete review" 
        type="remove"
        buttonStyleProp={styles.button}
        onPress={() => handleRemoval(item.node.id)}
        />
      </View>
    </View>
  )
}

const ItemSeparator = () => <View style={styles.separator} />;

const MyReviews = () => {

  const { data, refetch } = useQuery(GET_CURRENT_USER, {
    fetchPolicy: 'cache-and-network',
    variables: {
      includeReviews: true
    },
  });


  if (!data || !data.me) {
    return null
  }

  const reviews = data.me.reviews.edges

  return <FlatList 
      data={reviews}
      renderItem={({item}) => <MyReviewItem item={item} refetch={refetch} />}
      keyExtractor={({ node }) => node.id}
      ItemSeparatorComponent={<ItemSeparator />}
    />

}

export default MyReviews