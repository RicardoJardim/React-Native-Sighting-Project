import React, {Component} from 'react';
import {StyleSheet,TouchableOpacity, StatusBar ,Text, View, Button } from 'react-native';

export default class Seereport extends Component{


    render() {

        return ( <View style={styles.container}>

        <Text style= {{fontSize: 30}}>
            See Report
        </Text>
      </View>

      );}


}
const styles = StyleSheet.create({
container :{
  backgroundColor: '#bbdefb',
  flex: 1,
  alignItems:'center',
  justifyContent:'center'

}});
