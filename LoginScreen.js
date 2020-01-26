import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity,ImageBackground,TextInput} from 'react-native';

const LoginScreen = props => {
    return (
       <View style={styles.screen}>
           <ImageBackground source={{uri:'https://www.robotics.org/userAssets/riaUploads/image/Artificial%20Intelligence%20and%20Machine%20Learning.jpeg'}} style={styles.image}/>
            <View style={styles.inputContainer}>
            <View style={styles.input}>
              <Text style={styles.heading}>
                  USERNAME
              </Text>
              <TextInput style={styles.entry}/>
            </View>
            <View style={styles.input}>
              <Text style={styles.heading}>
                  EMAIL   
              </Text>
              <TextInput  style={styles.entryemail}/>
            </View>
            <View style={styles.input}>
              <Text style={styles.heading}>
                  PASSWORD
              </Text>
              <TextInput  style={styles.entry}/>
            </View>
            </View>
            <View style={styles.buttonContainer}>
           <TouchableOpacity style={styles.button} onPress={()=>{}}>
            <Text style={styles.buttonTitle}>LOGIN</Text>
            </TouchableOpacity>
            </View>
       </View>
    );
};

const styles = StyleSheet.create(
    {
      image:{
          width:340,
          height:300

      },
      screen:{
          flex:1,
          padding:10,
          backgroundColor:'black'
      },
      inputContainer:{
          borderRadius:2,
          backgroundColor:'#ccc',
          marginTop:10
          
      },
      heading:{
          fontSize:20,
          paddingHorizontal:10
      },
      input:{
          flexDirection:'row',
          marginVertical:10
      },
      entry:{
          borderWidth:1,
          width:200,
          fontSize:18,
          height:28
      },
      entryemail:{
        borderWidth:1,
        width:200,
        fontSize:18,
        height:28,
        marginLeft:47
      },
      buttonContainer:{
        marginTop:50,
        alignItems:'center' 
      },
        button:{
        backgroundColor:'#ccc',
        width:95  
      },
      buttonTitle:{
          fontSize:25,
          fontWeight:'bold',
          padding:10
      }
    }
);

export default LoginScreen;