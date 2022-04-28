import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const AccountScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text>Account Screen</Text>
        <Button title="Entrar"  onPress={() => navigation.navigate('One')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});

export default AccountScreen;