import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

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
        backgroundColor: "#f7287b",
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
