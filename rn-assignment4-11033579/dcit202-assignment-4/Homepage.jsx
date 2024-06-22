import React from 'react';
import{Text,View,StyleSheet,TextInput} from 'react-native';
import {Image} from 'react-native';
import{Feather} from '@expo/vector-icons';
import ComponentHomepag from './components/ComponentHomepag.jsx';
import Card1 from './components/Untitled folder/Card1.jsx';
import Last from './Last.jsx';


const Homepage=()=>{
  return(
    <View style={styles.Homepage}>
     <Image source={require('./components/iPhone X (or newer).png')}  />
     <View style={styles.HomepageG}>
    <Text style={styles.Homepagehead}>Angela Acquah  </Text>
    <Text style={styles.Homepagemuted}>angelateteiba11@gmail.com</Text>
     <Text style={styles.HomepageImage} ><Image  source={require('./Ellipse.png')}/></Text> 
    </View>
    <View style={styles.searchInput}>
      <Image source={require('./Search.png')}/>
  </View>
  <Text style={styles.HompageFeature}> Featured jobs</Text>
  <View style={styles.HomepageSectionBoxContainer}>
  <View style={styles.HomepageSectionBox}>
  <ComponentHomepag/>
  <Card1/>
  </View>
  </View>
  <View style={styles.Last}>
  <Text style={styles.HompageFeature}>Popular jobs</Text>
  <Last/>
  </View>
   </View>
  );
}
const styles=StyleSheet.create({
  Homepage:{flex:1,backgroundColor:'white'},
  HomepageG:{
    flex:1,
    marginTop:10,
    width:320,
    height:20,
    marginBottom:1,
    border:20,
    justifyContent:'space-between',
    

  },
  Homepagehead:{
    backgroundColor:' #0D0D26',
    marginLeft:24,
    fontSize:24,
    fontWeight:700,
    fontFamily:'Poppins',
   
  
  },Homepagemuted:{
    flex:1,
    marginLeft:24,
    marginBottom:0,fontFamily:'Poppins',
    fontSize:20,
    fontWeight:400,
  },searchInput:{
    flex:1,
    border:20,
    width:320,
    height:270,
    marginLeft:54,
    marginRight:27,
marginBottom:10
  },HompageFeature:{
    flex:2
  },HomepageImage:{
    marginLeft:300,
    border:20,  
    borderRadius:10,
     backgroundColor: '#FAFAFD'

  },
  HomepageSectionBoxContainer:{
    flex:1
  },
  HomepageSectionBox:{
    flexDirection:'row',
    backgroundColor:'blue-black'
  },Last:{
    flex:3,
    flexDirection:'column',
    justifyContent:'space-between',
    backgroundColor:'white'
  }
})
export default Homepage
