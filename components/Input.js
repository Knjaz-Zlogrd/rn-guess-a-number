import React from "react";
import { TextInput, StyleSheet } from 'react-native';

const Input = props => {
  return <TextInput {...props} style={{...styles.input, ...props.style }} /> // {...props} forwarding the props to the component I'm using in this custom component
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10
  }
});

export default Input;