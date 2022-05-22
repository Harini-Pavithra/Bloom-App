import { createStackNavigator } from 'react-navigation';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
//import Onboarding from 'react-native-onboarding-swiper';
//import OnBoardScreen from '../screens/OnBoarding';

const HomeStackNavigator = createStackNavigator({
  Home: {
    //screen: OnBoardScreen,
    screen: HomeScreen,
  },
},



);
export default HomeStackNavigator;
/*export default class HomeStackNavigator extends React.Component {
    render() {
      return (
          <View style = {styles.container}>
          <Text>hi sandhya</Text>
          
        </View>
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
  */