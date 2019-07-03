import React, {Component} from 'react';
import {Image, SafeAreaView, StyleSheet,TouchableOpacity, StatusBar ,Text, View, Button, TextInput, Platform } from 'react-native';


export default class Escolha extends Component{

  constructor(props){
    super(props);
    this.state = {
      latitude: 32.660082586109155,
      longitude: -16.926514254176254,
    };
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
       (position) => {
         this.setState({
           latitude: position.coords.latitude ,
           longitute: position.coords.longitude
         })
       },
       (error) => { console.log(error); },
       { enableHighAccuracy: true, timeout: 30000 }
     )
   }
  render() {

    const {navigate} = this.props.navigation;

      return ( <View style={styles.container}>

                <Text style= {{fontSize: 30, textAlignVertical: 'top'}}>
                            Pick coordinates
                </Text>

                <TouchableOpacity style= {styles.button}
                    onPress ={() =>navigate('Make',{
                      longitude: this.state.longitude,
                      latitude: this.state.latitude,

                    })}>
                    <Text style= {styles.buttonText}>GPS</Text>
                </TouchableOpacity>

                <TouchableOpacity style= {styles.button}
                    onPress ={() =>this.props.navigation.navigate('Manual2')}>
                    <Text style= {styles.buttonText}>Choose a place</Text>
                </TouchableOpacity>


    </View>

    );}


}
  const styles = StyleSheet.create({
  container :{
    backgroundColor: '#bbdefb',
    flex: 1,
    alignItems:'center',
},
button:{
  width:300,
  marginVertical:20 ,
  backgroundColor:'#8aacc8',
  borderRadius: 15,
  paddingVertical: 35

},

buttonText:{
  fontSize:30,
  fontWeight:'500',
  color:'#ffffff',
  textAlign:'center'

}});
