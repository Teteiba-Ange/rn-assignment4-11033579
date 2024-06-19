import React from 'react';
import{Text,View,StyleSheet,TextInput,Button} from 'react-native';
import {Image} from 'react-native';
import {useState} from 'react';
   
 const Login=()=>{
   const [name,setName]=useState("");
   const [email,setEmail]=useState("");
   const [editable,isEditable]=useState(true);
   return(
     
   <View style={styles.Logincontainer}>
   <Image source={require('./iPhone X (or newer).png')} style={styles.ImageLogin}/>
   <Text style={styles.logincontainerTextOne}>Jobizz</Text>
   <Text style={styles.logincontainerTexttwo}> Welcome Back 👋</Text>
   <Text style={styles.logincontainerTexttwoMuted}>Let's log in.Apply to jobs!
   </Text>
  
    <View>
      {editable?(
        <>
          <Text style={[styles.largeText,{fontWieght:'bold'}]}></Text>
          <TextInput style={styles.largeText} value={name} placeholder="name" onChangeText={setName}
          />
           <TextInput style={styles.largeText} value={email} placeholder="email" onChangeText={setEmail}
          />
          <Button  style={styles.ButtonText} title="Log in" onPress={()=>isEditable(false) }/>  
          </>)
          :
         (
           <>
           <Text style={[styles.largeText,{fontWeight:'bold'}]}></Text>
          <Text style={styles.largeText}>Name:{name}</Text>
          <Text style={styles.largeText}>Email:{email}</Text>
          <Button title="homescreen" onPress={()=>isEditable(true)}/>
          </>
         )}
    
     <Image  source={require('./Group 52.png')}  style={styles.logincontainerTexttwomuted}/></View>
 </View>  
   );
 }
  const styles=StyleSheet.create({
     Logincontainer:{
     flex:1,
     flexDirection:'column',
     width:375,
     height:812,
     marginTop:10,
     marginRight:40 ,backgroundColor:'white'    },
     ImageLogin:{
       height:44,
       width:375,
     },logincontainerTextOne:{
       width:150,
       height:33,
       marginTop:40,
       marginLeft:16,
       fontWeight:600,
       fontFamily:'Poppins',
       fontSize:22,
       lineHeight:33,
       color:'#356899'
     },logincontainerTexttwo:{
       width:207,
       height:34,
       marginLeft:24,
       fontFamily:'Poppins',
       fontWeight:600,
       lineHeight:33.6,
       fontSize:24,
       color:'#0D0D26',
     },logincontainerTexttwoMuted:{
       width:170,
       height:22,
       marginLeft:24,
       opacity:'40%',
       fontWeight:400,
       fontSize:14,
       lineHeight:22.4,
       color:'#0D0D26'
     },logincontainerImage:{
       width:328,
       height:208,
       marginLeft:23,
       border:0.5,
       borderCurve: 1,
       color:'#AFB0B6'
     },logincontainerTexttwomuted:{
       width:327,
       height:16,
       marginLeft:24,
       marginTop:2,
       border: 0.5,
       color:'#AFB0B6'
     },largeText:{
       flex:1,
       width:327,
       height:52,
       marginTop:30,
       marginLeft:23,
       borderRadius:10,
       border:1,
       color:'#AFB0B6'
     },ButtonText:{
      width:200,
      height:56,
      marginLeft: 24,
      padding: 16,
      border:20,
      gap:10,
      borderRadius: 10,
      opacity:0

     }
  });
 export default Login