import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components/Header';
export default function App() {
  return (
    <View style = {styles.mainView}>
      <Header title = "Guesser App"></Header>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1
  }
})
