import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import TodoApp from './src/TodoApp';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <TodoApp />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
