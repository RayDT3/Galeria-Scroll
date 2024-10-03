import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Dimensions } from 'react-native';

const IMAGES = [
  { id: '1', uri: 'https://via.placeholder.com/300x200/FF5733/FFFFFF?text=Imagen+1' },
  { id: '2', uri: 'https://via.placeholder.com/300x200/33FF57/FFFFFF?text=Imagen+2' },
  { id: '3', uri: 'https://via.placeholder.com/300x200/3357FF/FFFFFF?text=Imagen+3' },
  { id: '4', uri: 'https://via.placeholder.com/300x200/FFFF33/FFFFFF?text=Imagen+4' },
  { id: '5', uri: 'https://via.placeholder.com/300x200/33FFFF/FFFFFF?text=Imagen+5' },
  { id: '6', uri: 'https://via.placeholder.com/300x200/FF33FF/FFFFFF?text=Imagen+6' },
];

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Galería de Imágenes</Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {IMAGES.map(image => (
          <View key={image.id} style={styles.imageContainer}>
            <Image source={{ uri: image.uri }} style={styles.image} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    color: '#333',
  },
  scrollView: {
    alignItems: 'center',
    paddingBottom: 25,
  },
  imageContainer: {
    margin: 10,
  },
  image: {
    width: Dimensions.get('window').width * 0.9,
    height: 200,
    borderRadius: 10,
    backgroundColor: '#ddd',
  },
});

export default App;
