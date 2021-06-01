import { Header } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet, View, Button} from 'react-native';

export default class FirstPage extends Component {


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View >
        <Button title='Go next'
        onPress={() =>navigate('SecondPage')}
        />
      </View>
    );
  }
}