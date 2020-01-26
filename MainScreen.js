import React from 'react';
import {View,Text,StyleSheet,Button,Image} from 'react-native';
import { HeaderButtons} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton.js';

const MainScreen = props => {
     return(
         <View style={styles.screen}>
           <Image source={{uri:'https://res.cloudinary.com/springboard-images/image/upload/q_auto,f_auto,fl_lossy/wordpress/2018/12/blog-ML-blogs.png'}} 
           style={styles.image}/>
         </View>
     );

};

MainScreen.navigationOptions = navigationData => {
   return{
       headerTitle:'BRAINRUSH',
       headerRight: (
       <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
           <Item 
              title='MainDrawer' 
              iconName="bars"
              onPress={()=>{

              }} />
       </HeaderButtons>)

   };

};

const styles = StyleSheet.create(
    {
       screen:{
           flex:1,
           backgroundColor:'black'
       },
       image:{
           width:150,
           height:200
       }
    }
);

export default MainScreen;
