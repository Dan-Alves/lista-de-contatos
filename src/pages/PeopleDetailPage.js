import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class PeopleDetailPage extends React.Component {
    render() {
      const { people } = this.props.navigation.state.params;
        return (
          <View style={styles.container}>
            <Image source={{ uri: people.picture.large }}
              style={styles.avatar}/>
            <Text>Eu Sou a PeopleDetailPage!!!</Text>
          </View> 
        );
    }
  }

  const styles = StyleSheet.create({
    avatar: {
      aspectRatio: 1,
      borderRadius: 300
    }, 
    container: {
      padding: 15,
    }
  });