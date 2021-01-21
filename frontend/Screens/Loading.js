import React from 'react';
import { ActivityIndicator, StyleSheet, View, Text, StatusBar } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Colors from '../Constants/Colors';


const Loading = (props) => {
  return (
    <View style={{justifyContent:'center',alignItems:"center",flex:1, backgroundColor:Colors.primaryColor}}>
    <StatusBar backgroundColor={Colors.mojoColor} barStyle="light-content"/>
    <View style={styles.box}>
        <ActivityIndicator size="large" color={Colors.primaryColor}/>
        <Text style={styles.text}>Please Wait...</Text>
    </View> 
    </View>
  );
};

const styles = StyleSheet.create({
    box:{
        height:200,
        width:200,
        backgroundColor:Colors.backColor,
        justifyContent:'center',
        alignItems:'center',
        elevation:3     
    },
    text:{
        marginTop:20
    }
});

export default Loading;