import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Dimensions, TextInput, ScrollView } from 'react-native';


export default FilterProductComponent = ({mockCatalog}) => {
  return (
    <View style={styles.filterContainer}>
      {mockCatalog.map((e,index) => (
        <View
          key={index.toString()}
          style={
            index === 0 
            ? styles.filterActiveButtonContainer
            : styles.filterInActiveButtonContainer
          }
        >
        <Text
          style={
            index === 0
            ? styles.filterActiveText
            : styles.filterInActiveText
          }
        >{e}</Text>
        </View>
      ))}    
    </View>
  );
}

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 0
  },
  filterActiveButtonContainer: {
    backgroundColor: '#242424',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    marginRight: 10
  },
  filterActiveText: {
    color: '#fff'
  },
  filterInActiveButtonContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    marginRight: 10,
    borderColor: '#5a5a5a',
    borderWidth: 1
  },
  filterInActiveText: {
    color: '#545454'
  },
  seeMoreContainer: {
    marginTop: 10,
    alignItems: "center",
    padding: 12,
    borderTopWidth: 0.3,
    borderTopColor: '#545454'
  }
})