import React from "react";
import { 
  View, 
  Text, 
  Image, 
  TextInput, 
  ScrollView, 
  StyleSheet,
} from 'react-native';
import power from './assets/power.png';

const App = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <Text style={styles.title}>Basic Component in React Native</Text>
      <Text style={styles.title}>Wellcome!</Text>
      <TextInput placeholder="enter your name ...." style={styles.inputNama} />
      <View style={styles.container}>
        <View style={{width: 100, height: 100, backgroundColor: 'black'}}/>
        <View style={{width: 100, height: 100, backgroundColor: 'purple'}}/>
        <View style={{width: 100, height: 100, backgroundColor: 'navy'}}/>        
      </View>
      <Image
        source={require('./assets/react.jpeg')} 
        style={styles.image}
      />
      <Image source={power} style={styles.image} />
      <Image
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        style={styles.image}
      />
    </ScrollView> 
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 5,
  },
  container: {
    flexDirection: 'row',
    marginTop: 10, 
    alignSelf: 'center',
  },
  inputNama: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: 'bold',
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
  image: {
    height: 200, 
    width: 250, 
    marginTop: 20, 
    alignSelf: 'center',

  },
});

export default App;
