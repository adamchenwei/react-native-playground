
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
import detailCache from './../../store/ui/detailCache';

export default class DetailScreen extends Component{
  constructor() {
    super();
    console.log('On Detail....');
    console.log(this);
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

  shouldComponentUpdate(nextProps, nextState) {
    console.log('should update DETAIL......')
    console.log(nextProps);
    return true;
  }
  render() {
    console.log('Detail Rendering...')
    //const { id } = this.props.navigation.state.params;
    let params = this.props.navigation.state.params;

    //TODO: its a hack for dup deeplink, need to be resolved!!!
    if (!this.props.navigation.state.params) {
      params = detailCache.get();
    }

    return (
      <View style={styles.container}>
        <Text>WE ARE AT DETAIL PAGE!!!</Text>
        <Text>BEG---</Text>
        <Text>ALL PROP ---> {JSON.stringify(this.props)}</Text>
        <Text>navigation PROP ---> {JSON.stringify(this.props.navigation)}</Text>
        <Text>PRAMS STATE---> {JSON.stringify(params)}</Text>
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
