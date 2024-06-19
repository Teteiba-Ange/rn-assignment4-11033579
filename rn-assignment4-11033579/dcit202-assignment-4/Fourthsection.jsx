import{Text,View,StyleSheet,FlatList} from 'react-native';
import React from 'react';
 const task=[
  {name:"BurgerKing",key:'1'},
  { name:"Facebook",key:2},
  {name:"Google",key:3}
  ];
const Fourthsection=()=>{
 
   return(
     <View style={styles.Fourthsectioncontainer}>
    <View> <Text style={styles.FourthsectionBig}>Ongoing Task </Text></View>
 <FlatList 
 data={task}
  horizontal={false}
  renderItem={({item})=>(
    <View style={styles.FlatlistBox}>
    <Text style={styles.FlatlistBoxSection}>{item.name}</Text>
    </View>
  )}
  keyExtractor={(item)=>item.key.toString}
  />
  </View>
);}
const styles=StyleSheet.create({
  Fourthsectioncontainer:{
   flex:2,
  marginTop:40
  }, FourthsectionBig:{
    fontSize:20,
    fontWeight:700
  },
  FlatlistBox:{
           borderColor:'#E8D1BA',  
        borderWidth:1,
        height:80,
        width:354,
        borderRadius:15,
        marginHorizontal:20,
        marginVertical:20,
        marginRight:10,
        color:'blue'
    },FlatlistBoxSection:{
       fontSize:20,
    fontWeight:700,
        fontStyle:'bold',
    }
})
export default Fourthsection