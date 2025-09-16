import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';


export default function App() {
  const [nome, setNome] = useState('')
  const limparcampo = () => {
    setNome('')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Digite seu nome:</Text>
        <TextInput
        value={nome}
        placeholder='Digite seu nome'
        onChangeText={setNome}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, width: '80%', paddingHorizontal: 10}}
        />
        <Text style={styles.texto}>Nome digitado: {nome}</Text>
        <Button title='Limpar' style={styles.btn} onPress={limparcampo}/>
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
