import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Dimensions, TextInput, ScrollView } from 'react-native';


import ListProductItemComponent from './ListProductItemComponent';
import ProductItemComponent from './ProductItemComponent';
import FilterProductComponent from './FilterProductComponent';

const { width, height } = Dimensions.get('screen');



export default HomeSectionComponent = ({title,banner,mockData,mockCatalog}) => {
  return (
    <View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <Image style={styles.sectionImage} source={banner} />
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <FilterProductComponent mockCatalog={mockCatalog}/>
        </ScrollView>
        <ListProductItemComponent>
          {
            mockData.map((e,index) => 
            <ProductItemComponent 
            key={index}
            productName={e.ProductName}
            productPrice={e.ProductPrice}
            productImageUrl={e.ProductImage} 
            />)
          }
        </ListProductItemComponent>
        <ListProductItemComponent>
        {
          mockData.map((e,index) => 
          <ProductItemComponent 
          key={index}
          productName={e.ProductName}
          productPrice={e.ProductPrice}
          productImageUrl={e.ProductImage} 
          />)
        }
      </ListProductItemComponent>
     
      </View>
      
      
     
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical:10
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2f2f2f',
    marginVertical: 12
  },
  sectionImage: {
    width: width - 26,
    height: height / 6,
    borderRadius: 10,
    marginBottom:30,
    marginTop:10,
  }
})