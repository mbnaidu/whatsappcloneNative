import React, { Component } from 'react';
import { StyleSheet, View, Text} from 'react-native';

export default class SecondPage extends Component {
  static navigationOptions = {
    title: 'Second Page',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>You are on SecondPage</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin:50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});