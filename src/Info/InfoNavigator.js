import React, {Component} from 'react';
import {Image, Platform, StyleSheet, StatusBar,Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Primeiro from './Primeiro';
import Segundo from './Segundo';
import Segundo2 from './Segundo2';
import Terceiro from './Terceiro';

export default createStackNavigator({

  Primeira: Primeiro,
  Segunda: Segundo,
  Segunda2: Segundo2,
  Terceira: Terceiro,

 },{
  navigationOptions: {
        headerTintColor: '#000000',
          headerStyle: {
        backgroundColor: '#bbdefb',
        elevation: null},
      },
  initialRouteName: 'Primeira',
}
);
