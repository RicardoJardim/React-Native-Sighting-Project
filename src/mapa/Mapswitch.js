import React, {Component} from 'react';
import {Image, Platform, StyleSheet, StatusBar,Text, View} from 'react-native';
import {createStackNavigator } from 'react-navigation';


import Map from './Map';
import Makereport from './Makereport';
import Escolha from './Escolha';
import Manual from './Manual';



export default createStackNavigator({

        Mapa: Map,
        Escolhe: Escolha,
        Manual2: Manual,
        Make: Makereport
      },
      {
        navigationOptions: {
              headerStyle: {
              backgroundColor: '#bbdefb',
              elevation: null},
            },
        initialRouteName: 'Mapa',
      }


 );
