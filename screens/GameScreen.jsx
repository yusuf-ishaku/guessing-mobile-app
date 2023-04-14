import React, {useState} from 'react';
import {Button, View, Text, StyleSheet } from 'react-native'


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

    return(
        <View>
            <Text>Opponents' guess</Text>
            <View style={styles.ahead}>
                <Text>Selected Number:</Text>
                <View style={styles.number}><Text style={styles.selec}>{selectedNumber}</Text></View>
                <Button style={styles.button} color={colors.accent} title="Start Game"></Button>
            </View>
        </View>
        
    )
};

const styles = StyleSheet.create({
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
        height: 120,
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