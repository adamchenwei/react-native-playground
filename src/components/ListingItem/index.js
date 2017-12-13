
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';

import records from './../../store/records';

export default class ListingItem extends Component {

  render() {
    const {
      navigation,
      item,
      onPressItemCallback,
    } = this.props;
    return (
      <Text
        onPress={() =>
          onPressItemCallback('Detail', item)
        }>{item.title}</Text>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
