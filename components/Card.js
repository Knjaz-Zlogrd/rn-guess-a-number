import React from "react";
import { View, StyleSheet } from 'react-native';

const Card = props => {
  return ( 
    <View style={{...styles.card, ...props.style}}>{props.children}</View>  // ...styles.card uses all properties from card StyleSheet 
  );                                                                        // while ...pros.style overrides it with aditional styles added in StartGameScreen via inputContainer
};

const styles = StyleSheet.create({
  card: {
    // Shadow Propreties below are for IOS only, elevation does the job on Android
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10
  }
});

export default Card;