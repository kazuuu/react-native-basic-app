import { StyleSheet, Text, View, Button } from 'react-native';

const HomeScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text>Seja bem vindo, {route.params.username}</Text>
      <Button 
        title='Sair'
        onPress={() => navigation.replace('Login')}
      />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});