import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { Button } from 'react-native-paper';
import Colors from '../Constants/Colors';

const MainDash = (props) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={Colors.primaryColor} barStyle="light-content" />
            <Text style={{color:Colors.textColor}}>
                Hello I am Dashboard Page!
            </Text>
            <Button mode="contained" 
                onPress={()=>{props.navigation.navigate('SignIn')}}>
                Go To Sign Up Page!
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:Colors.backColor
    }
})

export default MainDash;