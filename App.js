import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import {Alert } from 'react-native';
import Loading from "./Loading";
import * as Location from 'expo-location';

export default class extends React.Component {
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const {coords} = await Location.getCurrentPositionAsync();  
      console.log(coords.latitude, coords.longitude);
    } catch (error) {
      Alert.alert("can't find you","so sad");
    }
    
    
  }
  componentDidMount(){
    this.getLocation();
  }
  render (){
    return <Loading/>
  }
}
