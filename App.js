import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Title1 } from './Components/Texts';
import { white } from './Styles/colors';
import { I18n } from 'i18n-js';


export default function App() {


  return (
    <View style={styles.container}>
      <Title1>IndTrip</Title1>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
