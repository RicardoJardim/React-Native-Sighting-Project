import React, {Component} from 'react';
import { StyleSheet, Image ,Text, View } from 'react-native';

export default class Logo extends Component {
  render() {
    return (
      <View style = {styles.container}>
          <Image style={{width: 150, height: 170}}
          source= {require('../imagens/logo.png')}/>
      </View>
    )}
    }

    const styles = StyleSheet.create({
      container :{
        flexGrow: 1,
      },

    });
