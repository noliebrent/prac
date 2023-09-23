import React from 'react';
import { StyleSheet, Image, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('./pictures/TIP.png')}
          style={styles.image}
        />
        <View>
          <Text style={styles.imageText}>Lost and Found</Text>
          <Text style={styles.imageTextsub}>Tracker</Text>
        </View>
      </View>
      <View>
        <Text style={styles.title}>Let’s help you find your things!</Text>
      </View>
      <View style={styles.inputborder}>
        <TextInput
          placeholder="*Student Number"
          style={styles.inputtext}
          placeholderTextColor="#E9D735"
        />
      </View>
      <View style={styles.inputborder}>
        <TextInput
          placeholder="*Email"
          style={styles.inputtext}
          placeholderTextColor="#E9D735"
        />
      </View>
      <View style={styles.inputborder}>
        <TextInput
          placeholder="*Password"
          style={styles.inputtext}
          placeholderTextColor="#E9D735"
          secureTextEntry={true}
        />
      </View>
      <View>
        <Button
          title='LOGIN'
          color="#E9D735"
          style={styles.buttontext}
        />
      </View>
      <View>
        <Text style={styles.acctext}>Don’t have an account?{' '}
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signtext}>Sign up</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#394B58',
    alignItems: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  imageText: {
    fontSize: 25,
    color: 'white',
    marginLeft: 10,
  },
  imageTextsub: {
    fontSize: 25,
    color: 'white',
    marginLeft: 47,
  },
  title: {
    fontSize: 20,
    color: 'white',
    paddingBottom: 30,
    fontWeight: 'bold',
  },
  inputtext: {
    fontSize: 15,
    color: '#E9D735',
    paddingBottom: 5,
  },
  inputborder: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    width: 240,
    marginBottom: 30,
  },
  buttontext: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  acctext: {
    marginTop: 15,
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  signtext: {
    marginTop: 15,
    fontSize: 15,
    color: '#E9D735',
    fontWeight: 'bold',
  },
});
