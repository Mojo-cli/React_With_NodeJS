import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { Button } from 'react-native-paper';
import Colors from '../Constants/Colors';

const SignIn = (props) => {
    return (
        <View style={styles.container}>
        <StatusBar backgroundColor={Colors.primaryColor} barStyle="light-content" />
            <Text style={{color:Colors.textColor}}>
                Hello I am Sign In Page
            </Text>
            <Button mode="contained" 
                onPress={()=>{props.navigation.navigate('SignUp')}}>
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

export default SignIn;
