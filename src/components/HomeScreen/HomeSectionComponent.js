import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Dimensions, TextInput, ScrollView } from 'react-native';


import ListProductItemComponent from './ListProductItemComponent';
import ProductItemComponent from './ProductItemComponent';
import FilterProductComponent from './FilterProductComponent';

const section_banner = require('../../images/banner.jpg');
const iphoneX = require('../../images/products/iphoneX.jpg');
const iphone11 = require('../../images/products/iphone11.jpg');
const iphone7plus = require('../../images/products/iphone7plus.jpg');
const vsmart = require('../../images/products/vsmart.jpg');

const { width, height } = Dimensions.get('screen');

const mockCatalog = [
  'Điện thoại - Máy tính bảng',
  'Gia dụng',
  'Máy tính bảng',
  'Máy in'
];

const mockImages = [
  {
    ProductName:'Phone 7 Plus 128GB',
    ProductPrice:'15.999.999đ',
    ProductImage: iphone7plus
  },
  {
    ProductName:'Vsmart Joy 3',
    ProductPrice:'12.999.999đ',
    ProductImage: vsmart
  },
  {
    ProductName:'Phone 11 Plus 128GB',
    ProductPrice:'15.999.999đ',
    ProductImage: iphone11
  },
  {
    ProductName:'Iphone X 64GB',
    ProductPrice:'15.999.999đ',
    ProductImage: iphoneX
  }
]



export default HomeSectionComponent = ({title,banner}) => {
  return (
    <View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <Image style={styles.sectionImage} source={section_banner} />
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <FilterProductComponent mockCatalog={mockCatalog}/>
        </ScrollView>
        <ListProductItemComponent>
          {
            mockImages.map((e,index) => 
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
          mockImages.map((e,index) => 
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
  },
  listItemContainer: {
    marginTop: 20,
    flexDirection: "row",
    
  },
  filterContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 15
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