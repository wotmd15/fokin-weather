import React from "react"
import { View, Text, StyleSheet, StatusBar } from "react-native"
import PropTypes from "prop-types";
import { MaterialCommunityIcons }  from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';


const weatherOptions = {
    Haze: {
        iconName : "weather-hail",
        gradient : ["#4DA0B0","#D39D38"]
    },

    Thunderstorm :{
        iconName : "weather-hail",
        gradient : ["#4DA0B0","#D39D38"]
    },
    Drizzle: {
        iconName : "weather-hail",
        gradient : ["#4DA0B0","#D39D38"]
    },
    Rain: {
        iconName : "weather-hail",
        gradient : ["#4DA0B0","#D39D38"]
    }, 
    Snow: {
        iconName : "weather-hail",
        gradient : ["#4DA0B0","#D39D38"]
    }, 
    Atmosphere: {
        iconName : "weather-hail",
        gradient : ["#4DA0B0","#D39D38"]
    }, 
    Clear: {
        iconName : "weather-hail",
        gradient : ["#4DA0B0","#D39D38"] 
    }, 
    Clouds: {
        iconName : "weather-hail",
        gradient : ["#4DA0B0","#D39D38"]
    }, 
    Mist: {
        iconName : "weather-hail",
        gradient : ["#4DA0B0","#D39D38"]
    }, 
    Dust: {
        iconName : "weather-hail",
        gradient : ["#4DA0B0","#D39D38"]
    }
}
export default function Weather({ temp ,condition }) {
    return (
            <LinearGradient
                    colors={weatherOptions[condition].gradient}
                    style={styles.container}>
                <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                    size={96} 
                    name={weatherOptions[condition].iconName} 
                    color="white"
                />
                <Text style={styles.temp}>{temp}</Text>
            </View>
            <View style={styles.halfContainer} />
            </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm","Drizzle","Rain","Snow","Atmosphere","Clear","Clouds","Haze","Mist","Dust"]).isRequired
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent: "center",
        alignItems:"center",
        padding: 15, 
        alignItems: 'center', 
        borderRadius: 5 
    },
    temp : {
        fontSize : 42,
        color : "white"
    },
    halfContainer : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    }
})