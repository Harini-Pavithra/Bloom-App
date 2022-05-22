import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import OnBoardingScreen from '../screens/OnBoardingScreen';

  export default class Screen extends React.Component {
    static navigationOptions = {
      header: null,
    };
    render() {
      return (
        <OnBoardingScreen navigation={this.props.navigation}/> 
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });