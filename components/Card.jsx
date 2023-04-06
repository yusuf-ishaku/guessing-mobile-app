import React from "react";
import { Text, TextInput, View, Button, StyleSheet} from "react-native";

export const Card = (props) =>{
    return (
        <>
            <View style= {{...styles.card, ...props.style}}>
                {props.children}
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    card: {
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
    }
})