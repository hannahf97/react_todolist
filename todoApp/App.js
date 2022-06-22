import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import DataHead from './src/components/DataHead';

function App() {
  const date = new Date();
  console.log(date);
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <DataHead date={date} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  statusBarPlaceholder: {
    backgroundColor: '#26a69a',
  },
  block: {
    padding: 16,
    backgroundColor: '#26a69a',
  },
  dateText: {
    fontSize: 24,
    color: 'white',
  },
});
export default App;
