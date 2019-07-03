import React, {Component} from 'react';
import {Image, SafeAreaView, StyleSheet,TouchableOpacity, StatusBar ,Text, View, Button, TextInput, Platform } from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from  'react-native-maps';

export default class Manual extends Component{

  static navigationOptions= {
        title: 'Chose a place'
        };
  constructor(props){
    super(props);
    this.state={
        region:{
          latitude: 32.660082586109155,
          longitude: -16.926514254176254,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0922,
        },
        coordenadas:{
          latitude: 32.65930430284389,
          longitude: -16.92542206476935,

        }
      };
    this.onChange = this.onChange.bind(this);
    this.onRegionChange = this.onRegionChange.bind(this);
  }



onRegionChange(region) {
    this.setState({ region });
  }

onChange(e){
  this.setState({coordenadas: e.nativeEvent.coordinate });
}



    render() {
    const {navigate} = this.props.navigation;

        return (

          <View style={styles.container}>

              <MapView style={styles.Map}
                  region={this.state.region}
                  >
                  <Marker draggable
                        onDragEnd = {this.onChange}
                        coordinate={this.state.coordenadas}/>
              </MapView>

              <Button style= {styles.botao} onPress ={() =>navigate('Make',{
                                            longitude: this.state.coordenadas.longitude,
                                              latitude: this.state.coordenadas.latitude
                                              })}
                title= "check"/>
            </View>

      );}


}
const styles = StyleSheet.create({
  container:{
  backgroundColor: '#bbdefb',
  flex: 1,
  paddingTop: 60,
  alignItems: 'center'
  },
  Map:{
    position: 'absolute',
    top:0,
    left:0,
    bottom:0,
    right:0

  },
  botao:{
    flex:1,
    alignSelf: 'flex-end',
    marginHorizontal:15,
    paddingVertical:450

  }
});
