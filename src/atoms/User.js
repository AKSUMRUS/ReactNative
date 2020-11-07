import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

export default function User(props){
    return <View style={styles.container}>
        <Text style={styles.avatar}>{initials(props.name)}</Text>
        <Text>{props.name}</Text>
    </View>
}

function initials(str){
    let names = str.split(' '),
        initial = names[0].substring(0,1).toUpperCase() + names[1].substring(0,1).toUpperCase();
    return initial;
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar:{
        padding: 4,
        borderRadius: 400/2,
        backgroundColor: 'blue',
        color: 'white',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8
    }
})
