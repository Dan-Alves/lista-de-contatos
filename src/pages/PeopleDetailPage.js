import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class PeopleDetailPage extends React.Component {
    render() {
      const { people } = this.props.navigation.state.params;
        return (
          <View style={styles.container}>
            <Image source={{ uri: people.picture.large }}
              style={styles.avatar}/>
            <View style={styles.detailContainer}>
              <View style={styles.line}>
                <Text style={styles.cellLabel}>Email: </Text>
                <Text style={styles.cellContent}>{ people.email }</Text>
              </View>
              <View style={styles.line}>
                <Text style={styles.cellLabel}>Cidade: </Text>
                <Text style={styles.cellContent}>{ people.location.city }</Text>
              </View>
              <View style={styles.line}>
                <Text style={styles.cellLabel}>Estado: </Text>
                <Text style={styles.cellContent}>{ people.location.state }</Text>
              </View>
            </View>
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
    },
    detailContainer: {
      backgroundColor: '#e2f9ff',
      marginTop: 20,
      elevation: 1
    }, 
    line: {
      flexDirection: 'row',
      paddingTop: 3,
      paddingBottom: 3,
      borderWidth: 1,
      borderColor: '#e2f9ff',
    },
    cellLabel: {
      fontSize: 18,
      //borderWidth: 1,
      paddingLeft: 5,
      fontWeight: 'bold'
    },
    cellContent: {
      fontSize: 18,
      //borderWidth: 1,
      paddingLeft: 5,
    }
  });