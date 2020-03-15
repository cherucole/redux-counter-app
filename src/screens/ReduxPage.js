import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { addHandler, subtractHandler } from '../store/actions';

const ReduxPage = props => {
  const counter = useSelector(state => state.counter); //only one reducer so direct access to its state
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Button title="Add" onPress={() => dispatch(addHandler())} />
      <Text>{counter}</Text>
      <Button title="Subtract" onPress={() => dispatch(subtractHandler())} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ReduxPage;
