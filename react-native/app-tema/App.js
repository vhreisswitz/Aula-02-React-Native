import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [theme, setTheme] = useState('light');
  const backgroundColor = theme === 'light' ? '#FFFFFF' : '#000000';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Trocar de temas</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.customButton2} onPress={() => setTheme('dark')}>
          <Text style={styles.buttonText}>Tema Escuro</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.customButton1} onPress={() => setTheme('light')}>
          <Text style={styles.buttonText}>Tema Claro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    width: '80%',
  },
  customButton1: {
    backgroundColor: 'rgba(4, 137, 245, 0.73)',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  customButton2: {
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