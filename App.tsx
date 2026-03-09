import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Ok I pull up!</Text>
      <text style={styles.subtitulo}>\ ('O') /</text>
      <StatusBar style="auto"/>
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
  titulo: {
    color: `#ff0000`,
    fontSize: 50,
    fontWeight: 'bold',
  },
  subtitulo: {
    color: `#ff0000`,
    fontSize: 30,
    fontWeight: 'bold',
  }
});
