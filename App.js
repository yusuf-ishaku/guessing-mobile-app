import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components/Header';
import { StartGameScreen } from './screens/StartGameScreen';
import { Card } from './components/Card';
import { GameScreen } from './screens/GameScreen';



export default function App() {
  const [userNumber, setUserNumber] = useState();
  
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
