import { StyleSheet, View } from "react-native"
import { format } from "date-fns";


import Text from "./Text"
import theme from "../theme"


const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    margin: theme.spacing.xs,
    padding: theme.spacing.mid
  },
  reviewContainer: {
    alignSelf: "flex-start",
    flexDirection: "row",
  },
  content: {
    flex: 1,
    flexShrink: 1,
    paddingRight: theme.spacing.xs
  },
  ratingBorder: {
    borderColor: theme.colors.primary,
    borderWidth: 2,
    minWidth: 48,         
    height: 48,
    borderRadius: 24,    
    marginRight: theme.spacing.mid,
    margin: 5,
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  rating: {
    textAlign: 'center',
    color: theme.colors.primary,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading
  },
  title: {
    fontWeight: "bold",
    paddingTop: theme.spacing.mid
  },
  date: {
    color: theme.colors.textSecondary
  },
  reviewText: {
    flexWrap: 'wrap',
    flexShrink: 1,
    marginTop: 4,
  },
});

const ReviewItemRating = ({rating}) => {
  return (
    <View style={styles.reviewContainer}>
      <View style={styles.ratingBorder}>
        <Text style={styles.rating}>
          {rating}
        </Text>
      </View>
    </View>
  )
}

const ReviewItemContent = ({title, date, reviewText}) => {

  const formattedDate = format(new Date(date), "MM.dd.yyyy")

  return (
    <View style={styles.content}>
      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.date}>
        {formattedDate}
      </Text>
      <Text style={styles.reviewText}>
        {reviewText}
      </Text>
    </View>
  )
}


const ReviewItem = ({item, personalReview = false}) => {

  const title = personalReview ? item.repository.fullName: item.user.username 

  return (
    <View style={styles.container}>
      <View style={styles.reviewContainer}>
        <ReviewItemRating rating={item.rating}/>
        <ReviewItemContent 
          title={title}
          date={item.createdAt}
          reviewText={item.text}
        />
      </View>
    </View>
  )

}

export default ReviewItem