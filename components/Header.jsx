import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const Header = (props) =>{
    return(
        <>
        <View style = {styles.header}>
            <Text style = {styles.headerText}>{props.title}</Text>
        </View>
        </>
    )
};
const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 90,
        backgroundColor: Colors.accent,
        paddingHorizontal: 10,
        paddingTop: 35,
        // flex: 1,
        alignItems: 'center',
        // justifyContent: 'center'
    },
    headerText:{
        fontSize: 20,
        color: 'black'
    }
});
