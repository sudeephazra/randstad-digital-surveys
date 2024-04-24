import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const CardView = ({ imageSource, title, description, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={imageSource} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#00308f',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '98%',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#f0f0f0'
  },
  cardDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: '#f0f0f0'
  },
});

export default CardView;