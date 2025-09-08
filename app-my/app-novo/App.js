import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzZpLTd5IbEFzhudXV2-hZJUuRQwphS9TZXg&s' }}
        style={styles.image}
      /> 
      <Text style={styles.title}>Victor Hugo</Text>
      <Text style={styles.bio}>
        Esta é a minha bio. Aqui eu falo um pouco sobre mim.
      </Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.customButton1} onPress={() => Alert.alert('Agora você está seguindo')}>
          <Text style={styles.buttonText}>Seguir</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.customButton2} onPress={() => Alert.alert('Mensagem enviada!')}>
          <Text style={styles.buttonText}>Mensagem</Text>
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
    borderRadius: 100,},
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