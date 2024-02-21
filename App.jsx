import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Register, UserList} from './screens';

const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Registration" component={Register} />
      <Stack.Screen name="UserList" component={UserList} />
    </Stack.Navigator>
  </NavigationContainer>
  // <View><Text>TEst</Text></View>
    // <ScrollView style={styles.scrollView}>
    //   <View style={styles.container}>
    //     <View style={styles.utama}>
    //       <Text style={styles.title}>Users List</Text>
    //       {userData.map(user => (
    //         <View key={user.id} style={styles.userContainer}>
    //           <Text style={styles.boldText}>Name: <Text style={styles.normalText}>{user.name}</Text></Text>
    //           <Text style={styles.boldText}>Username: <Text style={styles.normalText}>{user.username}</Text></Text>
    //           <Text style={styles.boldText}>Email: <Text style={styles.normalText}>{user.email}</Text></Text>
    //           <Text style={styles.boldText}>Address: <Text style={styles.normalText}>{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</Text></Text>
    //           <Text style={styles.boldText}>Phone: <Text style={styles.normalText}>{user.phone}</Text></Text>
    //         </View>
    //       ))}
    //     </View>
    //   </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  utama: {
    marginBottom: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: '900',
    marginBottom: 10,
    color: 'black'
  },
  userContainer: {
    marginBottom: 10,
    padding: 10,
    borderColor: 'lightgrey',
    borderWidth: 1,
  },
  boldText: {
    fontWeight: 'bold',
  },
  normalText: {
    fontWeight: 'normal',
  },
});