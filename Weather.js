import React from "react"
import { View, Text, StyleSheet, StatusBar } from "react-native"
import PropTypes from "prop-types";
import { MaterialCommunityIcons }  from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';


export default function Weather({ temp }) {
    return (
   //     <View style={styles.container}>
            <LinearGradient
                    colors={['#4c669f', '#3b5998', '#192f6a']}
                    style={styles.container}>
                <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={96} name="weather-lightning-rainy" colors="white"/>
                <Text style={styles.temp}>{temp}</Text>
            </View>
            <View style={styles.halfContainer} />
            </LinearGradient>
    //    </View>
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