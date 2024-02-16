import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  formContainer: {
    marginHorizontal: 20,
    marginVertical: 30,
  },
  label: {
    marginTop: 20,
    fontSize: 18,
    marginVertical: 5,
    color: 'black',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    fontSize: 14,
  },
  button: {
    backgroundColor: '#FF8911',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default styles;