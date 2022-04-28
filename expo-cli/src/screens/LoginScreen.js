import { useState } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, Image, TextInput, Pressable } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [textInputLogin, setTextInputLogin] = useState('');
  const [textInputPaswword, setTextInputPassword] = useState('');

  return (
    <ImageBackground source={require('../../assets/fiap_bg.png')} style={styles.ImageBackground}>
      <View style={styles.container}>
        <Image source={require('../../assets/fiap_logo.png')} style={styles.imageFiap} />
        <Text style={styles.textTitle}>Entrar</Text>
        <TextInput 
          value={textInputLogin}
          onChangeText={(value) => setTextInputLogin(value)} 
          style={styles.textInput} 
          placeholder='Username'
          placeholderTextColor = 'white'
        />
        <TextInput 
          value={textInputPaswword}
          onChangeText={(value) => setTextInputPassword(value)} 
          style={styles.textInput} 
          placeholder='Senha'
          placeholderTextColor = 'white'
        />
        <Pressable style={styles.button} onPress={() => navigation.navigate("Home", { username: textInputLogin })}>
          <Text style={styles.buttonText}>Entrar</Text>
        </Pressable>
        <View style={styles.containerHorizontal}>
        <Pressable style={styles.buttonLink} onPress={() => navigation.navigate("Cadastrar", { username: textInputLogin })}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </Pressable>
        <Pressable style={styles.buttonLink} onPress={() => navigation.navigate("Home", { username: textInputLogin })}>
          <Text style={styles.buttonText}>Esqueceu a senha</Text>
        </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  ImageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  imageFiap: {
    resizeMode: 'contain',
    height: 90,
    width: '50%',
  },
  textInput: {
    color: 'white',
    padding: 16,
    backgroundColor: '#333',
    width: '100%',
    marginBottom: 8,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: '#ee125a',
    marginTop: 8,
    width: '100%',
    marginBottom: 8,
  },
  buttonText: {
    color: 'white',
  },
  text: {
    color: 'white',
  },
  containerHorizontal: {
    flexDirection: 'row',
    justifyContent:'space-between',
    width: '100%',
    marginTop: 16,
  },
  buttonLink: {},
  textTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    margin: 16,
  }
});