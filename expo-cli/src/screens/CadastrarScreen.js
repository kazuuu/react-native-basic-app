import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Pressable } from 'react-native';
import { RadioButton, Checkbox } from 'react-native-paper';
import { Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';

const CadastrarScreen = ({ navigation }) => {
  const [textInputLogin, setTextInputLogin] = useState('');
  const [textInputNomeCompleto, setTextInputNomeCompleto] = useState('');
  const [textInputPaswword, setTextInputPassword] = useState('');
  const [textInputPaswwordConfirm, setTextInputPasswordConfirm] = useState('');
  const [radioSexo, setRadioSexo] = React.useState('feminino');
  const [checkAgree, setCheckAgree] = React.useState(false);

  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (
    <ImageBackground source={require('../../assets/fiap_bg.png')} style={styles.ImageBackground}>
      <View style={styles.container}>
        <Image source={require('../../assets/fiap_logo.png')} style={styles.imageFiap} />
        <Text style={styles.textTitle}>Cadastrar</Text>
        <View style={{width: '100%'}}>

          <TextInput 
            value={textInputLogin}
            onChangeText={(value) => setTextInputLogin(value)} 
            style={styles.textInput} 
            placeholder='Username'
            placeholderTextColor = 'white'
          />
          <TextInput 
            value={textInputNomeCompleto}
            onChangeText={(value) => setTextInputNomeCompleto(value)} 
            style={styles.textInput} 
            placeholder='Nome Completo'
            placeholderTextColor = 'white'
          />
          <TextInput 
            value={textInputPaswword}
            onChangeText={(value) => setTextInputPassword(value)} 
            style={styles.textInput} 
            placeholder='Senha'
            placeholderTextColor = 'white'
          />
          <TextInput 
            value={textInputPaswwordConfirm}
            onChangeText={(value) => setTextInputPasswordConfirm(value)} 
            style={styles.textInput} 
            placeholder='Confirmar Senha'
            placeholderTextColor = 'white'
          />
          <View style={styles.formGroup}>
            <Text style={styles.text}>
              Sexo:
            </Text>
            <View style={styles.containerRadio}>
              <RadioButton
                value="Feminino"
                status={ radioSexo === 'feminino' ? 'checked' : 'unchecked' }
                onPress={() => setRadioSexo('feminino')}
                uncheckedColor = 'white'
              />
              <Text style={styles.radioText}>
                Feminino:
              </Text>
            </View>
            <View style={styles.containerRadio}>
              <RadioButton
                value="Masculino"
                status={ radioSexo === 'masculino' ? 'checked' : 'unchecked' }
                onPress={() => setRadioSexo('masculino')}
                uncheckedColor = 'white'
              />        
              <Text style={styles.radioText}>
                Masculino:
              </Text>
            </View>
          </View>
          <View style={styles.formGroup}>
            <View style={styles.containerRadio}>
              <Checkbox
                status={checkAgree ? 'checked' : 'unchecked'}
                onPress={() => {
                  setCheckAgree(!checkAgree);
                }}
                uncheckedColor = 'white'
              />
              <Text style={styles.radioText}>
                Li e concordo com o termo de uso
              </Text>
            </View>
          </View>
        </View>
        <Pressable style={styles.button} onPress={showDialog}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.goBack(null)}>
          <Text style={styles.buttonText}>Voltar</Text>
        </Pressable>
        <Provider>
            <View>
            <Portal>
              <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Title>Sucesso</Dialog.Title>
                <Dialog.Content>
                  <Paragraph>
                    Username: {textInputLogin }
                  </Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                  <Button onPress={hideDialog}>Done</Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>
          </View>
        </Provider>

      </View>      
    </ImageBackground>
  );
}

export default CadastrarScreen;

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
    width: '25%',
  },
  textInput: {
    color: 'white',
    padding: 16,
    backgroundColor: 'rgba(225,225,225,0.3)',
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
  containerRadio: {
    flexDirection: 'row',
    justifyContent:'flex-start',
  },
  radioText: {
    color: 'white',
    fontSize: 16,
    marginTop: 8,
  },
  form: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLink: {},
  textTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    margin: 16,
  },
  formGroup: {
    marginBottom: 16,
  }
});