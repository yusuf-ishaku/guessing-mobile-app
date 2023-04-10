import { TextInput, StyleSheet } from "react-native";


export default Input = (props) =>{
    return <TextInput  {...props} style = {{ ...props.style}}></TextInput>
}

