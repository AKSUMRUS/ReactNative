import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import User from "./src/atoms/User";
import AddUser from "./src/molecules/AddUser";
import Userlist from "./src/molecules/UsersList";
import Navbar from "./src/atoms/NavBar";
import DATA from "./src/Data";


export default function App() {
  const [value, onChangeText] = React.useState('Type name...');

  return (
    <View style={styles.container}>
      <Navbar/>
      <Userlist/>
      <AddUser onChangeText={text => onChangeText(text)} onPress={() =>{
            let user = {id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', title: value}
            DATA.push(user)
        }} value={value}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
