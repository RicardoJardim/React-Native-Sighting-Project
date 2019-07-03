import React, {Component} from 'react';
import {Image, SafeAreaView, StyleSheet,TouchableOpacity, StatusBar ,Text, View, Button, TextInput, Platform } from 'react-native';

import FaunaImage from '../components/FaunaImage';
import FloraImage from '../components/FloraImage';

export default class Primeiro extends Component{

  static navigationOptions= {
        title: 'SEA INFO'
        };

render() {
  return (
          <View style={styles.container}>
                <View style={{
                    flexDirection:'row', padding:10,
                    backgroundColor:'white', marginHorizontal: 8,
                    elevation:1, borderRadius: 7
                  }}>
                    <Image source = { require
                    ('../../assets/search.png')} style = {
                      {marginRight: 10 ,height: 24, width: 24}
                    }/>
                    <TextInput
                          underlineColorAndroid='transparent'
                          placeholder="Search"
                          placeholderTextColor="grey"
                          style={{flex:1, fontWeight:'400', backgroundColor: 'white'}}/>
           </View>

           <TouchableOpacity style= {styles.button} onPress ={() =>this.props.navigation.navigate('Segunda') }>
             <Text style= {styles.buttonText}>Flora</Text>
            < FloraImage/>
          </TouchableOpacity>

           <TouchableOpacity style= {styles.button} onPress ={() =>this.props.navigation.navigate('Segunda2') }>
             <Text style= {styles.buttonText}>Fauna</Text>
             <FaunaImage/>
           </TouchableOpacity>


          </View>

      );
    }


}
const styles = StyleSheet.create({
container :{
  backgroundColor: '#bbdefb',
  flex: 1,
  alignItems:'center'
},
button:{
  width:300,
  marginVertical:15 ,
  backgroundColor:'#8aacc8',
  borderRadius: 7,
  paddingVertical: 10,


},

buttonText:{
  fontSize:20,
  fontWeight:'500',
  color:'#ffffff',
  textAlign:'center'

}
});
