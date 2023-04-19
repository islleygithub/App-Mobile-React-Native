import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, Animated, Button, Alert } from 'react-native';
import Constants from 'expo-constants';


import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function App() {

  const [offset] = useState(new Animated.ValueXY({x: 0, y: 95}));
  const [opacity] = useState(new Animated.Value(0));
  const [input, setInput] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const [user,setUser] = useState(' ');
  const [senha,setSenha] = useState(' ');

  const autenticar = () => {
    if (user === 'entregador' && senha === 'entregador01') {
      Alert.alert('Conectado')
    }else {
      Alert.alert('Dados errados, tente novamente')
    }
  }
 

  useEffect(()=> {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0, 
        speed: 4, 
        bounciness: 20}), 
        Animated.timing(opacity, {
          toValue: 1, 
          duration: 300,
          })
          ]).start();
           }, []);
  
  return (
   
    <View style={styles.container}>
    
    <Animated.View style={[styles.container, { opacity: opacity, transform: [ { translateY: offset.y } ] } ] }>
    
    <View style={styles.containerTitulo}>
    <Text style={styles.titulo}> Atlas Log </Text>
    </View>
    
    <Text style={styles.texto}> Entregador </Text>
    
    <View> 
    <TextInput
     style={styles.input}
     placeholder='Usuario'
     autoCorrect={false}
     onChangeText={setUser}
    />
     <AntDesign style={styles.icone1} name="user" size={30} color="black" />
    </View>
     
    <View> 
    <TextInput
     style={styles.input}
     placeholder='Senha'
     autoCorrect={false}
     onChangeText={setSenha}
     secureTextEntry={hidePass}
    />
    <TouchableOpacity style={styles.icon} onPress={ () => setHidePass(!hidePass) }>
    { hidePass ?
        <Entypo name="eye" size={30} color="black" />
      :
        <Entypo name="eye-with-line" size={30} color="black" />
    }
    </TouchableOpacity>
    </View>
       
    <TouchableOpacity style={styles.btnEsqueceu}>
     <Text style={styles.esqueceuText}>Esqueceu sua senha?</Text>
    </TouchableOpacity> 

    
    <TouchableOpacity style={{
      backgroundColor:'red',width:'90%',
      minHeight: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
      padding: 20
      }}
      onPress={autenticar}>
      <Text style={styles.submitText}>Acessar</Text>
    </TouchableOpacity>
  
   
   

    <TouchableOpacity style={styles.btnRegister}>
     <Text style={styles.registerText}>Criar conta</Text>
    </TouchableOpacity>  

    </Animated.View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  
    container: {
      flex: 1,
      backgroundColor: 'gray',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      padding: 8,
  },
     titulo: {
     
     fontSize: 45,
     color: 'white',
     alignItems: 'center',
     justifyContent: 'flex-start',
     padding: 30,
     },
    
    texto: {
     fontSize: 30,
     alignItems:'center',
     justifyContent: 'center',
     color: 'white',
     padding: 10         
    },
    input: {
      backgroundColor: '#fff',
      minWidth: '100%',
      marginBottom:15,
      color: '#222',
      fontSize: 17,
      borderRadius: 35,
      padding: 15,
  },
  
  icone1: {
     
    position: 'absolute',
    right: 25,
    top: 15
     
 },
  icon: {
    
  position:'absolute',
  top: 15,
  right: 25

  },

  submitText: {
   color: "white",
   fontSize: 27
  },
  
  btnRegister: {
    marginTop: 10,  
  },
  registerText: {
    color: 'black',
    fontSize: 25,
    top: 20
  },
  btnEsqueceu: {
    
    padding: 30,
  },
  esqueceuText: {
    fontSize: 18,
  }

});
