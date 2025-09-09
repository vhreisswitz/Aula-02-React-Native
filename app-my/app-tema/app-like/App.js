import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);
  return (
    <View style={styles.container}>
      <Text style ={styles.title}>Você recebeu {contador} curtidas</Text>
      <TouchableOpacity onPress={() => setContador(contador + 1)}>
        <Text style={styles.btn}>Curtir</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'wheat',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 5,
  },
  btn: {
    fontSize: 18,
    color: 'blue',
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 5,
  },
});
