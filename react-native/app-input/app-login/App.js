import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';


export default function App() {
  const [nome, setNome] = useState('')
  const [senha, setSenha] = useState('')
  const [email, setEmail] = useState('')

return (
  <View style={styles.container}>
    <Text style={styles.texto}>Digite seu nome:</Text>
    <TextInput
      value={nome}
      placeholder='Digite seu nome'
      onChangeText={setNome}
      style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, width: '80%', paddingHorizontal: 10 }}
    />
      <TextInput
        value={email}
        placeholder='Digite seu email'
        onChangeText={setEmail}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, width: '80%', paddingHorizontal: 10 }}
      />
    <TextInput
      value={senha}
      placeholder='Digite sua senha'
      onChangeText={setSenha}
      style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, width: '80%', paddingHorizontal: 10 }}
    />
    <Button title='Cadastrar' style={styles.btn} onPress={() => alert(`Nome: ${nome}\nEmail: ${email}\nSenha: ${senha}`)} />
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
  texto: {
    fontSize: 18,
    marginBottom: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 5,
    textAlign: 'center',
    width: 200,
  },
  btn: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
