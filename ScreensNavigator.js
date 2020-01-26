import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import MainScreen from '../MainScreen.js';
import LoginScreen from '../LoginScreen.js';

const ScreensNavigator = createStackNavigator({
    mainscreen:MainScreen,
    loginscreen:LoginScreen
},
{defaultNavigationOptions:{
    headerStyle:{
        backgroundColor:'white'
    },
    headerTintColor:'#4a148c'
}});

export default createAppContainer(ScreensNavigator);