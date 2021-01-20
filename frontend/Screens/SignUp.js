import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { Button } from 'react-native-paper';
import Colors from '../Constants/Colors';

const SignUp = (props) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={Colors.primaryColor} barStyle="light-content" />
            <Text style={{color:Colors.textColor}}>
                Hello I am Sign Up Screen
            </Text>
            <Button mode="contained" 
                onPress={()=>{props.navigation.navigate('MainDash')}}>
                Go To Dashboard Page!
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

export default SignUp;