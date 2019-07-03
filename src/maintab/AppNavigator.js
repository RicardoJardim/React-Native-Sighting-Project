
import React, {Component} from 'react';
import {Image, Platform, StyleSheet, StatusBar,Text, View} from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import Homepage from '../menu/Homepage';
import Mapswitch from '../mapa/Mapswitch';
import Rotas from '../menu/Rotas';
import InfoNavigator from '../Info/InfoNavigator';
import SeeNews from '../menu/SeeNews';




export default createBottomTabNavigator({

      Home:{
          screen: Homepage,
          navigationOptions:{
             tabBarLabel: 'HOME',
             tabBarIcon:({ tintColor }) => (
               <Image source = { require
               ('../../assets/home.jpg')} style = {
                 {height: 24, width: 24}
               }/>
             )

          }
      },
      Map:{
              screen: Mapswitch,
              navigationOptions:{
                 tabBarLabel: 'MAP',
                 tabBarIcon:({ tintColor }) => (
                   <Image source = { require
                   ('../../assets/map.png')} style = {
                     {height: 24, width: 24}
                   }/>
                 )
              }
      },
      Report_List:{
            screen: Rotas,
            navigationOptions:{
               tabBarLabel: 'REPORT LIST',
               tabBarIcon:({ tintColor }) => (
                 <Image source = { require
                 ('../../assets/info.png')} style = {
                   {height: 24, width: 24}
                 }/>
               )
            }
      },
      SeaInfo:{
            screen: InfoNavigator,
            navigationOptions:{
               tabBarLabel: 'SEA INFO',
               tabBarIcon:({ tintColor }) => (
                 <Image source = { require
                 ('../../assets/info2.png')} style = {
                   {height: 24, width: 24}
                 }/>
               )
            }
      },

    SeaNews:{
          screen: SeeNews,
          navigationOptions:{
             tabBarLabel: 'SEA NEWS',
             tabBarIcon:({ tintColor }) => (
               <Image source = { require
               ('../../assets/news.png')} style = {
                 {height: 24, width: 24}
               }/>
             )
          }
    }
  }, {

        tabBarOptions:{
            activeTintColor:'blue',
            inactiveTintColor:'grey',
            style: {
              backgroundColor:'white',
              borderTopWidth:1,
              elevation: 15
            }


        }

});
