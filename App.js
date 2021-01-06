import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert, Image, Button } from 'react-native';


export default function App() {

  const [quote, setQuote] = useState({})

  useEffect(() => {
    setQuote("Hello world, I am stepping into react native")
  });
 
  const quoteAlert = () => {
    Alert.alert(quote)
  }
  

  return (
    <View style={styles.container}>
      <Image source={require('./android.png')} style={styles.image} />
      <Text style={styles.header}>This is a demo app</Text>
      <Button onPress={quoteAlert}
              title="Press this" 
              color="#E29F2D"/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    color:"#000",
    marginBottom: 50,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "American Typewriter"
  },
  button: { 
  },
  buttonText: {
    color:"#000",
    fontFamily: "American Typewriter"
  },
  image: {
    marginBottom: 10,
    height: "50%",
    width: "60%",
    resizeMode:'contain'
  }

});