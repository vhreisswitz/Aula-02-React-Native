import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        source={{ uri: 'https://www.rampinelli.com.br/uploads/produto/arroz-branco-1698345336.png?class=full-img&w=406&h=583&fit=contain' }}
        style={styles.image}
      /> 
      <Text style={styles.title}>Arroz R$5,99</Text>
      <Text style={styles.bio}>
        Compre agora no seu melhor preço!
      </Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.customButton2} onPress={() => Alert.alert('Arroz adicionado ao carrinho!')}>
          <Text style={styles.buttonText}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'wheat',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  bio: {
    color: 'gray',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 10},
  row: {
    flexDirection: 'row',
    gap: 10,
    width: '80%',
  },
  customButton1: {
    color: 'white',
    backgroundColor: 'rgba(4, 137, 245, 0.73)',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  customButton2: {
    color: 'white',
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});