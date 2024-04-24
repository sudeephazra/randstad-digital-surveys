import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© 2024 Randstad Digital. All rights reserved.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    footer: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#00308f', 
      paddingVertical: 10, 
      alignItems: 'center'
    },
    text: {
      fontSize: 12, 
      color: '#999', 
    },
  });

export default Footer;
