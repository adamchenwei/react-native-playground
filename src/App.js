/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import HomeScreen from './screen/HomeScreen';
import DetailScreen from './screen/DetailScreen';
import TestScreen from './screen/TestScreen';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


//TODO this is really a router file

export default StackNavigator({
  Home: { screen: HomeScreen },
  Detail: { screen: DetailScreen },
  test: { screen: TestScreen },
});
