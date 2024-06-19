import { View,Text, SafeAreaView, StyleSheet } from 'react-native';
import {Image} from 'react-native';
import Framework from './components/Framework.jsx';
import Login from './components/Login.jsx';
import Homepage from './Homepage.jsx';
import FrameworkContainer from './components/Framework.jsx';

export default function App() {
  return (
  <View style={styles.LoginsectionBoxcontainer}>
    
    <FrameworkContainer style={styles.FrameworkContainer1}>
    <Framework title="Frame">
    <View style={styles.FrameworkView}>
    <Text style={styles.Framework}>
    <Image source={require('./components/Vector (1).png')}/>
    </Text>
    </View>  
    </Framework>
    <Framework title="Log in">
    <Login/>
    </Framework>
    <Framework title="Homepage">
    <Homepage/>
    </Framework>
    </FrameworkContainer>
   </View>
  
   
  );
}

const styles = StyleSheet.create({
 LoginsectionBoxcontainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  
    
  },FrameworkContainer1:{
     marginVertical:50,
     flexDirection:'column',
     padding:20
  },Framework:{
    flex:1,
    backgroundColor:'pink',
    border:1,
    borderRadius:0.5
  },FrameworkView:{
    paddingHorizontal:20,
    marginVertical:50,
     flexDirection:'column',

  }
  
});
