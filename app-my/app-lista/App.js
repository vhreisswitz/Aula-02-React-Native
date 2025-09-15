import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';


export default function App() {
  const [tarefas, setTarefas] = useState([
    { nome: 'Levar o irmão na escola', concluida: false },
    { nome: 'Ir no mercado', concluida: false },
    { nome: 'Fazer o almoço', concluida: false },
    { nome: 'Tomar banho', concluida: false },
    { nome: 'Levar o cachorro pra passear', concluida: false },
  ]);

  const alternarStatus = (index) => {
    const novasTarefas = [...tarefas];
    novasTarefas[index].concluida = !novasTarefas[index].concluida;
    setTarefas(novasTarefas);
  };

  return (
    <View style={styles.container}>
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
    </View>
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