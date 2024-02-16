import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Title = () => {
  const title = 'Welcome';
  return (
    <>
      <Text style={style.title}>{title}</Text>
    </>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 35,
    color: 'black',
    fontWeight: 'bold',
    margin: 5,
  },
});

export default Title;
