import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Image} from 'react-native';
const Framework=({children,title})=>{
  return(
<View style={styles.Frameworkcontainer}>

<Text style={styles.title}>{title}</Text>
<Text style={styles.children}>{children}</Text>
</View>
  );
}
const styles=StyleSheet.create({
  Frameworkcontainer:{
  flex:1
  },FrameworkImage:{

  }
})
export default Framework