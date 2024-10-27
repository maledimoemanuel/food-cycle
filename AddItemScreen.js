import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Picker } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const AddItemScreen = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('Sell');
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handleSubmit = () => {
    // Handle submission logic (e.g., API call)
    console.log({ name, description, price, type, image });
  };

  return (
    <View style={styles.container}>
      <Text>Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text>Description</Text>
      <TextInput style={styles.input} value={description} onChangeText={setDescription} />

      <Text>Price</Text>
      <TextInput style={styles.input} value={price} keyboardType="numeric" onChangeText={setPrice} />

      <Text>Type</Text>
      <Picker selectedValue={type} style={styles.picker} onValueChange={(itemValue) => setType(itemValue)}>
        <Picker.Item label="Sell" value="Sell" />
        <Picker.Item label="Donate" value="Donate" />
      </Picker>

      <Button title="Pick an image from gallery" onPress={pickImage} />
      {image && <Text>Image selected!</Text>}

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: 150,
  },
});

export default AddItemScreen;
