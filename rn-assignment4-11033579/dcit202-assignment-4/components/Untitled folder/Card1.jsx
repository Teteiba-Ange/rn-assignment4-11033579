import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Image} from 'react-native';
const Card = () => {
  return (
    <View style={styles.card}>
    <View style={styles.feature}>
    
      <Image style={styles.featureImage3} source={require('../grommet-icons_google.png')}/>
      <Text >Software Developer</Text>
      <Text >Google</Text>
      <View style={styles.featureBottom}>
      <Text style={styles.featureImage1}>$160,00</Text>
       <Text style={styles.featureImage2}>Accra-Ghana</Text>
       </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'blueblack',
    padding: 20,
    margin: 20,

    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  }, feature:{
    flex:1
  },featureImage1:{
   color:'black'
  },featureImage2:{
   color:'black'
  },featureImage3:{

  },featureBottom:{
    marginBottom:20
  }
  
});

export default Card;