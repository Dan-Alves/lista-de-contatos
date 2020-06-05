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
    backgroundColor: '#142850',
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    color: '#dadddf',
  }
});

export default Header;