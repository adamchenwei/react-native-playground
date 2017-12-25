
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

export default class DetailScreen extends Component{
  constructor() {
    super();
    this.handleUrlClick = this.handleUrlClick.bind(this);
  }

  handleUrlClick = () => {
    const url = this.props.navigation.state.params.references[0].url;

    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  }

  render() {
    //const { id } = this.props.navigation.state.params;
    const params = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Text>Detail</Text>
        <Text>BEG---</Text>
        <Text>{JSON.stringify(this.props.navigation)}</Text>
        {/* <Text>{JSON.stringify()}</Text> */}
        <Text>END---</Text>
        <TouchableOpacity onPress={this.handleUrlClick}>

        <View style={styles.button}>
          {/* <Text style={styles.text}>Open {params.title}</Text> */}
        </View>
        
        </TouchableOpacity>
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
