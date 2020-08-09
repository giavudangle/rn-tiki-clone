import React from 'react';
import {StyleSheet,ScrollView} from 'react-native';



export default ListProductItemComponent = ({children}) => {
  return(
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.listItemContainer}>
       {children}
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  listItemContainer:{
    marginTop:20,
    flexDirection:"row",
    marginLeft:0
  }
})