import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, this is MyComponent!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});

export default MyComponent;
