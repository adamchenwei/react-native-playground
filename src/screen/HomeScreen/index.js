
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
import Records from './../../store/records';
import ProductionMockList from './../../store/records/production';
import detailCache from './../../store/ui/detailCache';

export default class HomeScreen extends Component {
  static navigationOptions = { // A
    title: 'Home',
  };
  constructor() {
    super();
    this.recordsInstance = new Records(ProductionMockList);
    this.state = {
      url: '',
      routeName: '',
    }
    this.onPressItemCallback = this.onPressItemCallback.bind(this);
  }

  onPressItemCallback(ScreenName, id) {
    const { navigate } = this.props.navigation;
    console.log('nav 2');
    console.log(this.recordsInstance);
    console.log(id);
    console.log(navigate);
    console.log(ScreenName);
    navigate(ScreenName, { id, content: this.recordsInstance.getARecord(id) });
  }

  // Router Setting BEG
  componentDidMount() { // B
    if (Platform.OS === 'android') {
      Linking.getInitialURL().then(url => {
        console.log('nav trigger 1');
        this.navigate(url);
      });
    } else {
        console.log('nav add listner 1');
        Linking.addEventListener('url', this.handleOpenURL);
      }
    }

    componentWillUnmount() { // C
      console.log('nav remove listner 1');
      Linking.removeEventListener('url', this.handleOpenURL);
    }

    shouldComponentUpdate(nextProps, nextState) {
      console.log('should update HOME......')
      console.log(nextProps);
      return true;
    }

    handleOpenURL = (event) => { // D
      console.log('nav trigger 2');
      console.log(event);
      this.navigate(event.url);
    }

    navigate = (url) => { // E
      const { navigate } = this.props.navigation;
      const route = url.replace(/.*?:\/\//g, '');
      const id = route.match(/\/([^\/]+)\/?$/)[1];
      const routeName = route.split('/')[0];
      this.setState({routeName});
      if (routeName === 'Detail') {
        console.log('nav 1');
        console.log(this.recordsInstance);
        console.log(id);
        console.log(navigate);

        //TODO: its a hack for dup deeplink, need to be resolved!!!
        detailCache.set({ id, content: this.recordsInstance.getARecord(id) });
        
        navigate('Detail', { id, content: this.recordsInstance.getARecord(id) });
      } else {
        console.log('WRONG ROUTE')
      };
    }
  // Router Setting END

  render() {
    const { navigate } = this.props.navigation;
    const records = this.recordsInstance.getAll();
    return (
      <View style={styles.container}>
        <Text> I am at HOME SCREEN </Text>
        <Text>STATE URL -> {this.state.url}</Text>
        <Text>BEG</Text>
        <Text>ROUTE TEST HERE -> {JSON.stringify(this.state.routeName)}</Text>
        <Text>THIS.PROPS->{JSON.stringify(this.props)}</Text>
        <Text>THIS.PROPS.NAVIGATION->{JSON.stringify(this.props.navigation)}</Text>
        {/* <Text>recordsInstance->{JSON.stringify(recordsInstance)}</Text> */}

        <Text>END</Text>
        <Text>Listing vvv</Text>
        {/* <Button
          title="Go to Detail"
          onPress={() =>
            navigate('Detail', { name: 'Jane' })
          }
        /> */}
        <Listing
          collection={records}
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
