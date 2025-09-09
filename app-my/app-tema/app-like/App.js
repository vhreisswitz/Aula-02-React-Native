import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaOhUDEO0So3yZAIc5xC_PFhu19W0qv6JL7g&s' }}
        style={styles.image} />
      <TouchableOpacity onPress={() => setContador(contador + 1)}>
        <Text style={[styles.btn, styles.title]}>❤️{contador}</Text>
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
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 75,
  },
});
