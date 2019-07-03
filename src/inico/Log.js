import React, {Component} from 'react';
import {Image,TextInput,Alert, StyleSheet, StatusBar ,Text, View, TouchableOpacity } from 'react-native';
import {createSwitchNavigator } from 'react-navigation';

import Logo from '../components/Logo.js';
import AppNavigator from '../maintab/AppNavigator';
import {connect } from 'react-redux'
import {getUsers} from '../store/actions/userActions'

class Log extends Component {
constructor(props){
  super(props);
  this.state = {
    email : '',
    password : ''
  }

  this.onUserChange = this.onUserChange.bind(this);
  this.onPasswordChange = this.onPasswordChange.bind(this);
  this.onSubmitForm = this.onSubmitForm.bind(this);

}

onUserChange(e){
  this.setState({email: e.nativeEvent.text})
}

onPasswordChange(e){
  this.setState({password: e.nativeEvent.text})
}

onSubmitForm(e){
  //enviar para o endpoint de login
  const toSend = {
    email: this.state.email,
    password: this.state.password
  };

//  this.props.getUsers(toSend);

  const {users: {users}} = this.props;
   users.name ? (
     Alert.alert("Login success"),
     this.props.navigation.navigate('Depois')
 ): Alert.alert("Login Error")
}

change = () =>{
  Alert.alert("Login success"),
  this.props.navigation.navigate('Depois')

}

render() {





  const {navigate} = this.props.navigation;

    return (


    <View style={styles.container}>
      <Logo/>
      <TextInput style = {styles.inputBox}
      name="email"
      value={this.state.email}
      onChange={this.onUserChange}
      autoCapitalize="none"
      placeholder= "Email"
      placeholderTextColor="#ffffff"/>

      <TextInput style = {styles.inputBox}
      name="password"
      value={this.state.password}
      onChange={this.onPasswordChange}
      autoCapitalize="none"
      placeholder= "Password "
      secureTextEntry={true}
      placeholderTextColor="#ffffff"/>

      <TouchableOpacity style= {styles.button} onPress ={this.change }>
        <Text style= {styles.buttonText}>Login</Text>
      </TouchableOpacity>

        <View style={styles.signupTextCont}>
        <Text style={styles.signupText}>Don't have an account yet?  </Text>
        <TouchableOpacity style = {styles.signupButton}  onPress = {() =>this.props.navigation.navigate('Register')}>
          <Text style={styles.signupButton}>Sign up</Text>
        </TouchableOpacity>



      </View>
    </View>


);}

}


const styles = StyleSheet.create({
container :{
  backgroundColor: '#bbdefb',
  flex: 1,
  alignItems:'center',
  justifyContent:'center'

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
signupTextCont:{
  flexGrow: 1,
  alignItems:'flex-end',
  justifyContent:'center',
  paddingVertical:30,
  flexDirection:'row'

},
signupText:{
  fontSize:14,
  color: '#ffffff',

},
signupButton:{
  fontWeight: 'bold',
  fontSize:14
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
  textAlign:'center'

}
});

const mapStateToProps = (state) => ({
  users: state.users
})

export default connect(mapStateToProps, { getUsers })(Log);
