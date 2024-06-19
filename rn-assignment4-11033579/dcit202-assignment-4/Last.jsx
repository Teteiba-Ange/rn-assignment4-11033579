import React from 'react';
import { SectionList, Text, View,StyleSheet } from 'react-native';

const data = [
  {
    title: 'Jcr Executive',
    data: ['Burger King', 'Los Ageles/US'],
  },
  {
    title: 'Project Manager',
    data: ['Beats'],
  },
  {
    title: 'Project Manager',
    data: ['Facebook', 'Florida/US'],
  },
];

export default SectionListExample = () => {
  return (
    <View style={styles.SectionListBox}>
    <SectionList
      sections={data}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Text>{item}</Text>}
      renderSectionHeader={({ section }) => (
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
          {section.title},{section.data}
        </Text>
        
      )}
    />
    </View>
  );
};
const styles=StyleSheet.create({
  SectionListBox:{  
        borderWidth:1,
        height:200,
        width:354,
        borderRadius:15,
        marginHorizontal:20,
        marginVertical:20,
        marginRight:10,
        backgroundcolor:'blue'
  }
})