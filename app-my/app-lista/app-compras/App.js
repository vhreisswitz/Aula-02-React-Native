import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { useState } from 'react';

const produtos = [
  { nome: 'Arroz', preco: 5 },
  { nome: 'Feijão', preco: 7 },
  { nome: 'Macarrão', preco: 4 },
  { nome: 'Carne', preco: 20 },
  { nome: 'Frango', preco: 15 }
]

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={produtos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.texto}>
              {item.nome} - R$ {item.preco},00
            </Text>
            <TouchableOpacity
              onPress={() => alert(`Você comprou ${item.nome} por R$ ${item.preco},00`)}
            >
              <Text style={styles.texto}>Comprar</Text>

            </TouchableOpacity>

          </View>
        )}
      />
      <StatusBar style="auto" />
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
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

