import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PaymentSuccessScreen = ({ route, navigation }) => {
  const { reference } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.successText}>Payment Successful!</Text>
      <Text style={styles.referenceText}>Reference: {reference}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.homeButton}>
        <Text style={styles.homeButtonText}>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentSuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9f7ef',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  successText: {
    fontSize: 24,
    color: '#27ae60',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  referenceText: {
    fontSize: 18,
    color: '#34495e',
    marginBottom: 30,
  },
  homeButton: {
    backgroundColor: '#34495e',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  homeButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});
