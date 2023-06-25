import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Title1 } from './Components/Texts';

export default function App() {
  return (
    <View style={styles.container}>
      <Title1>Hello</Title1>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
