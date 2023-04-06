import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components/Header';
import { StartGameScreen } from './screens/StartGameScreen';

export default function App() {
  return (
    <View style = {styles.mainView}>
      <Header title = "Guesser App"></Header>
      <StartGameScreen></StartGameScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1
  }
})
