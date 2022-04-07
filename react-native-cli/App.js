import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from './src/navigation/StackNavigators';

const App = () => (
  <NavigationContainer>
    <MainStackNavigator />
  </NavigationContainer>
);

export default App;

