import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const MainPage = props => {
  const [counter, setCounter] = useState(0);

  const addHandler = () => {
    setCounter(counter + 1);
  };
  const subtractHandler = () => {
    setCounter(counter - 1);
  };
  return (
    <View style={styles.container}>
      <Button title="Add" onPress={addHandler} />
      <Text>{counter}</Text>
      <Button title="Subtract" onPress={subtractHandler} />
    </View>
  );
};
export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
