import React from 'react';
import { View, Text, Button, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

export default function Signup({ navigation }) {
  return (
    <View style={styles.container}>
    <Image
        source={require('./pictures/profile.png')}
        style={styles.image}
    />
    <View>
      <Text style={styles.title}>CREATE AN ACCOUNT</Text>
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
        <View style={styles.inputborder}>
        <TextInput
          placeholder="*Confirm Password"
          style={styles.inputtext}
          placeholderTextColor="#E9D735"
          secureTextEntry={true}
        />
        </View>
        <View>
          <Button
            title='SIGNUP'
            color="#E9D735"
            onPress={() => navigation.navigate('Login')}
            style={styles.buttontext}
          />
        </View>
        <View>
          <Text style={styles.acctext}>Don’t have an account? {''}
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.signtext}>Login</Text>
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
  image: {
    width: 80,
    height: 80,
    marginTop: 60,
    resizeMode: 'contain',
    paddingBottom: 110,
  },
  title: {
    fontSize: 20,
    color: 'white',
    paddingBottom: 30,
    fontWeight: 'bold',
  },
  inputborder:{
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    width: 240,
    marginBottom: 30,
  },
  inputtext:{
    fontSize: 15,
    color: '#E9D735',
    paddingBottom: 5  ,
  },
  buttontext:{
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  acctext:{
    marginTop: 15,
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  signtext:{
    marginTop: 15,
    fontSize: 15,
    color: '#E9D735',
    fontWeight: 'bold',
  },
});
