import React, {Component} from 'react';
import {NetInfo, WebView, Linking, StyleSheet,TouchableOpacity, StatusBar ,Text, View, Button,Image } from 'react-native';
import {Constants} from 'expo';

export default class SeeNews extends Component{

    render() {

        return (
           <WebView
                 style={{marginTop: 20}}
                source={{uri: 'https://seanews.co.uk/'}}
                startInLoadingState={true}

                />
      );
    }

}
const styles = StyleSheet.create({
container :{
  backgroundColor: '#bbdefb',
  flex: 1,
  alignItems:'center',
  justifyContent:'center'

},

textoSeaNews:{
  fontSize:22,
  fontWeight:'bold',
  color:'#000000',
  textAlign:'center',
  marginVertical:15,
  paddingVertical:10



}

});
