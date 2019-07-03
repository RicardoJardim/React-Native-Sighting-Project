import React, {Component} from 'react';
import {AppRegistry, StyleSheet,TouchableOpacity, StatusBar ,Text, View, Button, Image } from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from  'react-native-maps';
import { connect } from 'react-redux'
import { getReports } from '../store/actions/reportActions'
import { PermissionsAndroid } from 'react-native';
import styled from 'styled-components';

import Makes from '../components/Makes';

const LATITUDE_DELTA = 0.092
const LONGITUDE_DELTA = 0.092


class Map extends Component{

    constructor(props){
        super(props);
        this.state ={
          initialPosition:{
            latitude: 32.660082586109155,
            longitude: -16.926514254176254,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0922,
            error: null,
          },
            markerPosition:{
              longitude: -34.051859,
              latitude: 22.172715,
            }
        };
      }


      watchID: ?number = null

  componentDidMount(){
      this.props.getReports();

          navigator.geolocation.getCurrentPosition((position) => {
          var lat = parseFloat(position.coords.latitude)
          var long = parseFloat(position.coords.longitude)

          var initialRegion ={
            latitude: lat,
            longitude: long,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
            error: null
          }

          this.setState({initialPosition:initialRegion})
          this.setState({markerPosition: initialRegion})
        },
        (error) => this.setState({error: error.message}),
        {enableHighAcurracy:true, timeout:20000, maximumAge:1000,distanceFilter: 10},
      );
        this.watchID = navigator.geolocation.watchPosition((position) =>{
          var lat = parseFloat(position.coords.latitude)
          var long = parseFloat(position.coords.longitude)

          var lastRegion ={
            latitude: lat,
            longitude: long,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          }
        this.setState({initialPosition: lastRegion})
        this.setState({markerPosition: lastRegion})
      },
      (error) => this.setState({error: error.message}),
      {enableHighAcurracy:true, timeout:20000, maximumAge:1000,distanceFilter: 10},
    )
}

componentWillUnmount(){
        navigator.geolocation.clearWatch(this.watchID)
      }

static navigationOptions= {
        header: null
          };

    render() {

      const {reports: {reports}} = this.props;
      const {navigate} = this.props.navigation;

      let reportMaps;
      reportMaps = reports.length > 0
      ? (
          <Container>
            <View>
                <MapView
                    style={styles.Map}
                    region={this.state.initialPosition}
                    >
                  <Marker
                        coordinate={this.state.markerPosition}>
                        <View style={styles.radius}>
                        <View style={styles.marker}/>
                        </View>
                  </Marker>
                  {
                    reports.map(report => (
                      <Marker key = {report.id}
                      coordinate={{latitude: report.latitude,
                                    longitude: report.longitude}}
                                    title={report.fauna ? report.fauna.name : report.flora.name}/>
                    ))
                  }

                </MapView>
                <TouchableOpacity style= {styles.botao} onPress ={() =>this.props.navigation.navigate('Escolhe')}>
                  <Makes/>
                </TouchableOpacity>
              </View>
              </Container>

      ): (
          <>
            <Text> Loading...</Text>
          </>
        );

        return (
        <View style={styles.container}>
            {reportMaps}
          </View>

        );
      }


}
const styles = StyleSheet.create({
  container:{
  backgroundColor: '#bbdefb',
  flex: 1,
  alignItems:'center'
  },
  Map:{
    width: 400,
    position: 'absolute',
    top:0,
    left:0,
    bottom:0,
    right:0

  },
  radius:{
      height: 50,
      width: 50,
      borderRadius: 50/2,
      overflow: 'hidden',
      backgroundColor: 'rgba(255,0,0,0.1)',
      borderWidth:1,
      borderColor:'rgba(255,0,0,0.3)',
      alignItems:'center',
      justifyContent:'center',
  },
  marker:{
    height: 20,
    width: 20,
    borderWidth:3,
    borderColor:'white',
    borderRadius: 20/2,
    overflow: 'hidden',
    backgroundColor:'red'
  },

  botao:{
    flex:1,
    left:120,
    top:550,


  }
});


const mapStateToProps = (state) => ({
  reports: state.reports
})

export default connect(mapStateToProps, { getReports })(Map)
const Container = styled.View`
  flex: 1;
`;
