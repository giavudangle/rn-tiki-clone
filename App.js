import React from 'react';


import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesin from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import SearchScreen from './src/screens/SearchScreen';
import CategoryScreen from './src/screens/CategoryScreen';

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
      name="Category"
      component={CategoryScreen}
      options={{
        tabBarLabel:'Danh mục',
        tabBarIcon: ({color}) => (
          <AntDesin name="appstore-o" size={26} color={color}/>
        )
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchScreen}
      options={{
        tabBarLabel:'Tìm kiếm',
        tabBarIcon: ({color}) => (
          <Ionicons name="search-outline" size={26} color={color}/>
        )
      }}
    />
    <Tab.Screen
      name="Notification"
      component={NotificationScreen}
      options={{
        tabBarLabel:'Thông báo',
        tabBarIcon: ({color}) => (
          <Ionicons name="notifications" size={26} color={color}/>
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
