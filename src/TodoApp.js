import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { addTodo, toggleTodo, removeTodo } from './redux/todosSlice';

const TodoApp = () => {
  const [text, setText] = useState('');
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo({
        id: Date.now().toString(),
        text,
        completed: false,
      }));
      setText('');
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.todoItem}>
      <Text
        style={[styles.todoText, { textDecorationLine: item.completed ? 'line-through' : 'none' }]}
        onPress={() => dispatch(toggleTodo(item.id))}
      >
        {item.text}
      </Text>
      <Button title="Remove" onPress={() => dispatch(removeTodo(item.id))} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Add a new todo"
      />
      <Button title="Add Todo" onPress={handleAddTodo} />
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  todoText: {
    fontSize: 18,
  },
});

export default TodoApp;
