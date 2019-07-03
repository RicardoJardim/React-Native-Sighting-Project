
import React, {Component} from 'react';
import {StyleSheet,TouchableOpacity, StatusBar ,Text, View, Button, SafeAreaView } from 'react-native';
import { connect } from 'react-redux'
import {getUsers} from '../store/actions/userActions'

import Logo from '../components/Logo.js';

class Homepage extends Component{

  logout= () => {

      this.props.navigation.navigate('Inicio');
    }

//chamar o nome do utilizador que fez login na app

  render() {
    const {users: {users}} = this.props;

      return (
          <View style={styles.container}>
          <Text style= {{fontSize: 30}} >
                Welcome
                {users.name}
          </Text>
          <Logo/>
          <Text style= {{fontSize: 30}} >
                
              to SeaSurface!
          </Text>

      <TouchableOpacity style= {styles.button} onPress ={this.logout}>
        <Text style= {styles.buttonText}>Logout</Text>
      </TouchableOpacity>

    </View>



    );}


}
const styles = StyleSheet.create({
  container :{
    backgroundColor: '#bbdefb',
    flex: 5,
    alignItems:'center',
    justifyContent:'center',
    paddingVertical: 50,

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

export default connect(mapStateToProps, { getUsers })(Homepage);
