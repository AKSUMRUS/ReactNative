import React, { Component } from 'react';
import {TextInput, View} from 'react-native';
import {TouchableOpacity} from "react-native";
import User from "./User";

const TextInputUser = (props) => {

    return (
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => props.onChangeText(text)}
                value={props.value}
            />
        </View>
    );
}

export default TextInputUser;
