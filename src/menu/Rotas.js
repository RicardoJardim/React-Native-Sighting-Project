import React, {Component} from 'react';
import {Image, Platform, StyleSheet, StatusBar,Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Reportlist from './Reportlist';
import ReportDetail from './ReportDetail';


export default createStackNavigator({

  rota1: Reportlist,
  rota2: ReportDetail,

 },{
  navigationOptions: {
        headerTintColor: '#000000',
          headerStyle: {
        backgroundColor: '#bbdefb',
        elevation: null},
      },
  initialRouteName: 'rota1',
}
);
