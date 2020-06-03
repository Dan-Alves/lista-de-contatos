import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const Header = (props) => (
  <View style={style.container}>
    <Text style={style.title}>{ props.title }</Text>
  </View>
);

/* StyleSheet */
const style = StyleSheet.create({
  container: {
    marginTop: 25,
    backgroundColor: '#522d5b',
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    color: '#d7385e',
  }
});

export default Header;