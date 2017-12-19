
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  Linking,
} from 'react-native';
import Listing from './../../components/Listing';

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      url: '',
    }
    this.onPressItemCallback = this.onPressItemCallback.bind(this);
  }

  onPressItemCallback(ScreenName, Value) {
    const { navigate } = this.props.navigation;
    navigate(ScreenName, Value);
  }

  // Router Setting BEG
  componentDidMount() { // B
    if (Platform.OS === 'android') {
      Linking.getInitialURL().then(url => {
        this.navigate(url);
      });
    } else {
        Linking.addEventListener('url', this.handleOpenURL);
      }
    }
    
    componentWillUnmount() { // C
      Linking.removeEventListener('url', this.handleOpenURL);
    }
    handleOpenURL = (event) => { // D
      this.navigate(event.url);
    }
    navigate = (url) => { // E
      const { navigate } = this.props.navigation;
      const route = url.replace(/.*?:\/\//g, '');
      const id = route.match(/\/([^\/]+)\/?$/)[1];
      const routeName = route.split('/')[0];
    
      if (routeName === 'people') {
        navigate('People', { id, name: 'chris' })
      };
    }
  // Router Setting END

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>BEG</Text>
        <Text>{this.state.url}</Text>
        <Text>END</Text>
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
