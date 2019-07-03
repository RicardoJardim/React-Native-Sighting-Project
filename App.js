import React, {Component} from 'react';
import {Platform, StyleSheet, StatusBar,Text, View} from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
//import {NativeRouter, Switch, Route } from "react-router-native";
import {createStackNavigator, createSwitchNavigator } from 'react-navigation';
//REDUX
import { createStore, applyMiddleware, compose} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import devToolsEnhancer from 'remote-redux-devtools';
import { Provider, connect} from 'react-redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import Reg from './src/inico/Reg.js';
import Log from './src/inico/Log.js';
import AppNavigator from './src/maintab/AppNavigator';
//Ligação ao backend teste
const client = axios.create({
  baseURL: 'http://seasurface.tigerwhale.com/api/',
  responseType: 'json'
});
import mainReducer from './src/store/reducers/mainReducer';
const initialState = {};

const middleware = [thunk];

let devTools = window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__();
if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production') {
    devTools = a => a;
}

//redux store
const store = createStore(
  mainReducer,
  initialState,
  compose(applyMiddleware(...middleware), devTools)
);

export default class App extends Component{


  state = {
      isLoadingComplete:false,
  };




  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={this._loadResourcesAsync}
        onError={this._handleLoadingError}
        onFinish={this._handleFinishLoading}
      />
    );
  } else {
    return (
      <Provider store={store}>
        <Aplicacao/>
      </Provider>
    );
  }
}

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
         require('./assets/home.jpg'),
         require('./assets/info.png'),
         require('./assets/info2.png'),
         require('./assets/map.png'),
         require('./assets/news.png'),
         require('./assets/search.png'),
         require('./assets/splash.png'),
         require('./assets/make.png'),
         require('./assets/seanews.png'),
         require('./src/imagens/Fauna.jpg'),
         require('./src/imagens/Flora.jpg'),
         require('./src/imagens/logo.png')

        ]),

    ]);
  };

    _handleLoadingError = error => {
      // In this case, you might want to report the error to your error
      // reporting service, for example Sentry
      console.warn(error);
    };

    _handleFinishLoading = () => {
      this.setState({ isLoadingComplete: true });
    };
  }



const AppStackNavigator = createStackNavigator ({

    Login: Log,
    Register: Reg,
},

{
  navigationOptions: {
        headerStyle: {
        backgroundColor: '#bbdefb',
        elevation: null},
      },
  initialRouteName: 'Login',
}
);

/*

*/
const Aplicacao = createSwitchNavigator({
    Inicio: AppStackNavigator,
    Depois: AppNavigator},
    {
      initialRouteName: 'Inicio',
    }

);





const styles = StyleSheet.create({
  container :{
    backgroundColor: '#bbdefb',
    flexGrow: 1,
    alignItems:'center',
    justifyContent:'center'
},

});
