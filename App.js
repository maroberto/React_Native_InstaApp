import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback, 
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';


export default function App() {
  return (

    <KeyboardAvoidingView
      behavior= {Platform.os === 'ios' ? 'padding' : 'height'}
    >
    <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>  
    <View style={styles.container}>
      <StatusBar style="#fff" translucent={false} />
      <Image
        source={require('./src/assets/logo.png/')}
        style={styles.logo}
      />

      <TextInput
        placeholder="Celular, username ou email"
        style={styles.Input}
      />
      <TextInput
        placeholder="Sua senha"
        style={styles.Input}
      />

      <View style={styles.forgoutContainer}>
        <TouchableOpacity>
          <Text style={styles.forgoutText}>Esqueceu sua senha</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton} >
        <Text style={styles.loginText}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.facebookContainer}>
        <FontAwesome5 name="facebook" size={25} color="#399fff"/>
        <Text style={styles.facebookText}>Continue como Rafael</Text>
      </TouchableOpacity>

      <View style={styles.divisor}>
        <View style={styles.divisorLine}></View>
        <Text style={{ marginHorizontal: '3%' }}>OU</Text>
        <View style={styles.divisorLine}></View>
      </View>

      <View style={styles.sigupContainer}>
        <Text style={styles.sigupText}>Não possui uma conta</Text>
        <TouchableOpacity>
          <Text style={styles.sigupButton}>Casdastre-se</Text>
        </TouchableOpacity>
      </View>

    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginTop: Platform.os === 'android' ? '13%' : '20%',
    marginBottom: Platform.os === 'android' ? '13%' : '15%',
  },
  Input: {
    width: '90%',
    height: 42,
    backgroundColor: '#f4f3f3',
    marginBottom: 20,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  forgoutContainer:{
    width: '90%',
    alignItems: 'flex-end',
  },
  forgoutText:{
    color: '#399fff'
  },
  loginButton:{
    marginTop: '5%',
    backgroundColor: '#399fff',
    width: '90%',
    height: 42,
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 5,
  },
  loginText:{
    color: '#fff',
    fontSize: 17,
  },
  facebookContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:'10%',
  },
  facebookText:{
    color: '#399fff',
    padding: 8,
    fontSize: 15,
  },
  divisor:{
    marginTop: '5%',
    flexDirection: 'row',
    width: '90%',
    alignItems:'center',
    justifyContent: 'center',
  },
  divisorLine:{
    width: '45%',
    height: 2,
    backgroundColor: '#EFEDED',
    borderRadius: 5,
  },
  sigupContainer:{
    flexDirection: 'row',
    marginTop: '10%',
  },
  sigupText:{
    color: '#c4c4c4',
    paddingRight: 5,
  },
  sigupButton:{
    color: '#399fff',
    fontWeight: 'bold',
  }
});
