import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ItemDetailsScreen = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text>{item.description}</Text>
      <Text>{item.type === 'Sell' ? `$${item.price}` : 'Donation'}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  itemName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ItemDetailsScreen;
