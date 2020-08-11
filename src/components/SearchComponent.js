import React from 'react';
import { View, TextInput,StyleSheet} from 'react-native';


export default SearchComponent = ({title}) => {
  return (
    <View style={styles.inputContainer}>
    <TextInput
      style={styles.inputText}
      onChangeText={() => { }}
      placeholder={`${title}`}
    />
    </View>
    
);
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#fff',
    flexDirection: "row",
    flex: 1,
    marginLeft: 15,
    alignItems: "center",
    marginBottom: -10,
    borderRadius: 100,
    
  },
  inputText: {
    color: '#969696',
    fontSize: 13,
    marginLeft: 10,
    fontWeight: '700',
    alignSelf: "center",
    top:-5
  }
})