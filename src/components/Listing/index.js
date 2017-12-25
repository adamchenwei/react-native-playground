
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import ListingItem from './../ListingItem';

export default class Listing extends Component {
  render() {
    const {
      onPressItemCallback,
    } = this.props;
    console.log(this.props.collection)
    return (
      <FlatList
        data={this.props.collection}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ListingItem
          onPressItemCallback={onPressItemCallback}
          item={item} />}
      />
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
