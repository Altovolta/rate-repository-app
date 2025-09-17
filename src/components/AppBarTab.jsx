import { Pressable } from "react-native"
import Text from "./Text"
const AppBarTab = ({text, style, textStyle}) => {

  return (
  <Pressable style={style} onPress={() => console.log(`Pressed button ${text}`)}>
    <Text style={textStyle} > {text} </Text>
  </Pressable>
  )
}

export default AppBarTab