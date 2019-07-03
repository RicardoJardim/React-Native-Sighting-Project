import React, {Component}  from 'react';
import {Image,TextInput,Alert, StyleSheet, StatusBar ,Text, View, TouchableOpacity } from 'react-native';
import Logo from '../components/Logo.js';
import {connect } from 'react-redux';
import { getRegister } from '../store/actions/reportActions'

export default class Reg  extends Component{

  constructor(props){
    super(props);

    this.state = {
      name: '',
      surname: '',
      username : '',
      password : '',
      email: ''
    }

  this.onFirstNameChange = this.onFirstNameChange.bind(this);
  this.onSecondNameChange = this.onSecondNameChange.bind(this);
  this.onUserChange = this.onUserChange.bind(this);
  this.onPasswordChange = this.onPasswordChange.bind(this);
  this.onEmailChange = this.onEmailChange.bind(this);
  this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onFirstNameChange(e){
    this.setState({name: e.nativeEvent.text})
  }

  onSecondNameChange(e){
    this.setState({surname: e.nativeEvent.text})
  }

  onUserChange(e){

    this.setState({username: e.nativeEvent.text})
  }

  onPasswordChange(e){
    this.setState({password: e.nativeEvent.text})
  }

  onEmailChange(e){
    this.setState({email: e.nativeEvent.text})
  }

  onSubmitForm(e){
    //enviar para o endpoint de login

    const registerData = {
      name: this.state.name,
      surname: this.state.surname,
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
    };
    this.props.getRegister(registerData);

    const {register: {register}} = this.props;
     register.name ? (
       Alert.alert("Registo efetuado com sucesso"),
       this.props.navigation.navigate('Login')
   ): Alert.alert("Login Error")
  }


  _onPressButton = () => {
    // if verifica se todos os inputs ao validos e se ja existe uma conta com o mesmo user ou email
            Alert.alert("Registo efetuado com sucesso");
            this.props.navigation.navigate('Login')
    // else caso nao estaja
        //  Aler.alert("Falha no registo");
  }




render() {
  return (
      <View style = {styles.container}>

        <TextInput style = {styles.inputBox}
        name="Firstname"
        value={this.state.name}
        onChange={this.onFirstNameChange}
        autoCapitalize="none"
        placeholder= "First Name"
        placeholderTextColor="#ffffff"/>

        <TextInput style = {styles.inputBox}
        name="Secondname"
        value={this.state.surname}
        onChange={this.onSecondNameChange}
        autoCapitalize="none"
        placeholder= "Secound Name"
        placeholderTextColor="#ffffff"/>

        <TextInput style = {styles.inputBox}
        name="username"
        value={this.state.username}
        onChange={this.onUserChange}
        autoCapitalize="none"
        placeholder= "Username"
        placeholderTextColor="#ffffff"/>

        <TextInput style = {styles.inputBox}
        name="email"
        value={this.state.email}
        onChange={this.onEmailChange}
        autoCapitalize="none"
        placeholder= "E-mail"
        placeholderTextColor="#ffffff"/>

        <TextInput style = {styles.inputBox}
        name="password"
        value={this.state.password}
        onChange={this.onPasswordChange}
        autoCapitalize="none"
        placeholder= "Password "
        secureTextEntry={true}
        placeholderTextColor="#ffffff"/>

      <TouchableOpacity style= {styles.button} onPress = {this._onPressButton}>
        <Text style= {styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
      <Logo/>
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

button:{
  width:300,
  marginVertical:15 ,
  backgroundColor:'#8aacc8',
  borderRadius: 15,
  paddingVertical: 10

},

buttonText:{
  fontSize:20,
  fontWeight:'500',
  color:'#ffffff',
  textAlign:'center',
}
});
