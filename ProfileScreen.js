import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  
  const farmerName = "Name Name";
  const farmerEmail = "name@gmail.com";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text>Name: {farmerName}</Text>
      <Text>Email: {farmerEmail}</Text>
      <Button title="Edit Profile" onPress={() => {/*to edit profile screen */}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
