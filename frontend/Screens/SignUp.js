import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image, TouchableWithoutFeedback, Keyboard, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Colors from '../Constants/Colors';


const SignUp = (props) => {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const sendCred = () => {
    fetch("http://10.0.2.2:3000/signup",{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        "email":email,
        "pass":pass
      })
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
    })
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <View style={styles.container}>

      <StatusBar backgroundColor={Colors.mojoColor} barStyle="light-content"/>

        <Text style={{color:Colors.textColor, fontSize:28, textAlign:'center'}}>
          MongoDB, NodeJS With React Native! 
        </Text>

        <View style={styles.midLine}/>

        <View style={styles.vision}>
          <Image source={require("../MongoDB.png")} style={{height:50,width:150}}/>
          <Image source={require("../nodejs.png")} style={{height:60,width:55,marginLeft:10}}/>
          <Image source={require("../react-native.png")} style={{height:60,width:55, marginLeft:20}}/>
        </View>

        <Text style={styles.catchy}>
          Create Account!
        </Text>

        <View style={{width:350,height:20}}>
        <TextInput
          style={{height:40}}
          label="Email"
          mode="outlined"
          theme={{colors:{primary:"#1a508b"}}}
          value={email}
          onChangeText={(text)=>setEmail(text)}
        />
        </View>

        <TextInput
          style={{height:40, width:350, marginTop:35}}
          secureTextEntry={true}
          label="Password"
          mode="outlined"
          theme={{colors:{primary:"#1a508b"}}}
          value={pass}
          onChangeText={(text)=>setPass(text)}
        />

        <Button mode="contained" onPress={()=> sendCred()}
          style={{marginTop:20, backgroundColor:"#1a508b", elevation:4}}>
          Sign Up
        </Button>

        <View style={styles.lower}>
          <Text style={styles.lowerText}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={()=>{props.navigation.navigate("SignIn")}}>
                <Text style={{color:"#1a508b", marginTop:5, fontWeight:"bold"}}> Sign-in </Text>
              </TouchableOpacity>
        </View>


      </View>    

    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:Colors.backColor
  },
  midLine:{
    borderBottomColor:Colors.textColor,
    borderBottomWidth:4,
    borderRadius:10,
    width:300,
    margin:10
  },
  vision:{
    flexDirection:'row',
    alignContent:"space-around"
  },
  catchy:{
    fontSize:35,
    marginTop:20,
    marginRight:110,
    color:"#1a508b"
  },
  lower:{
    flexDirection:'row',
    marginTop:10
  },
  lowerText:{
    marginTop:5
  }
});

export default SignUp;