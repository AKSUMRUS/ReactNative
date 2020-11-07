import React from 'react';
import {View} from "react-native";
import TextInputUser from "../atoms/Textinput";
import ButtonUser from "../atoms/Button";

function AddUser(props){

    return <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', minWidth: 200, marginBottom: 10, marginTop: 10}}>
            <TextInputUser onChangeText={props.onChangeText} value={props.value}/>
            <ButtonUser onPress={props.onPress}/>
        </View>;
}

export default AddUser;
