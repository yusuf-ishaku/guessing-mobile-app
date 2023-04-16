import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components/Header';
import { StartGameScreen } from './screens/StartGameScreen';
import { Card } from './components/Card';
import { GameScreen } from './screens/GameScreen';

import { AppLoading } from 'expo'
import * as Font from "expo-font";

const fetchFonts = () =>{
  Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Bold.ttf'),
    // 'open-sans-bold': require('./assets/fonts/OpenSans-Regular.ttf')
  })
}


export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [fontsLoaded, setFontloaded] = useState(false)
  
  if(!fontsLoaded){
    return <AppLoading startAsync ={fetchFonts} onFinish = {() =>{setFontloaded(true)}}></AppLoading>
  }

  const startGameHandler = (selectedNumber) =>{
    setUserNumber(selectedNumber)
  }

  let content = <StartGameScreen onStartGame = {startGameHandler}> </StartGameScreen>

  if(userNumber){
    content = <GameScreen userChoice={userNumber}></GameScreen>
  }

  
  return (
    <View style = {styles.mainView}>
      <Header title = "Guesser App"></Header>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1
  }
})
