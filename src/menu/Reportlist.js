import React, {Component} from 'react';
import {Image, SafeAreaView, StyleSheet,TouchableOpacity, StatusBar ,Text, View, TextInput, Button, Platform, ScrollView} from 'react-native';
import { connect } from 'react-redux'
import { getReports } from '../store/actions/reportActions'
import {Card} from 'react-native-elements'
import styled from 'styled-components';
import {createStackNavigator} from 'react-navigation'
class Reportlist extends Component{

  static navigationOptions= {
    header: null
  };

  componentDidMount(){
    this.props.getReports()
  }



  render() {
     const {reports: {reports}} = this.props;
     const {navigate} = this.props.navigation;

    let reportList;
    reportList = reports.length > 0
    ? (
      <Container>
        <View>
        {
          reports.map(report => (
              <Card
                key={report.id}
                containerStyle={{
                  backgroundColor: '#8aacc8',
                  borderRadius: 10
                }}
              >
              <CardText>{report.fauna ? report.fauna.name : report.flora.name}</CardText>
                <CardSubtitle>Created by: {report.user.username}</CardSubtitle>
                <CardSubtitle>Created at: {report.created_at}</CardSubtitle>
                <StyledButton
                  onPress={() => navigate('rota2', {
                      user: report.user.username,
                      description: report.description,
                      typeName: report.fauna ? report.fauna.name: report.flora.name,
                      typeHabitat: report.fauna ? report.fauna.habitat : report.flora.habitat,
                      created: report.created_at,
                      latitude: report.latitude,
                      longitude: report.longitude,

                    })}
                  title="View Report"
                />
              </Card>

          ))
        }
        </View>
      </Container>
    ) : (
      <>
        <Text> Loading...</Text>
      </>
    );

    return (
      <View style={styles.container}>
        {reportList}
      </View>

    );
  }


}
  const styles = StyleSheet.create({
  container :{
    backgroundColor: '#bbdefb',
    flex: 1,
    alignItems:'center',
    justifyContent:'center'


  }});

const mapStateToProps = (state) => ({
  reports: state.reports
})

export default connect(mapStateToProps, { getReports })(Reportlist)

const Container = styled.ScrollView`
  padding-top: 15px;
  width: 100%;
`
const CardText = styled.Text`
  width:50%;
  text-align: center;
  margin: 5px auto;
  color: white;
  font-size: 28px;
`
const CardSubtitle = styled.Text`
width:90%;
text-align: center;
margin: 5px auto;
color: white;
font-size: 18px;
padding-top: 5px;
padding-bottom: 5px;

`
const StyledButton = styled.Button`
  background-color: #FFFFFF;
`
