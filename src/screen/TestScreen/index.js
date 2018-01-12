
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Linking,
  TouchableOpacity,
} from 'react-native';

export default class TestScreen extends Component{
  constructor() {
    super();
    console.log('On Test....');
    console.log(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('should update TEST......')
    console.log(nextProps);
    return true;
  }

  render() {
    console.log('test Rendering...')
    //const { id } = this.props.navigation.state.params;
    let params = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
        <Text>WE ARE AT test PAGE!!!</Text>
        <Text>BEG---</Text>
        <Text>ALL PROP ---> {JSON.stringify(this.props)}</Text>

        <Text>{JSON.stringify(params)}</Text>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
