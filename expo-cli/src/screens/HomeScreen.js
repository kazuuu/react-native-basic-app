import { StyleSheet, Text, Image, Button, ImageBackground, View, Pressable, Alert } from 'react-native';

const HomeScreen = ({ navigation, route }) => {
  const handleAlert = () => Alert.alert(
    "Sucesso",
    "Simple Alert",
    [
      {
        text: 'Ok',
        onPress: () => console.log("Alert Pressed")
      }
    ]
  );
    
  return (
    <ImageBackground source={require('../../assets/fiap_bg.png')} style={styles.ImageBackground}>
      <View style={styles.container}>
        <Image source={require('../../assets/app_trophy.png')} style={styles.imageTrophy} />
        <Text style={styles.text}>Home Screen</Text>
        <Text style={styles.text}>Seja bem vindo, {route.params.username}</Text>
        <Button 
          title='Sair'
          onPress={() => navigation.replace('Login')}
        />

        <Pressable style={styles.button} onPress={handleAlert}>
          <Text style={styles.buttonText}>Alert</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => navigation.navigate("Exemplo01")}>
          <Text style={styles.buttonText}>TextInput e State</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
  ImageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  imageTrophy: {
    resizeMode: 'contain',
    height: 90,
    width: 90,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: '#ee125a',
    marginTop: 8,
    width: '100%'
  },
  buttonText: {
    color: 'white',
  },
  text: { 
    color: 'white',
  }
});