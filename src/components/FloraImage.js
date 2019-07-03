import React, {Component} from 'react';
import { StyleSheet, Image ,Text, View } from 'react-native';

export default class FloraImage extends Component {
  render() {
    return (
      <View style = {styles.container}>
          <Image style={styles.foto}
          source= {require('../imagens/Flora.jpg')}/>
      </View>
    )}
    }

    const styles = StyleSheet.create({
      container :{
        flexGrow: 1,
        justifyContent:'center',
        alignItems:'center'
      },
      foto:{
        borderRadius:7,
        width: 280,
        height: 170
      }

    });
