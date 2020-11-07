import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import User from "../atoms/User";
import DATA from "../Data";

const Item = ({ title }) => (
    <View style={styles.item}>
        <User name={title}/>
    </View>
);

const Userlist = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    return (
            <View style={{flex:1}}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            </View>
    );
}


const styles = StyleSheet.create({
    item: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        width: '100%'
    },
    title: {
        fontSize: 32,
    },
});

export default Userlist;

