import React from 'react'
import NavigationBar from 'react-native-navbar';
import {View} from "react-native";

const styles = {
    container: {
        width: '100%',
        color: '#ffffff',
        backgroundColor: '#326cf1',
        textAlign: 'center'
    },
};

const titleConfig = {
    title: 'Home',
    style: {
        color: '#ffffff'
    }
};

export default function Navbar() {
    return (
            <NavigationBar
                style={styles.container}
                title={titleConfig}
            />

    );
}
