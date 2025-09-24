import * as yup from 'yup'
import { Formik } from 'formik';
import { StyleSheet, View } from 'react-native';
import { useNavigate } from 'react-router-native';

import Button from './Button';
import FornikTextInput from './FornikTextInput'

import theme from '../theme';
import useCreateReview from '../hooks/useCreateReview';


const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.formPage,
    backgroundColor: "white"
  },
  button: {
    marginTop: theme.spacing.sm,
    alignSelf: "stretch",
    alignItems: "center"
  }
})

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Repository owner name is missing"),
  repositoryName: yup.string().required("Repository name is missing"),
  rating: yup.number()
            .min(0, "Number must be positive")
            .max(100, `Number must be lower than 100`)
            .required("Rating is required"),
  text: yup.string().optional()
})

const CreateReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FornikTextInput 
      name={"ownerName"}
      placeholder='Repository owner name'
      />
      <FornikTextInput 
      name={"repositoryName"}
      placeholder='Repository name'
      />
      <FornikTextInput 
      name={"rating"}
      placeholder='Rating between 0-100'
      />
      <FornikTextInput 
      name={"text"}
      placeholder='Review'
      />
      <Button 
      testID="createReviewFormSumbit" 
      text="Create a review" 
      buttonStyleProp={styles.button}
      onPress={onSubmit}
      />
    </View>
  )
}


const CreateReview = () => {
  const [createReview] = useCreateReview()
  const navigate = useNavigate();
  
  const onSubmit = async (values, { resetForm }) => {
    const { ownerName, repositoryName, rating, text} = values

    try {
      const response = await createReview({ 
        ownerName, 
        repositoryName, 
        rating: Number(rating), 
        text
      })
      resetForm();
      navigate(`/repositories/${response.data.createReview.repositoryId}`);
    } catch (e) {
      console.log("Error", e);
    }
  };

  const initialValues = {
    ownerName: '',
    repositoryName: '',
    rating: 0,
    text: ''
  }

  return (
    <Formik 
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    >
      {({handleSubmit}) => <CreateReviewForm onSubmit={handleSubmit}/>}
    </Formik>
  );
};

export default CreateReview;