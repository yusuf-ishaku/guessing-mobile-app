import React, {useState, useRef} from 'react';
import {Button, View, Text, StyleSheet, Alert } from 'react-native'
import { Card } from '../components/Card';
import colors from '../constants/colors';


const generateRandomBetween = (min, max, exclude) =>{
    min = Math.ceil(min);
    max = Math.ceil(max);
    
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if(rndNum === exclude){
        return generateRandomBetween(min, max, exclude);
    }else{
        return rndNum;
    }
}
export const GameScreen = ( props ) =>{
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userGuess))
    const currentHigh = useRef(100);
    const currentLow = useRef(1)

    const nextGuessHandler = (direction) =>{
        if((direction === "lower" && currentGuess < props.userGuess) || (direction === "greater" && currentGuess > props.userGuess)){
            Alert.alert("Don't lie", "You know that this is wrong...", [
                {text:'Sorry', style: 'cancel'}
            ]);
        }if(direction === 'lower'){
            currentHigh.current = currentGuess
        }else if(direction === 'greater'){
            currentLow.current = currentGuess
        }
        let nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber)
    }
    return(
        <View style= {styles.screen}>
            <View style={styles.ahead}>
                <Text>Opponents' guess</Text>
                <View style={styles.number}><Text style={styles.selec}>{currentGuess}</Text></View>
                
            </View>
            <Card style={styles.buttons}>
                <Button title="LOWER" onPress={nextGuessHandler.bind(this, "lower")}></Button>
                <Button title='GREATER' onPress={nextGuessHandler.bind(this, "greater")}></Button>
            </Card>
        </View>
        
    )
};

const styles = StyleSheet.create({
    buttons: {
        marginVertical: 10,
        width: '100%',
        height: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    screen: {
        flex: 1,
        padding: 5,
        alignItems: 'center'
    },
    button: {
        width: '40%',
       
    },
    ahead:{
        flexDirection: "column",
        justifyContent: 'space-between',
        width: '90%',
        marginTop: 10,
        borderRadius: 10 ,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 10,
        shadowOpacity: .50,
        backgroundColor: 'white',
        elevation: 10,
        height: 80,
        padding: 10,
        margin: 5
    },
    number:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24
    },
    selec: {
        fontSize: 24
    }
})