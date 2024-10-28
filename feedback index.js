import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const FeedbackScreen = () => {
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (feedback && email) {
      Alert.alert('Obrigado!', 'Seu feedback foi enviado com sucesso.');
      // Aqui você pode enviar o feedback para o servidor ou tratá-lo da maneira necessária
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deixe seu Feedback sobre o ônibus</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Seu email"
        placeholderTextColor="#2c8dc0"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Escreva seu feedback aqui"
        placeholderTextColor="#2c8dc0"
        value={feedback}
        onChangeText={setFeedback}
        multiline={true}
      />
      
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar Feedback</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#2c8dc0',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#2c8dc0',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    color: '#2c8dc0',
  },
  textArea: {
    height: 1000,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#2c8dc0',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default FeedbackScreen;

