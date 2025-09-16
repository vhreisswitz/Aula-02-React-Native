import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [erros, setErros] = useState({});
  const [tocado, setTocado] = useState(false);

  const validarFormulario = () => {
    setTocado(true);
    let novosErros = {};
    
    if (!email) {
      novosErros.email = "Email é obrigatório!";
    } else if (!email.includes('@')) {
      novosErros.email = "Email precisa ter @!";
    } else if (!email.includes('.')) {
      novosErros.email = "Email precisa ter um domínio válido!";
    }

    if (!senha) {
      novosErros.senha = "Senha é obrigatória!";
    } else if (senha.length < 6) {
      novosErros.senha = "Senha precisa ter pelo menos 6 letras!";
    } else if (!/[A-Z]/.test(senha)) {
      novosErros.senha = "Senha precisa ter pelo menos uma letra maiúscula!";
    } else if (!/[0-9]/.test(senha)) {
      novosErros.senha = "Senha precisa ter pelo menos um número!";
    }

    setErros(novosErros);
    
    if (Object.keys(novosErros).length === 0) {
      Alert.alert("Sucesso!", "Cadastro realizado com sucesso! 🎉");
      // Limpar os campos após sucesso
      setEmail('');
      setSenha('');
      setTocado(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.rotulo}>Email:</Text>
        <TextInput
          value={email}
          placeholder='exemplo@email.com'
          onChangeText={setEmail}
          style={[
            styles.input, 
            erros.email && styles.inputErro
          ]}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {erros.email && <Text style={styles.textoErro}>{erros.email}</Text>}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.rotulo}>Senha:</Text>
        <TextInput
          value={senha}
          placeholder='Digite sua senha'
          onChangeText={setSenha}
          secureTextEntry
          style={[
            styles.input, 
            erros.senha && styles.inputErro
          ]}
        />
        {erros.senha && <Text style={styles.textoErro}>{erros.senha}</Text>}
        
        {senha.length > 0 && !erros.senha && (
          <Text style={styles.textoSucesso}>Senha forte! ✅</Text>
        )}
      </View>

      <TouchableOpacity 
        style={styles.botao} 
        onPress={validarFormulario}
      >
        <Text style={styles.textoBotao}>Cadastrar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  rotulo: {
    fontSize: 16,
    marginBottom: 8,
    color: '#555',
    fontWeight: '500',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    width: '100%',
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  inputErro: {
    borderColor: 'red',
    backgroundColor: '#fffafa',
  },
  textoErro: {
    color: 'red',
    marginTop: 5,
    fontSize: 14,
  },
  textoSucesso: {
    color: 'green',
    marginTop: 5,
    fontSize: 14,
    fontWeight: '500',
  },
  botao: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  textoBotao: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});