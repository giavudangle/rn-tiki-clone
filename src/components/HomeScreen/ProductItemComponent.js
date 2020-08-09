import React from 'react';
import { View, Text, Image,StyleSheet } from 'react-native';

export default ProductItemComponent = ({productImageUrl,productName,productPrice}) => {
  return (
    <View style={styles.itemContainer}>
      <Image style={styles.itemImage} source={productImageUrl} />
      <Text style={styles.itemName}>{productName}</Text>
      <Text style={styles.itemPrice}>{productPrice}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItemContainer: {
    marginTop: 20,
    flexDirection: "row",
    marginLeft: 10
  },
  itemContainer: {
    width: 200,
    marginRight: -80
  },
  itemImage: {
    width: 80,
    height: 100
  },
  itemName: {
    marginVertical: 4,
    fontSize: 12,
    color: '#484848'
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2a2a2a'
  }
})