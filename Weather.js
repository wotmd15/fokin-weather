import React from "react"
import { View, Text, StyleSheet } from "react-natvie"
import PropTypes from "prop-types";



export default function Weather({ temp }) {
    return (
        <View styles={styles.container}>
            <Text>{temp}</Text>
        </View>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        jstifyContent: "center",
        alingItems:"center"
    }
})