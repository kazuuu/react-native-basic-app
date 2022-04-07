import { StyleSheet, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <LoginScreen />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});