import * as React from 'react';
import { Platform, Text, View, ActivityIndicator } from 'react-native';
import PeopleList from '../components/PeopleList';
import axios from 'axios';

export default class PeoplePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      peoples: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    setTimeout(() => {
      axios
        .get('https://randomuser.me/api/?nat=br&results=15')
        .then(response => {
          const { results } = response.data;
          this.setState({
            peoples: results,
            loading: false,
          });
        })
    }, 15)
  }

  render() {
    // this.props.navigation.navigate('PeopleDetail');
    return (
      <View>
        <ActivityIndicator size="large" color="#142850" />
        <PeopleList 
          peoples={this.state.peoples} 
          onPressItem={pageParams => {
            this.props.navigation.navigate('PeopleDetail', pageParams);
          }}
        />
      </View>
    );
  }
}