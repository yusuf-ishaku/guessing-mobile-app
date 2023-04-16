import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components/Header';
import { StartGameScreen } from './screens/StartGameScreen';
import { Card } from './components/Card';
import { GameScreen } from './screens/GameScreen';

// import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from "expo-font";

const fetchFonts = async () =>{
  Font.loadAsync(
   './assets/fonts/OpenSans-Bold.ttf'
    // 'open-sans-bold': require('./assets/fonts/OpenSans-Regular.ttf'))
  )
}
SplashScreen.preventAutoHideAsync()

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [fontsLoaded, setFontloaded] = useState(false);
  
  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await fetchFonts()
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        // await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setFontloaded(true);
      }
    }

    prepare();
  }, []);
  if(fontsLoaded){
    return SplashScreen.hideAsync();
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
