import React, {Component} from 'react';
import {Alert,StyleSheet,TouchableOpacity, StatusBar ,Text, View, TextInput, Button } from 'react-native';
import {connect} from 'react-redux';



export default class Makereport extends Component{

  static navigationOptions= {
        title: 'Create a report'
        };

  constructor(props){
    super(props);

    this.state = {
      flora : '',
      fauna: '',
      description : ''
    }

  this.onFloraChange = this.onFloraChange.bind(this);
  this.onDescriptionChange = this.onDescriptionChange.bind(this);
  this.onPressPublish = this.onPressPublish.bind(this);
  }

  onFloraChange(e){
    this.setState({flora: e.nativeEvent.text})
  }

  onDescriptionChange(e){
    this.setState({description: e.nativeEvent.text})
  }



  onPressPublish(e){
    // if verifica se todos os inputs ao validos e se ja existe uma conta com o mesmo user ou email
          Alert.alert("Publicado com sucesso");
          this.props.navigation.navigate('Mapa')
    // else caso nao estaja
    //  Aler.alert("Falha no regsto");
  }


    render() {
      const {navigation} = this.props;
      const type = {
        longitude: navigation.getParam('longitude', ''),
        latitude: navigation.getParam('latitude', ''),
      }

        return (

         <View style={styles.container}>
         <Text>longitude: {type.longitude}</Text>
         <Text>latitude: {type.latitude}</Text>

          <TextInput style = {styles.inputBox}
          name="flora"
          value={this.state.flora}
          onChange={this.onFloraChange}
          autoCapitalize="none"
          placeholder= "Flora"
          placeholderTextColor="#ffffff"/>

          <TextInput style = {styles.inputBox}
          name="fauna"
          value={this.state.flora}
          onChange={this.onFloraChange}
          autoCapitalize="none"
          placeholder= "Fauna"
          placeholderTextColor="#ffffff"/>

          <TextInput style = {styles.inputBox2}
          name="description"
          /*
          value={this.state.description}
          onchange={this.onDescriptionChange}*/
          multiline={true}
          placeholder= "Description"
          placeholderTextColor="#ffffff"/>

            <Button onPress = {this.onPressPublish}
              title="Publish" />

        </View>

      );}


}
const styles = StyleSheet.create({
container :{

  backgroundColor: '#bbdefb',
  flex: 1,
  alignItems:'center',


},
inputBox:{
  width: 300,
  height:50 ,
  backgroundColor:'#8aacc8',
  borderRadius: 15,
  paddingHorizontal: 16,
  fontSize:16,
  color: '#ffffff',
  marginVertical: 8
},
inputBox2:{
  width: 300,
  height:100 ,
  backgroundColor:'#8aacc8',
  borderRadius: 15,
  paddingHorizontal: 16,
  fontSize:16,
  color: '#ffffff',
  marginVertical: 10

}});
