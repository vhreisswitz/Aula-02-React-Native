import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  const handleButtonPress = () => {
    Alert.alert('Botão pressionado', 'Você clicou no botão personalizado.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minha Primeira Tela Interativa</Text>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.image}
      />
      <Button title="Clique Aqui" onPress={handleButtonPress} />
      <TouchableOpacity style={styles.customButton} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Botão Personalizado</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.customButton, { backgroundColor: '#dc3545' }]}
        onPress={() => Alert.alert('Botão Vermelho', 'Você clicou no botão vermelho.')}
      >
        <Text style={styles.buttonText}>Botão Vermelho</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.customButton, { backgroundColor: '#28a745' }]}
        onPress={() => Alert.alert('Botão Verde', 'Você clicou no botão verde.')}
      >
        <Text style={styles.buttonText}>Botão Verde</Text>
      </TouchableOpacity>
      <Card texto="Card 1: Bem-vindo" />
      <Card texto="Card 2: React Native é incrível!" />
      <Headler />
      <StatusBar style="auto" />
    </View>
  );
}

function Card({ texto }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>{texto}</Text>
    </View>
  );
}

function Headler() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Meu App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    padding: 15,
    backgroundColor: '#007BFF',
    alignItems: 'center',
    marginBottom: 20,
    position: 'absolute',
    top: 20,
  },
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#e6f3ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  customButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  cardText: {
    fontSize: 16,
    color: '#333',
  },
});