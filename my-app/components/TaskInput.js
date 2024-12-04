import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function TaskInput({ taskText, setTaskText, addTask }) {
  return (
    <View>
      <TextInput 
        value={taskText}
        onChangeText={setTaskText} 
        placeholder="Agrega una tarea" 
        style={styles.input}
      />
      <Button 
        title="Añadir" 
        onPress={addTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
});