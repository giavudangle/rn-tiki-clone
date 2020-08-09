import React from 'react';


import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Icon from 'react-native-vector-icons/MaterialIcons';


import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return(
    <Tab.Navigator
      initialRouteName='Home'
      tabBarOptions={{
        activeTintColor:'#157cdb',
        inactiveTintColor:'#262626'
      }}
    >
    <Tab.Screen 
    name="Home" 
    component={HomeScreen} 
    options={{
      tabBarLabel:' Trang chủ',
      tabBarIcon: ({color}) => (
        <Icon name="home" size={26} color={color}/>
      )
    }}
    />
    <Tab.Screen 
    name="Profile" 
    component={ProfileScreen}
    options={{
      tabBarLabel:' Trang chủ',
      tabBarIcon: ({color}) => (
        <Icon name="person" size={26} color={color}/>
      )
    }}
    />
   </Tab.Navigator>
  );

}



const App = () => {
  return (
   <NavigationContainer>
    <TabNavigator/>
   </NavigationContainer>
  );
};



export default App;
