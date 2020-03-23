import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Loading(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Getting the fucking weather</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "flex-end",
        paddingHorizontal : 30,
        paddingVertical : 100,
        backgroundColor : "#FDF6AA",
    },
    text : {
        color : "#2c2c2c",
        fontSize : 30, // px를 생략해도 rn에서 px로 적용해줌. px를 붙일경우 ""을 사용
        
    }


});