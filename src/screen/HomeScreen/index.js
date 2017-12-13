
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
} from 'react-native';
import Listing from './../../components/Listing';

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.onPressItemCallback = this.onPressItemCallback.bind(this);
  }

  onPressItemCallback(ScreenName, Value) {
    const { navigate } = this.props.navigation;
    navigate(ScreenName, Value);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        {/* <Button
          title="Go to Detail"
          onPress={() =>
            navigate('Detail', { name: 'Jane' })
          }
        /> */}
        <Listing
          onPressItemCallback={this.onPressItemCallback}
        />
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
