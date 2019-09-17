import React from 'react';
import { Text, StyleSheet, Button, TouchableOpacity, View } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
  <View>
    <Text style={styles.text}>HomeScreen</Text>
    <Button title = "Press here" onPress = {() =>{
        navigation.navigate("Component")
    }}/>
    <TouchableOpacity onPress = {()=>{
      navigation.navigate("ImageDisplay")
    }}>
      <Text>Touch Here</Text>
    </TouchableOpacity>
  </View>);
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
