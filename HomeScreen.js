import { StyleSheet, Image, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

export default function App({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        source={require('./pictures/TIP.png')}
        style={styles.image}
        />
        <View>
          <Text style={styles.title}>Let’s help you find your things!</Text>
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
          <Text style={styles.acctext}>Don’t have an account? {''}
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
  image: {
    width: 200,
    height: 200,
    marginTop: 80,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    color: 'white',
    paddingBottom: 30,
    fontWeight: 'bold',
  },
  inputtext:{
    fontSize: 15,
    color: '#E9D735',
    paddingBottom: 5  ,
  },
  inputborder:{
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    width: 240,
    marginBottom: 30,
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
