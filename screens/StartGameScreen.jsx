import React from "react";
import { TextInput, View, Text, StyleSheet, Button } from "react-native";
import { Card } from "../components/Card";
import Colors from "../constants/colors";
import Input from "../components/Input";
export const StartGameScreen = () =>{
    return (
        <>
            <View style = {styles.bigScreen}> 
                <Text style = {styles.text}>Start a new game!</Text>
                <Card style = {styles.mini}>
                    <Text>Select a Number</Text>
                    <Input style = {styles.textInput}  autoCapitalize="none" maxLength ={2} autoCorrect={false} blurOnSubmit keyboardType = "numeric">
                    </Input>
                    <View style = {styles.buttons}>
                        <View style= {styles.button}><Button title="Reset" onPress={() =>{}} color={Colors.accent}></Button></View>
                        <View style = {styles.button}><Button  title="Confirm" onPress={() =>{}} color={Colors.primary}></Button></View>
                    </View>
                </Card>
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
        borderRadius: 4,
        padding: 9,
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: .26,
        backgroundColor: 'white',
        elevation: 8
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