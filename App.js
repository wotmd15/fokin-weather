import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import {Alert } from 'react-native';
import Loading from "./Loading";
import * as Location from 'expo-location';
import axios from "axios";

const API_KEY = "9197de44cc0d5b26b6bbd59f6fab60af";

export default class extends React.Component {
  state = {
    isLoading : true
  };
  getWeather = async(latitude,longitude) => {
    //console.log(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    ); 
    console.log(data);  
  }
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: {latitude, longitude}
      } = await Location.getCurrentPositionAsync();  
      //console.log(coords.latitude);
/* 
      "latitude": 37.785834,
      "longitude": -122.406417,
*/
      this.getWeather(latitude,longitude);
      this.setState({isLoading : false});
      // Send to API and get Weather
    } catch (error) {
      Alert.alert("can't find you","so sad");
    }
    
    
  }
  componentDidMount(){
    this.getLocation();
  }
  render (){
    const { isLoading } = this.state;
    return isLoading ? <Loading/> : <Wheater/ >;
  }
}
