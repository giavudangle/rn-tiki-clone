import React from 'react';
import {View,Text,StyleSheet,SafeAreaView,Image,Dimensions, TextInput, ScrollView} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeSectionComponent from '../components/HomeScreen/HomeSectionComponent';


const section_banner = require('../images/banner.jpg');

const {width,height} = Dimensions.get('screen');



export default HomeScreen = () => {
  return(
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={{backgroundColor:'#1e88e5'}}>  
          <View style={styles.headerContainer}>
              <View style={styles.inputContainer}>           
                <FontAwesome name="search" size={30}/>
                <TextInput 
                style={styles.inputText} 
                onChangeText={() => {}}
                placeholder='Bạn tìm gì hôm nay'/>
              </View>    
              <View style={styles.cartContainer}>
                <FontAwesome name="shopping-cart" size={24} color="#fff"/>
              </View>
          </View>
            <HomeSectionComponent title='Điện thoại - Máy tính bảng'/>
            <HomeSectionComponent title='Gia dụng'/>
            <HomeSectionComponent title='Thời trang '/> 
      </SafeAreaView>
      <View style={styles.seeMoreContainer}>
        <Text style={styles.seeMoreText}>
          XEM THÊM 695 PHẨM 
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer:{
    marginTop:-10,
    flexDirection:"row",
    backgroundColor:'#1e88e5',
    paddingTop:30,
    paddingBottom:30
  },
  inputContainer:{
    backgroundColor:'#fff',
    flexDirection:"row",
    flex:1,
    marginLeft:15,
    alignItems:"center",
    marginBottom:4,
    paddingVertical:5,
    paddingHorizontal:12,
    borderRadius:100,
    overflow:"hidden"
  },
  inputText:{
    color:'#969696',
    fontSize:16,
    marginLeft:10,
    fontWeight:'700',
    alignSelf:"center",
    zIndex:99

  },
  cartContainer:{
    paddingHorizontal:15,
    justifyContent:"center",
    alignItems:"center"
  },
  // Body Container
  bodyContainer:{
    backgroundColor:'#fff'
  },
  sectionContainer:{
    backgroundColor:'#fff',
    paddingHorizontal:5,
    paddingTop:10
  },
  sectionTitle:{
    fontSize:16,
    fontWeight:'700',
    color:'#2f2f2f',
    marginVertical:12
  },
  sectionImage:{
    width:width-26,
    height:height/6,
    borderRadius:10
  },
  listItemContainer:{
    marginTop:20,
    flexDirection:"row",
    marginLeft:10
  },
  filterContainer:{
    flexDirection:"row",
    marginTop:10,
    marginLeft:15
  },
  filterActiveButtonContainer:{
    backgroundColor:'#242424',
    paddingHorizontal:12,
    paddingVertical:6,
    borderRadius:4,
    marginRight:10
  },
  filterActiveText:{
    color:'#fff'
  },
  filterInActiveButtonContainer:{
    backgroundColor:'#fff',
    paddingHorizontal:12,
    paddingVertical:6,
    borderRadius:4,
    marginRight:10,
    borderColor:'#5a5a5a',
    borderWidth:1
  },
  filterInActiveText:{
    color:'#545454'
  },
  seeMoreContainer:{
    marginTop:10,
    alignItems:"center",
    padding:12,
    borderTopWidth:0.3,
    borderTopColor:'#545454',
    marginBottom:50
  }
})