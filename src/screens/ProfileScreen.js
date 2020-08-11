import React from 'react';
import { View, Text, StyleSheet, Dimensions,FlatList,Button,ScrollView } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const { width, height } = Dimensions.get('screen');





const UserComponent = ({avatar,color}) => {
  const mockUser = {
    name:'Vũ',
    type:'Tài khoản Facebook',
    assign:'Thành viên từ: 03/09/2018'
  }
  return (
    <View style={styles.profileContainer}>
      <View
      style={avatar === 'user'  ? styles.profileAvatar: null}>
        <FontAwesome style={{ alignSelf: "center" }} name={`${avatar}`} color={`${color}`} size={30} />
      </View>
      {
        mockUser !== null ? 
        ( <View style={styles.profileInformation}>
          <Text style={{fontSize:14,fontWeight:'600'}}>{mockUser.name}</Text>
          <Text style={{fontSize:14,fontWeight:'300'}}>{mockUser.type}</Text>
          <Text style={{fontSize:14,fontWeight:'300'}}>{mockUser.assign}</Text>
          </View>)
          :null
      }
      <View stytle={styles.profileDetail}>
        <FontAwesome name="angle-right" color='#1e88e5' size={30} />
      </View>
    </View>
  )
}

const mockInfor = [
  {
    id:1,
    haveIcon:true,
    caption:'Kết nối mạng xã hội',
    avatar:'share-alt',
    color:'gray'
  },
  {
    id:2,
    haveIcon:true,
    caption:'Quản lý đơn hàng',
    avatar:'reddit-alien',
    color:'red'
  },
  {
    id:3,
    haveIcon:true,
    caption:'Kết nối mạng xã hội',
    avatar:'stack-exchange',
    color:'red'
  },
  {
    id:4,
    haveIcon:false,
    caption:'Kết nối mạng xã hội',
    avatar:'',
    color:'red'
  },
  {
    id:5,
    haveIcon:false,
    caption:'Kết nối mạng xã hội',
    avatar:'',
    color:'red'
  },
  {
    id:6,
    haveIcon:false,
    caption:'Kết nối mạng xã hội',
    avatar:'',
    color:'red'
  },
  {
    id:7,
    haveIcon:false,
    caption:'Kết nối mạng xã hội',
    avatar:'',
    color:'red'
  }

]


const Border = () => {
  <View styles={{width:width,height:height/100,backgroundColor:'red'}}/>
}
  

const OptionComponent = ({props}) => {
  
  const {avatar,color,haveIcon,caption} = props;
  
  return (
  
    <View style={[styles.profileContainer]}>
      <View
      style={avatar === 'user'  ? styles.profileAvatar: styles.customList}>
      {haveIcon? <FontAwesome style={{ alignSelf: "center" ,paddingLeft:10}} name={`${avatar}`} color={`${color}`} size={30} /> : null} 
      </View>
      <View style={[styles.profileInformation,{paddingLeft:-10}]}>
          <Text style={haveIcon ? {fontSize:16,paddingRight:80,alignSelf:'center'}:{fontSize:16,paddingRight:100,alignSelf:'center'}}>{caption}</Text>
      </View>
      <View stytle={styles.profileDetail}>
        <FontAwesome name="angle-right" color='#1e88e5' size={30} />
      </View>
    </View>
  )
}




const Spacer = () => {
  return (
    <View style={{ backgroundColor: '#c3c9c5', width: width, height: height / 120 }} />
  )
}




export default ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <HeaderComponent>
        <View style={styles.headerContainer}>
          <View style={styles.cartContainer}>
          </View>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>Cá nhân</Text>
          </View>
          <View style={styles.cartContainer}>
            <FontAwesome name="shopping-cart" color='#fff' size={28} />
          </View>
        </View>
      </HeaderComponent>  
      <UserComponent user='Vũ' avatar={'user'} color={'#fff'}/>
      <Spacer />
      
      <FlatList
        data={mockInfor}
        renderItem={({item}) => {
          return(
            <View>
           <OptionComponent props={item}/>
            <Spacer/>
           </View>
          );
        }}
      />
      <View style={styles.btnContainer}>
        <Button onPress={() => {}} style={styles.btnLogout} title='Đăng xuất'/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {


  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1
  },
  headerTextContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '600'
  },
  cartContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  /**/
  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: 'center',
    marginVertical: 15,
    marginLeft: -22,
  
  },
  profileInformation: {
    marginLeft: -50
  },
  profileAvatar: {
    backgroundColor: '#1e88e5',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: "center"
  },
  profileDetail: {
    justifyContent: "center",
  },
  customList:{
    paddingHorizontal:-10,
    alignContent:'center',
    textAlign:'center',
  },
  btnContainer:{
    borderColor:'blue',
    borderWidth:1,
    paddingHorizontal:10,
    borderRadius:0,
    justifyContent:'center',
    paddingVertical:5,
    width:width/1.1,
    alignSelf:'center',
    marginVertical:10
    
  },
  btnLogout:{
 
    backgroundColor:'blue'
  },
  
})