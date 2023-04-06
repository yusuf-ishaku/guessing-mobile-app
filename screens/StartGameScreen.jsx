import React from "react";
import { TextInput, View, Text, StyleSheet, Button } from "react-native";

export const StartGameScreen = () =>{
    return (
        <>
            <View style = {styles.bigScreen}> 
                <Text style = {styles.text}>Start a new game!</Text>
                <View style= { styles.mini}>
                    <Text>Select a Number</Text>
                    <TextInput style= {styles.textInput}></TextInput>
                </View>
                <View style = {styles.buttons}>
                    <Button title="Reset" onPress={() =>{}}></Button>
                    <Button  title="Confirm" onPress={() =>{}}></Button>
                </View>
            </View>
        </>
    )
};
const styles = StyleSheet.create({
    bigScreen: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        marginVertical: 10
    },
    mini: {
        width: '90%',
        borderRadius: 1,
        alignItems: 'center'
    },
    textInput:{
        width: '100%',
        marginTop: 5,
        padding: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black'
    },
    buttons: {
        marginVertical: 10,
        width: '100%',
        height: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: '40%'
    }
})