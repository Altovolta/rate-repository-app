import { useParams } from "react-router-native"
import Text from "./Text"
import { useQuery } from "@apollo/client/react"
import { GET_REPOSITORY } from "../graphql/queries"
import RepositoryItem from "./RepositoryItem/RepositoryItem"

const SingleRepository = () => {

  const id = useParams().id
  const { data } = useQuery(GET_REPOSITORY, {
    variables: {repositoryId: id}
  });

  

  return (
    <RepositoryItem item={data.repository} singleView/>
  )
}

export default SingleRepository