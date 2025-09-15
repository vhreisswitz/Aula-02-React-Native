import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [tarefas, setTarefas] = useState([
    { nome: 'Arroz', concluida: false },
    { nome: 'Feijão', concluida: false },
    { nome: 'Alvejante', concluida: false },
    { nome: 'Shampoo', concluida: false },
    { nome: 'Groudon', concluida: false },
  ]);

  const alternarStatus = (index) => {
    const novasTarefas = [...tarefas];
    novasTarefas[index].concluida = !novasTarefas[index].concluida;
    setTarefas(novasTarefas);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={tarefas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <TouchableOpacity onPress={() => alternarStatus(index)}>
              <Text style={[styles.texto, item.concluida && styles.concluida]}>
                {item.nome}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  texto: {
    fontSize: 18,
  },
  concluida: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});