import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';

export default class App extends React.Component {
  renderList() {
    const names = [
      'Bill Gates Jr.',
      'Edward Snowden',
      'Ayn Rand',
      'Jon Johansen',
      'Nikola Tesla',
    ];

    const textElements = names.map((name) => {
      return <Text key={name}>
        { name }
      </Text>;
    });

    return textElements;
  }

  render() {
    return (
      <View>
        <Header title="Pessoas!" />
        { this.renderList() }
      </View>
    );
  }
}