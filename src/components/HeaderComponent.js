import React from 'react';
import {View,StyleSheet,SafeAreaView, ScrollView} from 'react-native';




export default HeaderComponent = ({children}) => {
  return(
   
      <SafeAreaView style={{backgroundColor:'#1e88e5'}}>  
          <View style={styles.headerContainer}>
          {children}
          </View>  
      </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  headerContainer:{
    marginTop:5,
    flexDirection:"row",
    backgroundColor:'#1e88e5',
    paddingTop:5,
    paddingBottom:10
  },
  
})