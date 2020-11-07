import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";

const ButtonUser = (props) => {

    return (
        <View style={styles.root}>
            <TouchableOpacity style={styles.button} onPress={props.onPress}>
                <Text style={styles.text}>ADD</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ButtonUser;

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#bcf8f0',
        padding: 10,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 2, // Android
    },
    text: {
        fontWeight: 'bold',
        color: '#444444',
    },
});
